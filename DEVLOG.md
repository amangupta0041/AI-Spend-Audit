## Day 1 — 2026-05-07
**Hours worked:** 3
**What I did:** Read the prompt, researched competitor pricing, structured the Next.js app, and set up Tailwind CSS. Wrote the GTM and Economics plans.
**What I learned:** It's surprising how hard it is to find clear API pricing for older OpenAI models on their new site. I had to dig into the docs.
**Blockers / what I'm stuck on:** Figuring out the best way to handle persistent state without a login.
**Plan for tomorrow:** Build the multi-step form and local storage hydration.

## Day 2 — 2026-05-08
**Hours worked:** 4
**What I did:** Built the spend input form. Added support for Cursor, Copilot, Claude, ChatGPT, and Windsurf. Implemented Zustand for state management with local storage persistence.
**What I learned:** Zustand's `persist` middleware is incredibly clean for this use case compared to React Context.
**Blockers / what I'm stuck on:** The form feels a bit tedious if a user has 5+ tools. Need to streamline the UX.
**Plan for tomorrow:** Write the audit engine logic and the heuristic rules for savings.

## Day 3 — 2026-05-09
**Hours worked:** 5
**What I did:** Wrote the core audit logic. Defined rules for "redundant tools" (e.g., having both Copilot and Cursor) and "wrong tier" (e.g., Team plan for 1 user). Mapped pricing data into constants.
**What I learned:** Financial math in JavaScript is prone to floating-point errors. Had to use careful rounding for the annual savings projections.
**Blockers / what I'm stuck on:** None today.
**Plan for tomorrow:** Build the results page UI and integrate the Anthropic API for the personalized summary.

## Day 4 — 2026-05-10
**Hours worked:** 0
**What I did:** Took the day off to attend a family event.
**What I learned:** N/A
**Blockers / what I'm stuck on:** N/A
**Plan for tomorrow:** Results page and Anthropic API.

## Day 5 — 2026-05-11
**Hours worked:** 4
**What I did:** Built the Results page UI. It looks great—used a dark theme with neon accents to feel "premium." Integrated the Anthropic API via Next.js API routes. Added error handling for rate limits.
**What I learned:** Next.js App Router API routes make it very easy to hide API keys while streaming responses.
**Blockers / what I'm stuck on:** The Anthropic API occasionally times out if the prompt is too large. Added a fallback static string.
**Plan for tomorrow:** Lead capture, Supabase integration, and shareable URLs.

## Day 6 — 2026-05-12
**Hours worked:** 5
**What I did:** Set up a free Supabase Postgres database. Created a simple schema for `audits` and `leads`. Built the email capture modal. Implemented unique shareable URLs using UUIDs.
**What I learned:** Supabase's auto-generated APIs saved me from writing custom CRUD routes.
**Blockers / what I'm stuck on:** Open Graph tags require absolute URLs, which was tricky to test locally.
**Plan for tomorrow:** Write tests, polish the README, deploy to Vercel, and submit.

## Day 7 — 2026-05-13
**Hours worked:** 3
**What I did:** Wrote Jest tests for the audit engine logic. Added a GitHub Actions workflow. Deployed the app to Vercel. Finalized all required markdown files.
**What I learned:** Testing pure functions (like the audit logic) is much easier than testing React components.
**Blockers / what I'm stuck on:** None. Ready to ship.
**Plan for tomorrow:** Wait for Round 2!
