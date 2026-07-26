---
app: sahara_restaurant_ecosystem
tagline: From table to kitchen, fully connected
status: shipped
product_line: restaurant
bundle: sahara_pos + sahara_waiter + sahara_kds
business_types: restaurant, cafe, fast_food, bakery
---

# Sahara Restaurant — Full Ecosystem

The complete end-to-end restaurant stack for Algerian hospitality: **cashier POS**, **waiter tablets**, and **kitchen display** — all synced in real time on your local network. Built for full-service restaurants, cafés, and fast food that want digital tickets from order to plate.

## What's in the bundle

| App | Role | Platform |
|-----|------|----------|
| **Sahara POS** | Cashier, back office, print routing hub | Windows / Linux |
| **Sahara Waiter** | Tableside ordering on tablets | Android |
| **Sahara KDS** | Kitchen ticket board | Android / Web |

All three connect to the same local PocketBase instance on the POS machine. No cloud required during service.

- Source: `README.md`, `apps/sahara_kds/README.md`, `apps/sahara_waiter/lib/core/router/app_router.dart`

---

## Sahara POS (restaurant mode)

### Table management
Visual floor plan with table status — link orders to tables and track dine-in service across the room.
- Source: `apps/sahara_pos/lib/features/tables/tables.dart`, route `/tables`, `packages/sahara_core/lib/models/business_type.dart` (`enableTables`)

### Full-service checkout
Modifiers, split payments, tips, and hold/recall orders — built for complex restaurant tickets, not retail barcode flows.
- Source: `apps/sahara_pos/lib/features/orders/orders_screen.dart`, `apps/sahara_pos/lib/features/payment/payment_screen.dart`, `packages/sahara_core/lib/models/business_type.dart` (`enableModifiers`, `enableSplitPayments`, `enableTips`)

### Multi-destination print routing
Route items to kitchen, bar, or cashier printers by product — the hub that feeds both paper tickets and the KDS.
- Source: `apps/sahara_pos/lib/features/settings/print_routing/`, route `/settings/print-routing`, `packages/sahara_core/lib/models/business_type.dart` (`enablePrinterDest`)

### Menu & recipes
Categories, products, modifiers, and kitchen routing on every item — manage the full menu from the back office.
- Source: `apps/sahara_pos/lib/core/router/route_names.dart`, routes `/menu/*`

### Shift, reports & loyalty
Cash control, Z-reports, sales analytics, customer loyalty, inventory, and the full back-office suite.
- Source: `apps/sahara_pos/lib/features/shift/`, `apps/sahara_pos/lib/features/reports/`, `apps/sahara_pos/lib/features/customers/`

### mDNS server broadcasting
POS advertises itself on the LAN so waiter tablets and KDS find it automatically — zero manual IP setup on most networks.
- Source: `apps/sahara_pos/pubspec.yaml` (`multicast_dns`), `apps/sahara_waiter/lib/features/discovery/`

---

## Sahara Waiter (included)

### Tableside ordering
Waitstaff take orders at the table on Android tablets — items sync instantly to POS and kitchen.
- Source: `apps/sahara_waiter/lib/features/tables/screens/table_map_screen.dart`, `apps/sahara_waiter/lib/features/menu/screens/menu_screen.dart`

### Visual table map
Color-coded table statuses (free, occupied, bill requested) so the floor team knows where to go.
- Source: `apps/sahara_waiter/lib/features/tables/widgets/table_card.dart`

### Auto POS discovery
Tablets find the cashier terminal on the network via mDNS — connect in seconds.
- Source: `apps/sahara_waiter/lib/features/discovery/screens/discovery_screen.dart`

### Send to kitchen
One tap fires the order to the POS; tickets appear on KDS and configured printers without walking back to the counter.
- Source: `apps/sahara_waiter/lib/features/cart/controllers/cart_controller.dart`

> Full waiter feature list: [sahara_waiter.md](./sahara_waiter.md)

---

## Sahara KDS (included)

### Live kitchen tickets
Orders appear on the kitchen screen in real time via PocketBase SSE — replace paper chits with a digital board.
- Source: `apps/sahara_kds/lib/features/kitchen/kitchen_controller.dart`

### Bump, recall & urgency timers
Mark tickets done, recall mistakes, and see green → yellow → red wait timers so nothing sits too long.
- Source: `apps/sahara_kds/lib/features/kitchen/widgets/bump_button.dart`, `apps/sahara_kds/lib/features/kitchen/widgets/recall_sheet.dart`

### Station filtering & audio alerts
Show only grill, bar, or cold-prep items; play a sound on every new order.
- Source: `apps/sahara_kds/lib/features/kitchen/kitchen_controller.dart`, `apps/sahara_kds/lib/core/audio/audio_service.dart`

> Full KDS feature list: [sahara_kds.md](./sahara_kds.md) — status: **beta**

---

## Choose this bundle if…

- You run **dine-in service** with waitstaff on the floor
- You want a **digital kitchen board** instead of (or alongside) paper tickets
- You need **real-time sync** between counter, floor, and line

## Not the right fit?

If you only need a cashier terminal with kitchen **printers** (no tablets, no KDS screen), see [Sahara Restaurant — POS with Printers](./sahara_restaurant_pos.md).

## Tech highlights (optional, only if genuinely differentiating)
Offline-first: all three apps talk to local PocketBase on the POS machine. Internet loss does not stop service — sync resumes when connectivity returns.
