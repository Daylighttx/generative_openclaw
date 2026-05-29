# 🧠 Agent Mind — Social AI with Real Emotions

<p align="center">
  <strong>A proactive AI companion with its own mood, memory, and personality — not just replies, but thinks and reaches out.</strong>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-Proprietary-red.svg?style=for-the-badge" alt="Proprietary"></a>
  <a href="#"><img src="https://img.shields.io/badge/Node-22%2B-green.svg?style=for-the-badge" alt="Node 22+"></a>
  <a href="#"><img src="https://img.shields.io/badge/Platform-QQ%20%7C%20Discord%20%7C%20Telegram-blue.svg?style=for-the-badge" alt="Platforms"></a>
  <a href="README_CN.md"><img src="https://img.shields.io/badge/README-%E4%B8%AD%E6%96%87-red.svg?style=for-the-badge" alt="中文"></a>
</p>

---

[中文文档](README_CN.md)

---

**Agent Mind** is a _proactive social AI agent_ built on the OpenClaw framework. Unlike traditional chatbots that only respond when you message them, Agent Mind has its own independent thought loop — it checks its mood every minute, reflects on recent conversations, and autonomously decides whether to reach out, stay quiet, or just think to itself.

> **You're not talking to AI. The AI is being your friend — it has its own emotions, memories, and personality. It reaches out to you. It gets sad when ignored. It changes over time.**

---

## Core Features

### 🎭 Real-time Emotion System
4-dimensional continuous mood values (curiosity, sociability, energy, concern) driven by 8 mathematical formulas — S-curve social desire, circadian rhythm, neglect penalty, cross-dimension coupling. Every minute, the mood evolves naturally like a real person's.

### 💭 Autonomous Decision Loop
Every few minutes, the thinking LLM independently evaluates mood + memory + personality and makes a decision: message, reflect, or idle. No hardcoded timers — the rhythm is driven by mood evolution.

### 📝 Persona Cloning
Drop in a chat log (WeChat/QQ/JSON), run one command, and the LLM extracts personality traits, speaking style, quirks, and relationship dynamics — writing both the mind personality config and a SOUL.md for the chat agent.

### 💔 Neglect Feedback
If the agent messages you and you don't reply, its curiosity drops sharply — "I asked something, they ignored me, I'm losing interest." This is the social feedback loop that all other chatbots lack.

### 🌙 Circadian Rhythm
Energy recovers during deep night (00:00-06:00), social desire is capped at midnight. The agent has a realistic daily rhythm — not an always-on machine.

### 🔧 Self-Evolving Personality
Every 12 hours, the LLM reviews its own behavior patterns and autonomously adjusts mood parameters (±20%). "I'm being too clingy" → lowers sociability curve. "I've been hurt too much" → raises neglect sensitivity.

### 🚫 Anti-Repetition
Tracks its own last 5 proactive messages. The thinking LLM explicitly sees what it already said and is told not to repeat.

---

## Architecture

```
mind-config.json  ←  Single config file for everything
    ├── personality      →  Identity & character traits
    ├── moodConfig       →  30+ emotion parameters
    └── thinkingConfig   →  Decision thresholds

workspace/SOUL.md    ←  Chat agent identity (base prompt)

Dual LLM Architecture:
  Chat LLM      →  Reads SOUL.md + mood state → Replies naturally
  Thinking LLM  →  Reads personality + memories + mood → Decides to message
  Both share: same mood engine, same SQLite memory, same personality config
```

---

## Comparison

| Feature | Agent Mind | ChatGPT/Doubao | Character.AI |
|---------|:---:|:---:|:---:|
| Proactive Messaging | ✅ Mood-driven | ❌ Reactive only | ⚠️ Prompt-based |
| Emotion System | ✅ 4D × 8 formulas | ❌ None | ⚠️ Static |
| Neglect Feedback | ✅ "Ignored → sad" | ❌ | ❌ |
| Relationship Evolution | ✅ Auto-refresh | ❌ | ❌ |
| Persona Cloning | ✅ Chat log → auto | ❌ Manual | ⚠️ Manual |
| Self-Evolving | ✅ 12h auto-tune | ❌ | ❌ |
| Anti-Repetition | ✅ Tracks own words | ❌ | ❌ |
| Circadian Rhythm | ✅ Day/night cycle | ❌ | ❌ |
| Multi-Platform | ✅ QQ/Discord/Telegram | ⚠️ Single app | ⚠️ Web |
| Config-Driven | ✅ One JSON | ❌ | ⚠️ |

---

## Quick Deploy

Runtime: **Node.js 22+** | OS: **Ubuntu 22.04+**

```bash
# Clone (private repo)
git clone git@github.com:your-org/your-repo.git .openclaw
cd .openclaw && pnpm install --frozen-lockfile && pnpm build

# Configure
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

# Start
sudo systemctl enable --now openclaw-gateway
```

Full guide: [DEPLOY.md](DEPLOY.md)

---

## Persona Import

```bash
node scripts/persona-import.mjs her_chat.jsonl \
  --target Name --user You \
  --update-config \
  --api-key "YOUR_KEY"

sudo systemctl restart openclaw-gateway
```

---

## Monitoring

```bash
journalctl -u openclaw-gateway -f | grep "LLM decision"
journalctl -u openclaw-gateway -f | grep "--- LLM PROMPT ---"
tail -f ~/.openclaw/mind/events.log | jq 'select(.event=="heartbeat_tick")'
```

---

## Docs

- [Mood Formulas](docs/reference/MOOD_FORMULAS.md) — 8 equations reference
- [Project Report](PROJECT_REPORT.md) — Full technical report
- [Deploy Guide](DEPLOY.md) — From zero to running

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | OpenClaw (Node.js + TypeScript) |
| Emotion Engine | Custom 8-formula advanceTime system |
| Decision Engine | LLM (OpenAI-compatible) |
| Storage | SQLite + JSONL events log |
| Messaging | QQ Bot / Telegram / Discord / Slack |

---

## License

Proprietary. All rights reserved.
