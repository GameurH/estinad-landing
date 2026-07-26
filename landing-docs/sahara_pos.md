---
app: sahara_pos
tagline: The engine behind every Sahara checkout
status: shipped
product_line: platform
---

# Sahara POS (Platform)

The shared cashier and back-office application for SaharaOS — one Flutter codebase powers multiple **product lines** configured at setup time via business type. This is the technical app; for marketing pages, use the product-line docs below.

## Product lines (customer-facing)

| Product | Audience | Doc |
|---------|----------|-----|
| **Sahara Retail** | Shops, boutiques, clothing, general retail | [sahara_retail.md](./sahara_retail.md) |
| **Sahara Restaurant — Full Ecosystem** | POS + Waiter + KDS | [sahara_restaurant_ecosystem.md](./sahara_restaurant_ecosystem.md) |
| **Sahara Restaurant — POS with Printers** | Counter/café with kitchen printers only | [sahara_restaurant_pos.md](./sahara_restaurant_pos.md) |

Business type at provisioning selects which features are visible — retail hides tables/KDS/waiter; restaurant enables kitchen routing and optionally ecosystem apps.

- Source: `packages/sahara_core/lib/models/business_type.dart`, `apps/sahara_pos/lib/core/services/business_type_controller.dart`

## Shared platform features

These capabilities exist in the app for all product lines (some gated by business type):

### Business dashboard
- Source: `apps/sahara_pos/lib/features/dashboard/dashboard_screen.dart`, route `/dashboard`

### Alerts inbox
- Source: `apps/sahara_pos/lib/features/inbox/screens/inbox_screen.dart`, route `/inbox`

### Sales reports & analytics
- Source: `apps/sahara_pos/lib/features/reports/reports_screen.dart`, route `/reports`

### Catalog management (menu/products)
- Source: routes `/menu/categories`, `/menu/products`, `/menu/variants`

### Bulk product import
- Source: `apps/sahara_pos/lib/features/menu/import/product_import_screen.dart`

### Inventory tracking
- Source: `apps/sahara_pos/lib/features/inventory/screens/inventory_screen.dart`, route `/inventory`

### Customer profiles & loyalty
- Source: `apps/sahara_pos/lib/features/customers/`, route `/settings/loyalty`

### Checkout terminal
- Source: `apps/sahara_pos/lib/features/pos/pos_screen.dart`, route `/pos-terminal`

### Shift & cash control
- Source: `apps/sahara_pos/lib/features/shift/`, route `/shift`

### PIN login, roles & permissions
- Source: `apps/sahara_pos/lib/features/auth/`, `apps/sahara_pos/lib/features/roles/`

### Cloud sync & backup
- Source: routes `/settings/sync`, `/settings/backup`

### Command palette (Ctrl+K)
- Source: `apps/sahara_pos/lib/core/services/command_palette_service.dart`

### AI assistant
- Source: `apps/sahara_pos/lib/core/ai/ai_chat_controller.dart`, route `/settings/ai`

## Tech highlights (optional, only if genuinely differentiating)
Single codebase, multiple verticals — `BusinessTypeFeatures` toggles 40+ feature flags so one app serves retail counters and full-service restaurants without forking the repository.
