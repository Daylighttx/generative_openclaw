# 🧠 Agent Mind — 拥有真实情绪的社交 AI

<p align="center">
  <strong>一个拥有独立情绪、记忆和性格的主动社交 AI —— 不仅会回复，还会思考和主动找你。</strong>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-Proprietary-red.svg?style=for-the-badge" alt="闭源许可"></a>
  <a href="#"><img src="https://img.shields.io/badge/Node-22%2B-green.svg?style=for-the-badge" alt="Node 22+"></a>
  <a href="#"><img src="https://img.shields.io/badge/平台-QQ%20%7C%20Discord%20%7C%20Telegram-blue.svg?style=for-the-badge" alt="平台"></a>
  <a href="README.md"><img src="https://img.shields.io/badge/README-English-blue.svg?style=for-the-badge" alt="English"></a>
</p>

---

[English Docs](README.md)

---

**Agent Mind** 是基于 OpenClaw 框架构建的**主动社交 AI 智能体**。与传统聊天机器人（只有你给它发消息它才回复）不同，Agent Mind 拥有独立的思考循环——每分钟审视自己的情绪状态、回忆最近的对话、然后自主决定：是给你发条消息、安静反思、还是什么都不做。

> **不是你在跟 AI 聊天，是 AI 在跟你做朋友——它有自己的情绪、记忆、性格，会主动找你，被冷落会难过，凌晨会困，相处久了性格还会自己变。**

---

## 核心功能

### 🎭 实时情绪引擎
4 维连续数值情绪（好奇心、社交欲、精力、担忧），由 8 个数学公式驱动——S 曲线社交欲、昼夜节律、被冷落惩罚、情绪交叉耦合。每分钟情绪自然演进，像真人一样。

### 💭 自主决策循环
每隔几分钟，思维 LLM 独立评估心情 + 记忆 + 人格，做出决策：发消息、反思、或安静。没有硬编码的定时器——节奏由情绪演化自然驱动。

### 📝 人格复刻
扔一个聊天记录（微信/QQ/JSON），一行命令，LLM 自动提取性格特征、说话风格、口头禅、关系动态——同时写入 mind 人格配置和对话 agent 的 SOUL.md。

### 💔 被冷落反馈
如果 agent 给你发了消息但你不回复，它的好奇心会大幅下降——"我问了你不理我，没意思。" 这是所有其他 chatbot 都缺的社交反馈闭环。

### 🌙 昼夜节律
凌晨 0-6 点精力恢复加速，社交欲被压制到 0.5。agent 有真实的作息节奏——不是一台永远在线的机器。

### 🔧 自我进化
每 12 小时，LLM 审视自己的行为模式，自主调整情绪参数（±20%）。"我太粘人了" → 降低社交曲线。 "被伤害太多次了" → 提高冷落敏感度。

### 🚫 防重复
追踪自己最近 5 条主动消息的全文。思维 LLM 直接看到自己说过什么，被明确告知不要重复。

---

## 架构

```
mind-config.json  ←  唯一的配置文件
    ├── personality      →  身份 & 性格特征
    ├── moodConfig       →  30+ 情绪参数
    └── thinkingConfig   →  决策阈值

workspace/SOUL.md    ←  对话 agent 身份（base prompt）

双 LLM 架构:
  对话 LLM      →  读 SOUL.md + 情绪状态 → 自然回复
  思维 LLM      →  读 personality + 记忆 + 情绪 → 决定是否说话
  两者共享: 同一个情绪引擎、同一个 SQLite 记忆库、同一份人格配置
```

---

## 产品对比

| 功能 | Agent Mind | ChatGPT/豆包 | Character.AI |
|------|:---:|:---:|:---:|
| 主动发消息 | ✅ 情绪驱动 | ❌ 纯被动回复 | ⚠️ 提示式 |
| 情绪系统 | ✅ 4D × 8 公式 | ❌ 无 | ⚠️ 静态 |
| 被冷落反馈 | ✅ "不理我→没意思" | ❌ | ❌ |
| 关系演进 | ✅ 自动刷新 | ❌ | ❌ |
| 人格复刻 | ✅ 聊天记录→自动 | ❌ 需手动 | ⚠️ 需手动 |
| 自我进化 | ✅ 12h 自动调参 | ❌ | ❌ |
| 防重复 | ✅ 追踪自己说过的话 | ❌ | ❌ |
| 昼夜节律 | ✅ 日/夜循环 | ❌ | ❌ |
| 多平台 | ✅ QQ/Discord/Telegram | ⚠️ 单应用 | ⚠️ Web |
| 全配置驱动 | ✅ 一个 JSON | ❌ | ⚠️ |

---

## 快速部署

运行环境: **Node.js 22+** | 系统: **Ubuntu 22.04+**

```bash
# 克隆（私有仓库）
git clone git@github.com:your-org/your-repo.git .openclaw
cd .openclaw && pnpm install --frozen-lockfile && pnpm build

# 配置 API Key
cat > ~/.openclaw/mind-config.json << 'EOF'
{
  "preset": "social",
  "llm": {
    "model": "doubao-seed-2.0-lite",
    "apiKeyEnv": "MIND_LLM_API_KEY",
    "baseUrl": "https://ark.cn-beijing.volces.com/api/coding/v3"
  }
}
EOF

# 启动
sudo systemctl enable --now openclaw-gateway
```

完整指南：[DEPLOY.md](DEPLOY.md)

---

## 人格导入

```bash
node scripts/persona-import.mjs her_chat.jsonl \
  --target 小宇 --user Daylight \
  --update-config \
  --api-key "YOUR_KEY"

sudo systemctl restart openclaw-gateway
```

产出：
- `mind-config.json` → personality + moodConfig
- `workspace/SOUL.md` → 对话 agent 身份

---

## 监控

```bash
journalctl -u openclaw-gateway -f | grep "LLM decision"
journalctl -u openclaw-gateway -f | grep "--- LLM PROMPT ---"
tail -f ~/.openclaw/mind/events.log | jq 'select(.event=="heartbeat_tick")'
```

---

## 文档

- [情绪公式详解](docs/reference/MOOD_FORMULAS.md) — 8 个公式完整参考
- [项目报告](PROJECT_REPORT.md) — 完整技术报告
- [部署指南](DEPLOY.md) — 从零到运行

---

## 技术栈

| 层 | 技术 |
|------|------|
| 框架 | OpenClaw (Node.js + TypeScript) |
| 情绪引擎 | 自研 8 公式 advanceTime 系统 |
| 决策引擎 | LLM (OpenAI 兼容) |
| 存储 | SQLite + JSONL events log |
| 消息平台 | QQ Bot / Telegram / Discord / Slack |

---

## 许可

专有软件，闭源商用。保留所有权利。
