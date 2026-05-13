# User Interviews

**Interview 1: A.K., CTO, Seed-stage Fintech**
- **Quotes:** 
  - "I just put my card on file for OpenAI and told the team to use whatever they need. I haven't looked at the bill in three months."
  - "We have a few guys using Cursor and a few using Copilot. I think we're double paying for at least two of them."
  - "If a tool told me I was wasting $50, I wouldn't care. If it told me I was wasting $500, I'd pause."
- **Most surprising thing:** He assumed API costs were the biggest drain, but realized during our chat that unused seat licenses for ChatGPT Enterprise were actually costing him more.
- **What it changed:** I decided to add a specific "Seat Utilization" heuristic in the audit engine to highlight the cost of unused seats versus active API usage.

**Interview 2: R.M., Lead Engineer, Series B DevTools startup**
- **Quotes:**
  - "Our CFO asked me to justify our Anthropic API spend last week and I had to spend two hours pulling usage logs."
  - "I'd definitely use a calculator like this, but I wouldn't put my real email in unless it gave me a PDF I could forward to finance."
  - "Everyone wants to use Opus, but 90% of our internal tools could run on Haiku."
- **Most surprising thing:** She viewed the tool not as a way to save money, but as a weapon to justify the budget to non-technical leadership.
- **What it changed:** I realized the PDF export (Bonus feature) is actually critical for internal sharing. I also ensured the audit specifically calls out "downgrade to cheaper model" as a savings vector.

**Interview 3: J.T., Solo Founder, AI Wrapper SaaS**
- **Quotes:**
  - "I'm literally optimizing pennies. I switched from GPT-4o to Claude Haiku for a background task and saved $40 last month."
  - "I already know all the pricing. A basic calculator wouldn't help me, I have a spreadsheet for that."
  - "What I *would* care about is knowing if there's a startup credit program I'm missing out on."
- **Most surprising thing:** He was aggressively optimizing, but was entirely unaware of secondary markets or platforms like Credex for discounted credits.
- **What it changed:** It validated that the "Credex solution" callout at the end of the audit is the perfect hook. Even hyper-aware founders don't know they can buy discounted bulk credits.
