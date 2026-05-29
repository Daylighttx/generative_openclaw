# OpenClaw Agent Mind 部署指南

## 前置要求

- Ubuntu 22.04+ 干净服务器
- 一个 GitHub 私有仓库（推荐）或 tar 文件
- API Key（豆包/OpenAI 兼容）
- QQ Bot 配置（如需 QQ 频道）

## 快速部署（从 GitHub）

### 1. 服务器准备

```bash
# SSH 到服务器
ssh root@your-server

# 一键部署
export GIT_REPO_URL="git@github.com:your-org/your-private-repo.git"
export MIND_LLM_API_KEY="your-api-key"
curl -fsSL https://raw.githubusercontent.com/your-org/your-repo/main/SETUP.sh | bash -s --
```

### 2. 手动部署步骤

```bash
# 1) 创建用户
useradd -m -s /bin/bash openclaw

# 2) 安装 Node.js 22 + pnpm
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt-get install -y nodejs sqlite3
npm install -g pnpm

# 3) 拉取代码
su - openclaw
git clone git@github.com:your-org/your-private-repo.git .openclaw
cd .openclaw

# 4) 安装 & 构建
pnpm install --frozen-lockfile
pnpm build

# 5) 配置 API Key
mkdir -p ~/.openclaw
cat > ~/.openclaw/mind-config.json << 'EOF'
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

# 6) 退出 openclaw 用户，创建 systemd 服务
exit  # 回到 root

cat > /etc/systemd/system/openclaw-gateway.service << 'EOF'
[Unit]
Description=OpenClaw Gateway
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=openclaw
WorkingDirectory=/home/openclaw/.openclaw
Environment=NODE_ENV=production
Environment=OPENCLAW_HOME=/home/openclaw
Environment=MIND_LLM_API_KEY=YOUR_API_KEY_HERE
ExecStart=/usr/bin/node /home/openclaw/.openclaw/openclaw.mjs gateway run --port 18789
Restart=always
RestartSec=5
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
EOF

# 7) 启动
systemctl daemon-reload
systemctl enable --now openclaw-gateway
```

## 配置 QQ 频道

```bash
su - openclaw
cd .openclaw

# 编辑 openclaw.json, 添加 QQ Bot channel
# 参考: https://docs.openclaw.dev/channels/qqbot
vim openclaw.json
```

## 人格复刻

```bash
cd /home/openclaw/.openclaw

# 上传聊天记录到服务器
# 然后:
node scripts/persona-import.mjs her_chat.jsonl \
  --target 小宇 --user Daylight \
  --update-config \
  --api-key "YOUR_API_KEY"

sudo systemctl restart openclaw-gateway
```

## 监控 & 调试

```bash
# 实时决策
journalctl -u openclaw-gateway -f | grep "LLM decision"

# 完整 LLM 提示词
journalctl -u openclaw-gateway -f | grep "--- LLM PROMPT ---"

# mood 实时值 (events.log 必须可写)
tail -f /home/openclaw/.openclaw/mind/events.log | jq -r 'select(.event=="heartbeat_tick") | "\(.ts[11:19]) s=\(.sociability) e=\(.energy) c=\(.curiosity)"'

# 错误
journalctl -u openclaw-gateway -f | grep -i error

# 重启
sudo systemctl restart openclaw-gateway
```

## 调参

编辑 `/home/openclaw/.openclaw/mind-config.json`，重启生效:

```json
{
  "moodConfig": {
    "sCurveMultiplier": 0.08,
    "sCurvePeakMinutes": 30,
    "neglectCuriosityPenalty": 0.3,
    "nightSocCap": 0.5
  },
  "thinkingConfig": {
    "minIntervalMs": 300000,
    "maxProactivePerDay": 48
  }
}
```

## 部署架构

```
/home/openclaw/.openclaw/          ← 项目根
├── src/                            ← TypeScript 源码
│   ├── agents/mood.ts              ← 情绪引擎 (425行)
│   └── memory/
│       ├── thinking-loop.ts        ← 决策循环 (600行)
│       ├── agent-mind.ts           ← 总控 (450行)
│       ├── agent-mind-bridge.ts    ← 桥接+注入 (380行)
│       ├── store.ts                ← SQLite 存储
│       └── ...
├── scripts/persona-import.mjs      ← 人格复刻 CLI
├── openclaw.mjs                    ← 入口
├── dist/                           ← 编译产物 (pnpm build 生成)
└── package.json

/home/openclaw/.openclaw/           ← 数据目录
├── mind-config.json                ← 唯一配置文件
├── mind/main.db                    ← SQLite 记忆库
├── mind/events.log                 ← mood 事件日志
└── workspace/SOUL.md               ← 对话身份
```
