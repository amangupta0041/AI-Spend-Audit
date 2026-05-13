# Reflection

**1. The hardest bug you hit this week, and how you debugged it**
The hardest bug was the Anthropic API call silently failing in the production environment on Vercel, despite working perfectly on localhost. I hypothesized it was either a missing environment variable or a timeout issue. I checked the Vercel dashboard and the variable was there. I then added verbose logging (`console.log`) in the Next.js API route to print the exact request payload and the error object. The logs revealed a 504 Gateway Timeout. The default Vercel serverless function timeout is 10 seconds, and the LLM was taking 12 seconds to generate the summary. I fixed it by explicitly setting `export const maxDuration = 30;` in the API route file.

**2. A decision you reversed mid-week, and what made you reverse it**
I initially started building the form using plain React Context. By Day 2, the context provider became massive and every keystroke was causing the entire form to re-render, making it incredibly sluggish. I reversed this decision and rewrote the state management using `react-hook-form` and `Zustand`. This isolated the re-renders to individual fields and made the persistence to local storage a one-liner.

**3. What you would build in week 2 if you had it**
I would build the "Benchmark Mode." The real value isn't just knowing you spend $500; it's knowing that *other companies your size* only spend $200. I would aggregate the anonymized data from Week 1 to create an average "spend per developer" metric and display a chart comparing the user's spend against the aggregate curve.

**4. How you used AI tools**
I used **Cursor (Claude 3.5 Sonnet)** primarily. 
- **Tasks:** Scaffolding boilerplate components (e.g., generating the Tailwind classes for the form inputs) and writing the regex for email validation.
- **Didn't Trust:** I did not trust it with the core audit logic. I wrote the heuristic rules manually to ensure they made financial sense.
- **When it was wrong:** I asked Cursor to write a Jest test for a function that calculated annual savings. The AI assumed a 10% annual discount was always applied and hardcoded a `.9` multiplier into the test assertion, which failed because my logic correctly checked if the user was on a monthly or annual billing cycle first. I caught it and corrected the test.

**5. Self-rating (1–10)**
- **Discipline (9/10):** Started immediately, logged consistent hours, didn't cram on the weekend.
- **Code Quality (8/10):** Clean, typed, and modular, though the audit engine could be refactored into a more extensible plugin pattern.
- **Design Sense (8/10):** Looks clean and modern, dark mode looks premium, though it lacks bespoke micro-animations.
- **Problem-solving (9/10):** Effectively debugged deployment issues and navigated ambiguous requirements.
- **Entrepreneurial thinking (10/10):** Heavily prioritized the GTM and Economics files because code without distribution is useless.
