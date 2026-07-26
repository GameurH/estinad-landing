---
app: sahara_loyalty_portal
tagline: Let customers check points on their phone
status: flagged-off
---

# Sahara Loyalty Portal

A planned mobile-first web portal where restaurant customers check loyalty points and transaction history without asking staff or installing an app. **No application code exists in the repository** — only a product requirements document. Everything below is specified intent, not implemented functionality.

## Features (planned — not implemented)

### Phone-based identity
Customers enter their phone number to look up their loyalty account.
- Source: `apps/sahara_loyalty_portal/PRD.md` (US-1)

### Order verification
Verify identity with a recent order number to prevent unauthorized balance lookups.
- Source: `apps/sahara_loyalty_portal/PRD.md` (US-2)

### Points balance
Display current loyalty points balance after successful verification.
- Source: `apps/sahara_loyalty_portal/PRD.md` (US-3)

### Transaction history
Show points earned and redeemed over time.
- Source: `apps/sahara_loyalty_portal/PRD.md` (US-4)

### Mobile web access (PWA)
Accessible via QR code on receipts — no app store install required.
- Source: `apps/sahara_loyalty_portal/PRD.md` (US-6)

---

**Human review required:** This app has no `package.json`, source files, or routes — only `PRD.md`. Do not publish landing content until implementation exists. Loyalty earn/redeem is already available inside Sahara POS (`/settings/loyalty`); this portal would extend that to customer self-service.
