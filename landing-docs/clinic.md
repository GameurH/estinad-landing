---
app: clinic
tagline: Run your clinic from one connected desk
status: flagged-off
---

# Sahara Clinic

A clinic management app built on the SaharaOS platform — for medical practices that need reception, consultations, lab orders, and billing in one place. **Development is frozen until Q4 2027** while the team focuses on hospitality; features below reflect implemented code, not a current product offering.

## Features

### Reception desk
Manage the patient queue, walk-ins, and today's appointment timeline from a single front-desk screen.
- Source: `apps/clinic/lib/features/reception/screens/reception_screen.dart`, route `/reception`

### Doctor dashboard
Doctors see today's appointments and patient summaries without navigating the full clinic system.
- Source: `apps/clinic/lib/features/doctor/screens/doctor_dashboard_screen.dart`, route `/doctor`

### Practice dashboard
Administrators and receptionists get an overview of clinic activity and key metrics.
- Source: `apps/clinic/lib/features/dashboard/screens/dashboard_screen.dart`, route `/dashboard`

### Patient records
Search, create, and edit patient profiles with detail panels for demographics and history.
- Source: `apps/clinic/lib/features/patients/`, route `/patients`

### Appointment scheduling
Calendar views (day, week, month) with booking, blocking time slots, and appointment cards.
- Source: `apps/clinic/lib/features/appointments/screens/appointments_screen.dart`, route `/appointments`

### Consultations
Conduct visits with SOAP notes, vital signs entry, medical history timeline, and prescription building.
- Source: `apps/clinic/lib/features/consultation/screens/consultation_screen.dart`, route `/consultations`

### Prescription printing
Generate and print prescriptions from the consultation workflow.
- Source: `apps/clinic/lib/features/consultation/widgets/print_prescription_dialog.dart`

### Lab orders
Create and track laboratory orders linked to patients and consultations.
- Source: `apps/clinic/lib/features/lab_orders/`, route `/lab-orders`

### Billing & invoicing
Issue invoices, record payments, print receipts, and run daily cash reports.
- Source: `apps/clinic/lib/features/billing/screens/billing_screen.dart`, route `/billing`

### Role-based access
Navigation and screens are gated by role — admin, receptionist, doctor, nurse — so staff only see what they need.
- Source: `apps/clinic/lib/core/shell/app_shell.dart`

### Staff & settings
Configure clinic settings, staff accounts, and role permissions from an admin settings area.
- Source: `apps/clinic/lib/features/settings/`, route `/settings`

## Tech highlights (optional, only if genuinely differentiating)
Built on shared `sahara_core` and `sahara_ui` packages — when development resumes, the clinic app inherits sync, auth patterns, and UI consistency from the restaurant ecosystem.

---

**Status note:** Frozen per `apps/clinic/FROZEN.md` (paused January 2026, resume targeted Q4 2027). Do not publish as a live product until development resumes.
