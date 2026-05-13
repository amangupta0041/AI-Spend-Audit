# Architecture

## System Diagram
```mermaid
graph TD
    A[User lands on Page] --> B[Fills Spend Input Form]
    B --> C[State stored in Zustand + LocalStorage]
    C --> D{Audit Engine evaluates rules}
    D --> E[Results Page rendered]
    E --> F[Next.js API Route calls Anthropic]
    F --> G[Anthropic returns personalized summary]
    E --> H[User opts into Email Capture]
    H --> I[Save to Supabase DB]
    I --> J[Generate Shareable URL via dynamic route /audit/[id]]
```

## Data Flow
1. **Input:** User enters tool usage details in a React-hook-form.
2. **State:** Data is kept in client-side state using Zustand, persisted to `localStorage` so they don't lose progress on refresh.
3. **Audit:** A pure JavaScript rules engine processes the state, applying heuristics (e.g., `if user uses Copilot AND Cursor, recommend dropping Copilot`).
4. **Summary Generation:** The frontend sends a sanitized JSON of the audit results to a Next.js serverless API route, which constructs a prompt and calls the Anthropic API.
5. **Storage:** If the user submits their email, the audit JSON and email are saved to a Supabase Postgres table. The DB returns a UUID.
6. **Sharing:** The UUID is used to construct a shareable link `domain.com/audit/[uuid]`. A server component reads the DB to render the public view and populate Open Graph meta tags.

## Why I Chose This Stack
- **Next.js (App Router):** Chosen because it allows me to build the frontend, the backend API (for Anthropic), and server-side render the shareable pages (required for Open Graph tags to work properly on Twitter/Slack) all in one repository.
- **Tailwind CSS:** For rapid UI development without writing custom CSS files. It enables the "premium" aesthetic out of the box.
- **Zustand:** Lighter and less boilerplate than Redux. Perfect for managing the multi-step form state.
- **Supabase:** The fastest way to spin up a Postgres database with a ready-to-use API. Much simpler than configuring my own ORM and connection pooling for a 7-day project.
- **TypeScript:** Enforces strict contracts between the form data and the audit engine, preventing entire classes of bugs (e.g., treating a string "20" as an integer).

## Handling 10k Audits/Day
If this scaled to 10k audits a day:
1. **Caching:** I would cache the Anthropic API responses for identical tool stacks. If two users input the exact same stack and spend, they should get the same summary. This would save massive API costs.
2. **Database Load:** Supabase can handle 10k reads/writes easily, but I would add connection pooling (PgBouncer) if using a raw DB, and perhaps move the audit generation to a background queue (e.g., Inngest) so the UI doesn't block while writing to the DB.
3. **Rate Limiting:** Implement strict rate limiting (via Upstash/Redis) on the Anthropic API endpoint to prevent malicious actors from racking up a bill.
