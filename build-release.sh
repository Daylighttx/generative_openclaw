#!/usr/bin/env bash
set -euo pipefail
# ============================================================
# build-release.sh — 编译 Agent Mind 为可部署包
# 产出: release/openclaw-release.tar.gz
# ============================================================

RELEASE_DIR="release"
RELEASE_NAME="openclaw-release-$(date +%Y%m%d-%H%M%S)"
RELEASE_PKG="${RELEASE_DIR}/${RELEASE_NAME}.tar.gz"

mkdir -p "$RELEASE_DIR"

echo "=== 1. pnpm install ==="
pnpm install --frozen-lockfile

echo "=== 2. pnpm build ==="
pnpm build

echo "=== 3. pnpm install --prod ==="
# 移除 devDependencies 节省空间
pnpm install --prod --frozen-lockfile --ignore-scripts 2>/dev/null || true

echo "=== 4. 打包 release ==="
tar -czf "$RELEASE_PKG" \
  --exclude='node_modules/.cache' \
  --exclude='node_modules/.pnpm' \
  --exclude='*.tsbuildinfo' \
  --exclude='dist/**/*.map' \
  --exclude='src' \
  --exclude='test' \
  --exclude='.git' \
  --exclude='*.tar.gz' \
  --exclude='qa' \
  --exclude='patches' \
  --exclude='security' \
  --exclude='skills' \
  --exclude='docs' \
  --exclude='apps' \
  --exclude='extensions' \
  --exclude='ui' \
  --exclude='config' \
  --exclude='git-hooks' \
  openclaw.mjs \
  package.json \
  pnpm-lock.yaml \
  pnpm-workspace.yaml \
  dist/ \
  node_modules/ \
  scripts/persona-import.mjs

echo ""
echo "Done: $RELEASE_PKG"
du -h "$RELEASE_PKG"
echo ""
echo "### 部署 ###"
echo "scp $RELEASE_PKG root@server:/tmp/"
echo "ssh root@server"
echo "  mkdir -p /home/openclaw/.openclaw"
echo "  tar -xzf /tmp/${RELEASE_NAME}.tar.gz -C /home/openclaw/.openclaw/"
echo "  # 然后创建 systemd 服务并启动"
