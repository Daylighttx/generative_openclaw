# 🧠 Agent Mind — Social AI with Real Emotions

<p align="center">
  <strong>A proactive AI companion that has its own mood, memory, and personality — not just replies, but thinks and reaches out.</strong>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-Proprietary-red.svg?style=for-the-badge" alt="Proprietary License"></a>
  <a href="#"><img src="https://img.shields.io/badge/Node-22%2B-green.svg?style=for-the-badge" alt="Node 22+"></a>
  <a href="#"><img src="https://img.shields.io/badge/Platform-QQ%20%7C%20Discord%20%7C%20Telegram-blue.svg?style=for-the-badge" alt="Platforms"></a>
</p>

---

**Agent Mind** is a _proactive social AI agent_ built on the OpenClaw framework. Unlike traditional chatbots that only respond when you message them, Agent Mind has its own independent thought loop — it checks its mood every minute, reflects on recent conversations, and autonomously decides whether to reach out, stay quiet, or just think to itself.

> **You're not talking to AI. The AI is being your friend — it has its own emotions, memories, and personality. It reaches out to you. It gets sad when ignored. It changes over time.**

---

**Agent Mind** 是基于 OpenClaw 框架构建的**主动社交 AI 智能体**。与传统聊天机器人不同，Agent Mind 拥有独立的思考循环——它每分钟审视自己的情绪状态、回忆最近的对话、然后自主决定：是给用户发条消息、安静反思、还是什么都不做。

> **不是你在跟 AI 聊天，是 AI 在跟你做朋友——它有自己的情绪、记忆、性格，会主动找你，被冷落会难过，凌晨会困，相处久了性格还会自己变。**

---

## Core Features / 核心功能

### 🎭 Real-time Emotion System / 实时情绪引擎
4-dimensional continuous mood values (curiosity, sociability, energy, concern) driven by 8 mathematical formulas — S-curve social desire, circadian rhythm, neglect penalty, cross-dimension coupling. Every minute, the mood evolves naturally like a real person's.

### 💭 Autonomous Decision Loop / 自主决策循环
Every few minutes, the thinking LLM independently evaluates mood + memory + personality and makes a decision: message, reflect, or idle. No hardcoded timers — the rhythm is driven by mood evolution.

### 📝 Persona Cloning / 人格复刻
Drop in a chat log (WeChat/QQ/JSON), run one command, and the LLM extracts personality traits, speaking style, quirks, and relationship dynamics — writing both the mind personality config and a SOUL.md for the chat agent.

### 💔 Neglect Feedback / 被冷落反馈
If the agent messages you and you don't reply, its curiosity drops sharply — "I asked something, they ignored me, I'm losing interest." This is the social feedback loop that all other chatbots lack.

### 🌙 Circadian Rhythm / 昼夜节律
Energy recovers during deep night (00:00-06:00), social desire is capped at midnight. The agent has a realistic daily rhythm — not an always-on machine.

### 🔧 Self-Evolving Personality / 自我进化
Every 12 hours, the LLM reviews its own behavior patterns and autonomously adjusts mood parameters (±20%). "I'm being too clingy" → lowers sociability curve. "I've been hurt too much" → raises neglect sensitivity.

### 🚫 Anti-Repetition / 反重复
Tracks its own last 5 proactive messages. The thinking LLM explicitly sees what it already said and is told not to repeat.

---

## Architecture / 架构

```
mind-config.json  ←  Single config file for everything
    ├── personality      →  Identity & character traits
    ├── moodConfig       →  30+ emotion parameters
    └── thinkingConfig   →  Decision thresholds

workspace/SOUL.md    ←  Chat agent identity (base prompt)

双 LLM 架构:
  Chat LLM      →  Reads SOUL.md + mood state → Replies naturally
  Thinking LLM  →  Reads personality + memories + mood → Decides to message
  Both share: same mood engine, same SQLite memory, same personality config
```

---

## Comparison / 对比

| Feature | Agent Mind | ChatGPT/Doubao | Character.AI |
|---------|:---:|:---:|:---:|
| Proactive Messaging / 主动消息 | ✅ Mood-driven | ❌ Reactive only | ⚠️ Prompt-based |
| Emotion System / 情绪系统 | ✅ 4D × 8 formulas | ❌ None | ⚠️ Static |
| Neglect Feedback / 被冷落反馈 | ✅ "Ignored → sad" | ❌ | ❌ |
| Relationship Evolution / 关系演进 | ✅ Auto-refresh | ❌ | ❌ |
| Persona Cloning / 人格复刻 | ✅ Chat log → auto | ❌ Manual | ⚠️ Manual |
| Self-Evolving / 自我进化 | ✅ 12h auto-tune | ❌ | ❌ |
| Anti-Repetition / 反重复 | ✅ Tracks own words | ❌ | ❌ |
| Circadian Rhythm / 昼夜节律 | ✅ Day/night cycle | ❌ | ❌ |
| Multi-Platform / 多平台 | ✅ QQ/Discord/Telegram | ⚠️ Single app | ⚠️ Web |
| Config-Driven / 全配置驱动 | ✅ One JSON | ❌ | ⚠️ |

---

## Quick Deploy / 快速部署

Runtime: **Node.js 22+** | OS: **Ubuntu 22.04+**

```bash
# 1. Clone (private repo)
git clone git@github.com:your-org/your-repo.git .openclaw
cd .openclaw

# 2. Install & build
pnpm install --frozen-lockfile
pnpm build

# 3. Configure API key
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

# 4. Start
sudo systemctl enable --now openclaw-gateway
```

Full guide: [DEPLOY.md](DEPLOY.md)

---

## Persona Import / 人格导入

```bash
node scripts/persona-import.mjs her_chat.jsonl \
  --target 小宇 --user Daylight \
  --update-config \
  --api-key "YOUR_API_KEY"

sudo systemctl restart openclaw-gateway
```

Outputs:
- `mind-config.json` → personality + moodConfig
- `workspace/SOUL.md` → chat agent identity

---

## Monitoring / 监控

```bash
# Real-time decisions
journalctl -u openclaw-gateway -f | grep "LLM decision"

# Full LLM prompt (thinking LLM)
journalctl -u openclaw-gateway -f | grep "--- LLM PROMPT ---"

# Mood values
tail -f ~/.openclaw/mind/events.log | jq 'select(.event=="heartbeat_tick") | "s=\(.sociability) e=\(.energy) c=\(.curiosity)"'

# Self-evolution events
journalctl -u openclaw-gateway -f | grep "personality adapted"
```

---

## Docs / 文档

- [Mood Formulas](docs/reference/MOOD_FORMULAS.md) — Complete formula reference (8 equations)
- [Project Report](PROJECT_REPORT.md) — Full technical report
- [Deploy Guide](DEPLOY.md) — Deployment from scratch

---

## Tech Stack / 技术栈

| Layer | Technology |
|-------|-----------|
| Framework | OpenClaw (Node.js + TypeScript) |
| Emotion Engine | Custom 8-formula advanceTime system |
| Decision Engine | LLM (doubao-seed-2.0-lite / OpenAI-compatible) |
| Storage | SQLite (better-sqlite3) + JSONL events log |
| Messaging | QQ Bot / Telegram / Discord / Slack |
| Config | mind-config.json — fully config-driven |

---

## License / 许可

Proprietary. All rights reserved. 闭源商用。
