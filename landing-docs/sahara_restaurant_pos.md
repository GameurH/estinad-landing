---
app: sahara_restaurant_pos
tagline: One terminal, tickets to every station
status: shipped
product_line: restaurant
bundle: sahara_pos
business_types: restaurant, cafe, fast_food, bakery
---

# Sahara Restaurant — POS with Printers

A streamlined restaurant setup for Algerian cafés, quick-service spots, and kitchens that want **one cashier terminal** routing orders to **thermal printers** — no waiter tablets, no kitchen display screen. Lower hardware cost, same offline-first Sahara engine.

> **Platform note:** Same app as the full ecosystem (`apps/sahara_pos`) with restaurant business type. Waiter and KDS apps are optional add-ons, not required for this product line.

## Features

### Fast restaurant checkout
Full-screen POS with category navigation, modifiers, hold/recall, and split payments — tuned for counter and table service without a separate ordering app.
- Source: `apps/sahara_pos/lib/features/pos/pos_screen.dart`, route `/pos-terminal`, `packages/sahara_core/lib/models/business_type.dart` (`enableModifiers`, `enableSplitPayments`)

### Kitchen & bar print routing
Send each item to the right printer — grill, bar, cold prep, cashier — so the line gets paper tickets automatically when the cashier rings the order.
- Source: `apps/sahara_pos/lib/features/settings/print_routing/`, route `/settings/print-routing`, `packages/sahara_core/lib/models/business_type.dart` (`enablePrinterDest`, `enableKitchenPrinters`)

### Thermal receipt printing
Print customer receipts and open the cash drawer on payment — ESC/POS compatible hardware.
- Source: `apps/sahara_pos/lib/core/router/route_names.dart`, routes `/settings/receipt`, `/settings/printer`

### Table management (optional)
Track dine-in tables and link orders when you need basic floor control without waiter tablets.
- Source: `apps/sahara_pos/lib/features/tables/tables.dart`, route `/tables`, `packages/sahara_core/lib/models/business_type.dart` (`enableTables`)

### Menu with modifiers
Build categories, products, and add-on modifiers — sizes, extras, and customizations per item.
- Source: `apps/sahara_pos/lib/features/orders/widgets/modifier_dialog.dart`, routes `/menu/*`

### Hold & recall orders
Park a ticket during rush and bring it back to the cart later — no re-entry.
- Source: `apps/sahara_pos/lib/features/orders/orders_screen.dart`, `apps/sahara_pos/lib/features/pos/pos_screen.dart`

### Multi-method payments
Cash, CIB, Edahabia, and split payments across methods with automatic change calculation.
- Source: `apps/sahara_pos/lib/features/payment/payment_screen.dart`, `packages/sahara_core/lib/models/order.dart`

### Shift & cash control
Open/close shifts, blind cash counts, X-reports, and Z-reports for daily reconciliation.
- Source: `apps/sahara_pos/lib/features/shift/screens/shift_screen.dart`, route `/shift`

### Inventory & low-stock alerts
Track ingredient and product stock with adjustments and notifications when levels run low.
- Source: `apps/sahara_pos/lib/features/inventory/screens/inventory_screen.dart`, route `/inventory`

### Customer loyalty
Points program with earn and redeem at checkout — build repeat business without a separate portal.
- Source: `apps/sahara_pos/lib/features/customers/`, route `/settings/loyalty`

### Sales reports & dashboard
Daily performance, payment breakdowns, and product insights from the back office.
- Source: `apps/sahara_pos/lib/features/reports/reports_screen.dart`, `apps/sahara_pos/lib/features/dashboard/dashboard_screen.dart`

### PIN login, roles & manager override
Secure staff access with granular permissions and approval for voids and sensitive actions.
- Source: `apps/sahara_pos/lib/features/auth/`, `apps/sahara_pos/lib/features/roles/`

### Offline-first with cloud sync
Local database keeps the register running without internet; sync and backup when connectivity returns.
- Source: `apps/sahara_pos/lib/features/settings/sync/`, `apps/sahara_pos/lib/features/settings/screens/backup_settings_screen.dart`

### Instant search (command palette)
Ctrl+K to find products, orders, and settings in milliseconds during service.
- Source: `apps/sahara_pos/lib/core/services/command_palette_service.dart`

## What's not included

This product line does **not** bundle:

- **Sahara Waiter** — tableside tablet ordering (`enableWaiterApp` is off unless you upgrade)
- **Sahara KDS** — digital kitchen display (`enableKDS` is off unless you upgrade)

Both can be added later by switching to the [Full Ecosystem](./sahara_restaurant_ecosystem.md) bundle — same POS app, additional devices on the network.

- Source: `packages/sahara_core/lib/models/business_type.dart` — waiter/KDS are feature-flagged per business type, not separate codebases

## Choose this bundle if…

- You run a **counter-service café**, takeaway, or small restaurant
- Your kitchen already uses **paper ticket printers**
- You want **lower hardware cost** (one PC + printers, no tablets or kitchen screens)

## Want the full floor-to-kitchen flow?

Upgrade path: add Waiter tablets and KDS screens → [Sahara Restaurant — Full Ecosystem](./sahara_restaurant_ecosystem.md)

## Tech highlights (optional, only if genuinely differentiating)
Print routing sends orders to multiple ESC/POS printers from a single Windows/Linux terminal — no separate kitchen software required.
