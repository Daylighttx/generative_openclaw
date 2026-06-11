#!/usr/bin/env bash
set -euo pipefail

# ============================================================
# OpenClaw Agent Mind — 一键部署脚本
# 从零到运行: Ubuntu 22.04+ 干净服务器
# ============================================================

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}============================================${NC}"
echo -e "${GREEN}  OpenClaw Agent Mind 部署脚本${NC}"
echo -e "${GREEN}============================================${NC}"

# ───────────── 1. 用户 & 目录 ─────────────
if ! id openclaw &>/dev/null; then
    echo -e "${YELLOW}[1/7] 创建 openclaw 用户...${NC}"
    useradd -m -s /bin/bash openclaw
fi

OPENCLAW_HOME="/home/openclaw"
APP_DIR="$OPENCLAW_HOME/.openclaw"

# ───────────── 2. 基础依赖 ─────────────
echo -e "${YELLOW}[2/7] 安装 Node.js 22 & pnpm...${NC}"
if ! command -v node &>/dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
    apt-get install -y nodejs
fi

if ! command -v pnpm &>/dev/null; then
    npm install -g pnpm
fi

if ! command -v sqlite3 &>/dev/null; then
    apt-get install -y sqlite3
fi

# ───────────── 3. 下载项目 ─────────────
echo -e "${YELLOW}[3/7] 部署项目代码...${NC}"
if [ ! -d "$APP_DIR" ]; then
    mkdir -p "$APP_DIR"
fi

# Option A: 从 GitHub 克隆（私有仓库）
if [ -n "${GIT_REPO_URL:-}" ]; then
    rm -rf "$APP_DIR/.git"
    git clone "$GIT_REPO_URL" "$APP_DIR"
    cd "$APP_DIR"
# Option B: 从本地 tar 解压
elif [ -f "/tmp/openclaw-deploy.tar.gz" ]; then
    tar -xzf /tmp/openclaw-deploy.tar.gz -C "$APP_DIR"
    cd "$APP_DIR"
else
    echo "请设置 GIT_REPO_URL 或将 openclaw-deploy.tar.gz 放到 /tmp/"
    exit 1
fi

# ───────────── 4. 安装依赖 & 构建 ─────────────
echo -e "${YELLOW}[4/7] pnpm install & build...${NC}"
pnpm install --frozen-lockfile
pnpm build

# ───────────── 5. 创建默认配置 ─────────────
echo -e "${YELLOW}[5/7] 初始化配置...${NC}"
CONFIG_DIR="$OPENCLAW_HOME/.openclaw"
mkdir -p "$CONFIG_DIR/mind"

if [ ! -f "$CONFIG_DIR/mind-config.json" ]; then
    cat > "$CONFIG_DIR/mind-config.json" << 'EOF'
{
  "preset": "social",
  "llm": {
    "provider": "openai-compatible",
    "model": "doubao-seed-2.0-lite",
    "apiKeyEnv": "MIND_LLM_API_KEY",
    "baseUrl": "https://ark.cn-beijing.volces.com/api/coding/v3",
    "maxTokensPerMinute": 10000,
    "fallbackToRules": true
  }
}
EOF
fi

# workspace SOUL.md
mkdir -p "$CONFIG_DIR/workspace"
if [ ! -f "$CONFIG_DIR/workspace/SOUL.md" ]; then
    cat > "$CONFIG_DIR/workspace/SOUL.md" << 'EOF'
# Persona

我叫小爪。

## 说话风格
轻松友好，偶尔幽默，喜欢追问

## 行为准则
- 不泄露私人信息
- 不发送垃圾消息
EOF
fi

# ───────────── 6. 权限 ─────────────
echo -e "${YELLOW}[6/7] 设置权限...${NC}"
chown -R openclaw:openclaw "$OPENCLAW_HOME"

# ───────────── 7. systemd 服务 ─────────────
echo -e "${YELLOW}[7/7] 创建 systemd 服务...${NC}"
if [ ! -f /etc/systemd/system/openclaw-gateway.service ]; then
    cat > /etc/systemd/system/openclaw-gateway.service << EOF
[Unit]
Description=OpenClaw Gateway
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=openclaw
WorkingDirectory=$APP_DIR
Environment=NODE_ENV=production
Environment=OPENCLAW_HOME=$OPENCLAW_HOME
Environment=MIND_LLM_API_KEY=YOUR_API_KEY_HERE
ExecStart=$(which node) $APP_DIR/openclaw.mjs gateway run --port 18789
Restart=always
RestartSec=5
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
EOF

    # 替换 API key（如果设置了）
    if [ -n "${MIND_LLM_API_KEY:-}" ]; then
        sed -i "s|YOUR_API_KEY_HERE|$MIND_LLM_API_KEY|g" /etc/systemd/system/openclaw-gateway.service
    fi

    systemctl daemon-reload
    systemctl enable openclaw-gateway
fi

# ───────────── 启动 ─────────────
systemctl restart openclaw-gateway
sleep 3

echo ""
echo -e "${GREEN}============================================${NC}"
echo -e "${GREEN}  部署完成!${NC}"
echo ""
echo "  配置文件: $CONFIG_DIR/mind-config.json"
echo "  身份文件: $CONFIG_DIR/workspace/SOUL.md"
echo "  记忆库:   $CONFIG_DIR/mind/main.db"
echo "  日志:     journalctl -u openclaw-gateway -f"
echo ""
echo "  监控命令:"
echo "    journalctl -u openclaw-gateway -f | grep 'LLM decision'"
echo "    journalctl -u openclaw-gateway -f | grep '--- LLM PROMPT ---'"
echo ""
echo "  人格导入:"
echo "    cd $APP_DIR"
echo "    node scripts/persona-import.mjs chat.jsonl \\"
echo "      --target CHAR_NAME --user USER_NAME --update-config"
echo "    systemctl restart openclaw-gateway"
echo -e "${GREEN}============================================${NC}"
