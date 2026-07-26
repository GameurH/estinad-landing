---
app: ecosystem_admin
tagline: Manage every Sahara tenant from one console
status: flagged-off
---

# Sahara Ecosystem Admin

A Next.js web admin console for operating the SaharaOS SaaS platform — tenant onboarding, license control, and audit visibility. The app lives under `apps/archived/` and is excluded from the active Melos workspace; treat as internal/archived, not a customer-facing product.

## Features

### Admin login
Secure sign-in for platform operators before accessing tenant and license management.
- Source: `apps/archived/ecosystem_admin/app/login/page.tsx`

### Operations dashboard
Overview of tenant counts (active, trial, suspended), license health, recent activity, and system alerts.
- Source: `apps/archived/ecosystem_admin/app/(admin)/dashboard/page.tsx`

### Tenant management
Browse, search, and filter all restaurant tenants; open detail views for individual businesses.
- Source: `apps/archived/ecosystem_admin/app/(admin)/tenants/page.tsx`, `apps/archived/ecosystem_admin/app/(admin)/tenants/[id]/page.tsx`

### License management
View and manage device licenses tied to tenants — status, expiry, and provisioning control.
- Source: `apps/archived/ecosystem_admin/app/(admin)/licenses/page.tsx`

### Audit log
Review platform-wide audit events — who did what, when, and for which tenant.
- Source: `apps/archived/ecosystem_admin/app/(admin)/audit/page.tsx`

### Platform settings
Configure admin-level settings for the ecosystem operator account.
- Source: `apps/archived/ecosystem_admin/app/(admin)/settings/page.tsx`

## Tech highlights (optional, only if genuinely differentiating)
Backed by Supabase for tenant, license, and audit data — aligned with the same cloud infrastructure Sahara POS syncs against.

---

**Status note:** Archived and ignored in `melos.yaml`. Root README lists "Sahara Admin" as coming soon — this codebase is a starting point, not a shipped admin product.
