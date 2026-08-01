# YardOS Codex Instructions

## Product
YardOS is a multi-tenant operating system for car dealers. The first vertical is vehicle sales, but shared domain models should remain reusable for motorcycles and machinery.

## Build principles
- Keep financial calculations deterministic and auditable.
- Never mark a cheque or payment as cleared from OCR/SMS alone; require confirmation.
- Every record belongs to a workspace/dealer.
- Use server components by default and client components only for interaction.
- Keep forms mobile-friendly for showroom and yard staff.
- Store money as integer minor units, never floating point.
- Add validation and useful empty/loading/error states.
- Do not add AI unless a normal rules-based workflow is insufficient.

## MVP order
1. App shell and responsive dashboard.
2. Supabase authentication and workspace membership.
3. Vehicle CRUD, lifecycle, photos, costs and profitability.
4. Customers, sales and payment schedules.
5. Receivables, payables and cheque register.
6. Leasing cases and settlement tracking.
7. Public inventory website and lead capture.
8. Reminders, reports and audit log.

## Quality checks
Before finishing a task, run:
- npm install
- npm run build
- TypeScript checks
- Verify responsive layout at mobile and desktop widths

Use small, reviewable commits and do not rewrite unrelated files.
