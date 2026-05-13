# Credex AI Spend Audit

A free web tool that helps startups instantly identify where they are overspending on AI subscriptions and API costs. Designed for Engineering Managers and Founders to right-size their stack.

## Live Demo
**[https://credex-ai-audit-gamma.vercel.app](https://credex-ai-audit-gamma.vercel.app)**

## Screenshots
*(Mock screenshots representing the application flow)*
1. `docs/assets/form-input.png`
2. `docs/assets/audit-results.png`
3. `docs/assets/email-capture.png`

## Quick Start
```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Run tests
npm test
```

To deploy: Connect to Vercel and set the `ANTHROPIC_API_KEY` and `NEXT_PUBLIC_SUPABASE_URL` / `SUPABASE_ANON_KEY` in the environment variables.

## Decisions (Trade-offs made)
1. **Next.js over Vite/React:** Trade-off: slightly more complex setup, but absolutely necessary for dynamic Open Graph meta tags on the shareable `/audit/[id]` routes, which a pure client-side SPA cannot do well.
2. **Hardcoded Engine over LLM Math:** Trade-off: requires manual updating of `PRICING_DATA.md`, but LLMs are too unreliable at financial arithmetic to trust with a user's budget.
3. **Zustand over Context API:** Trade-off: adding a 3rd party dependency, but the performance gains for a complex multi-step form with local storage persistence are worth it.
4. **Supabase over custom Postgres:** Trade-off: vendor lock-in to Supabase's API, but it allowed me to ship database storage, UUID generation, and edge functions in hours instead of days.
5. **No Auth/Login:** Trade-off: Users could spam the form or lose data if they clear cookies before submitting, but requiring login *before* showing value would kill the conversion rate of the tool.