# Metrics

**North Star Metric**
**Qualified Consultations Booked per Month.**
*Why:* DAU, Pageviews, and even "Audits Completed" are vanity metrics. The entire economic engine of this tool relies on identifying high-spend startups and converting them into Credex customers. A "Qualified Consultation" means the tool successfully identified real savings (>$500/mo), the user trusted the result enough to provide their email, and they took the final high-friction step of booking a call.

**3 Input Metrics that Drive the North Star**
1. **Audit Completion Rate:** (Audits Completed / Unique Visitors). This measures if the landing page copy and form UX are compelling enough to get users to finish the input process.
2. **High-Savings Discovery Rate:** (Audits identifying >$500 savings / Total Audits). This tells us if we are acquiring the *right* traffic. If this is 1%, we are targeting hobbyists, not Series A startups.
3. **Email Capture Conversion Rate:** (Emails Submitted / Audits Completed). This measures the perceived value of the audit report. If they don't give an email, the report wasn't insightful enough to warrant follow-up.

**What I'd Instrument First**
Using PostHog or Mixpanel, I would instrument the exact drop-off points in the form funnel:
- `page_view`
- `form_started`
- `tool_added` (with properties for which tool, e.g., `tool: cursor`)
- `audit_completed`
- `email_captured`
- `consultation_clicked`

**What Number Triggers a Pivot Decision**
If the **High-Savings Discovery Rate is consistently below 5% after 1,000 audits**, I would pivot. It would mean the tool is technically functioning, but the premise that "most startups are bleeding money on AI" is empirically false among our audience, or we are completely failing to reach decision-makers. We would need to pivot the marketing entirely away from "savings" and perhaps toward "benchmarking" or abandon the lead-gen channel.
