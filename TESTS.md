# Tests

To run the tests locally:
```bash
npm run test
```

## Test Coverage

| Filename | What it covers | How to run |
| :--- | :--- | :--- |
| `src/__tests__/auditEngine.test.ts` | **Test 1:** Correctly identifies redundant coding tools. Checks if user has both GitHub Copilot AND Cursor. Asserts that the engine recommends dropping Copilot and calculates savings accordingly. | `npm test -t "redundant tools"` |
| `src/__tests__/auditEngine.test.ts` | **Test 2:** Evaluates correct tier scaling. Checks if a user with `seats: 1` is on a "Team" or "Enterprise" plan for Claude. Asserts that the engine recommends downgrading to "Pro" and accurately models the monthly savings difference. | `npm test -t "tier scaling"` |
| `src/__tests__/auditEngine.test.ts` | **Test 3:** API direct vs Wrapper markup. Checks if user is spending >$200/mo on an AI writing tool (wrapper) while primary use case is "writing". Asserts recommendation to switch to direct Anthropic API. | `npm test -t "api direct markup"` |
| `src/__tests__/auditEngine.test.ts` | **Test 4:** No savings manufactured. Inputs a highly optimal stack (e.g., 1 developer on Cursor Pro, 1 writer on Claude Pro). Asserts that the engine returns $0 savings and triggers the "You're spending well" fallback message. | `npm test -t "optimal stack"` |
| `src/__tests__/auditEngine.test.ts` | **Test 5:** Total savings calculation. Mocks an input with 3 separate sub-optimal configurations and asserts that the `totalMonthlySavings` and `totalAnnualSavings` variables accurately sum the individual recommendations without double-counting. | `npm test -t "total savings summation"` |
