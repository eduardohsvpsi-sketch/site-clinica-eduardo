---
name: felo-landingpage
description: "Generate landing pages/webpages with the Felo Landing Page Task API. Use when users ask to create/make/generate a landing page, marketing page, single-page website, AI webpage, HTML page result, or when explicit commands like /felo-landingpage are used. Handles API key check, task creation, polling shared task history, and final ai_page_html output."
---

# Felo Landing Page Skill

## Setup
1. Visit https://felo.ai -> Settings -> API Keys
2. Configure environment variable `FELO_API_KEY`

## How to Execute
Run with `agy-node felo-landingpage/scripts/run_landingpage_task.mjs --query "USER_PROMPT_HERE" --interval 10 --max-wait 1800 --timeout 60`
