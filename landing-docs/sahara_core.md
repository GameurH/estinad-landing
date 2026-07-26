---
app: sahara_core
tagline: One brain powering every Sahara app
status: shipped
---

# Sahara Core

The shared foundation library for the SaharaOS ecosystem. Every POS, waiter, and kitchen app runs on the same business models, data access, and sync engine — so orders, inventory, and customers stay consistent across devices.

## Features

### Unified business models
Orders, products, customers, payments, shifts, tables, and loyalty share one schema — so data means the same thing everywhere in the ecosystem.
- Source: `packages/sahara_core/lib/sahara_core.dart`

### Repository layer
Ready-made data access for orders, inventory, customers, payments, shifts, tables, and more — so apps focus on UI instead of reinventing database logic.
- Source: `packages/sahara_core/lib/repositories/repositories.dart`

### Offline-first sync engine
Bidirectional sync between local PocketBase and Supabase with queue processing, conflict handling, and checkpoint recovery — built for unreliable internet.
- Source: `packages/sahara_core/lib/sync/sync.dart`, `README.md`

### Network auto-discovery
mDNS/Bonjour service discovery lets companion devices find the POS on the LAN without manual configuration.
- Source: `packages/sahara_core/lib/network/network_discovery.dart`

### Multi-tenant provisioning
License-based device onboarding, hardware fingerprinting, and tenant configuration for SaaS deployments across many restaurants.
- Source: `packages/sahara_core/lib/provisioning/provisioning.dart`

### Auto-update delivery
Check for, download, and apply app updates with version management — keeping terminals on the latest release safely.
- Source: `packages/sahara_core/lib/updates/updates.dart`

### Print routing engine
Route receipts and kitchen tickets to the right printer or station based on product configuration — shared by POS and KDS.
- Source: `packages/sahara_core/lib/repositories/print_routing_repository.dart`, `packages/sahara_core/lib/ffi/printer/`

### Role-based permissions
Granular permission definitions power consistent access control across cashier, manager, and admin workflows.
- Source: `packages/sahara_core/lib/models/permission.dart`, `packages/sahara_core/lib/models/role.dart`

### AI business context
Structured context providers feed order, customer, and product data to the in-app AI assistant for accurate, actionable answers.
- Source: `packages/sahara_core/lib/ai/ai.dart`

### Product import schemas
Declarative CSV import schemas and PocketBase/Supabase sinks wire bulk catalog loading into POS workflows.
- Source: `packages/sahara_core/lib/importer/importer.dart`

### Operational error logging
Capture and persist application errors to the local database for support and diagnostics without losing crash context.
- Source: `packages/sahara_core/lib/logging/logging.dart`

## Tech highlights (optional, only if genuinely differentiating)
Designed offline-first: local PocketBase is the source of truth during service; cloud sync is the backup and multi-site bridge, not a hard dependency.
