---
app: sahara_waiter
tagline: Take orders at the table, not the counter
status: shipped
product_line: restaurant
bundle: sahara_restaurant_ecosystem
---

# Sahara Waiter

The tableside ordering app for Android tablets — **part of the [Sahara Restaurant Full Ecosystem](./sahara_restaurant_ecosystem.md)** only. Not included in Sahara Retail or the Restaurant POS-with-Printers bundle. Waitstaff browse the menu, build orders at the table, and send them straight to the kitchen and POS — with zero manual server setup on most networks.

## Features

### Automatic POS discovery
The app finds your Sahara POS on the local network via mDNS — connect in seconds without typing IP addresses.
- Source: `apps/sahara_waiter/lib/features/discovery/screens/discovery_screen.dart`, route `/discovery`

### Manual server connection
If auto-discovery doesn't find a match, staff can enter the POS server address manually as a fallback.
- Source: `apps/sahara_waiter/lib/features/discovery/controllers/discovery_controller.dart`

### PIN staff login
Waiters sign in with the same PIN credentials as the POS for quick, secure handoffs between shifts.
- Source: `apps/sahara_waiter/lib/features/auth/screens/pin_login_screen.dart`, route `/login`

### Session auto-lock
After a period of inactivity, the tablet locks and requires PIN re-entry — protecting open tables when a waiter steps away.
- Source: `apps/sahara_waiter/lib/core/services/session_service.dart`, `apps/sahara_waiter/lib/core/widgets/session_lock_overlay.dart`

### Visual table map
See every table on a color-coded floor plan — free, occupied, or bill requested — so staff know where to go next.
- Source: `apps/sahara_waiter/lib/features/tables/screens/table_map_screen.dart`, route `/tables`

### Zone filtering
Filter the table view by dining zone (terrace, main hall, VIP) to focus on one section of the floor during busy periods.
- Source: `apps/sahara_waiter/lib/features/tables/widgets/zone_filter_chips.dart`

### Open & manage tables
Tap a free table to open it and start an order, or tap an occupied table to view the current check and add items.
- Source: `apps/sahara_waiter/lib/features/tables/screens/table_detail_screen.dart`, route `/tables/:tableId`

### Menu browsing & ordering
Browse categories and products with variant and modifier selection — the same menu your POS uses, optimized for touch.
- Source: `apps/sahara_waiter/lib/features/menu/screens/menu_screen.dart`, route `/menu`

### Tableside cart
Build orders locally on the tablet with quantity controls, notes, and a running total before sending to the kitchen.
- Source: `apps/sahara_waiter/lib/features/cart/controllers/cart_controller.dart`, `apps/sahara_waiter/lib/features/cart/widgets/cart_drawer.dart`

### Send to kitchen
One tap fires the order to the POS and kitchen — items appear on KDS and print routes without the waiter walking back.
- Source: `apps/sahara_waiter/lib/features/cart/controllers/cart_controller.dart`

### Connection status banner
A clear connected/disconnected indicator shows when the tablet has lost contact with the POS, and sending is blocked until reconnected.
- Source: `apps/sahara_waiter/lib/core/services/connection_service.dart`, `apps/sahara_waiter/lib/core/widgets/connection_banner.dart`

### Settings
Configure server connection and app preferences from a dedicated settings screen.
- Source: `apps/sahara_waiter/lib/features/settings/screens/settings_screen.dart`, route `/settings`

## Tech highlights (optional, only if genuinely differentiating)
Real-time table status updates via PocketBase subscriptions keep the floor map in sync with the POS as orders change.
