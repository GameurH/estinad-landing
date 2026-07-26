---
app: sahara_retail
tagline: Sell faster, stock smarter, stay offline
status: shipped
product_line: retail
platform_app: sahara_pos
business_types: retail, clothing, electronics, hardware, supermarket, pharmacy
---

# Sahara Retail

A dedicated POS and inventory product for Algerian retail and clothing stores — shops, boutiques, electronics counters, and general merchandise. One Windows/Linux terminal handles checkout, stock, and customer loyalty, tuned for barcode-driven sales instead of kitchen workflows.

> **Platform note:** Sahara Retail runs on the Sahara POS app (`apps/sahara_pos`) configured with a retail business type (`retail`, `clothing`, etc.). Features below are enabled via `BusinessTypeFeatures` — tables, KDS, and waiter modules are hidden for retail tenants.

## Features

### Barcode-first checkout
Scan or search products by barcode for fast counter sales — built for high-volume retail, not table service.
- Source: `packages/sahara_core/lib/models/business_type.dart` (`enableBarcodeRequired`), `apps/sahara_pos/lib/features/pos/pos_screen.dart`

### Size & color variants
Manage clothing and fashion SKUs with size/color matrices so staff pick the right variant at the register without confusion.
- Source: `packages/sahara_core/lib/models/business_type.dart` (`enableSizeColorMatrix`, `BusinessType.clothing`), `apps/sahara_pos/lib/features/menu/screens/variant_details_screen.dart`

### Season & fashion attributes
Tag products with season, gender, and material — retail catalog fields appear automatically for clothing stores.
- Source: `apps/sahara_pos/lib/features/menu/screens/product_details_screen.dart`

### Product catalog & variants
Organize categories, products, and variants with photos, SKUs, barcodes, and pricing — no menu modifiers or kitchen routing clutter.
- Source: `apps/sahara_pos/lib/core/router/route_names.dart`, routes `/menu/categories`, `/menu/products`, `/menu/variants`

### Bulk catalog import
Load entire product catalogs from CSV in one job — ideal for new store openings or seasonal collection drops.
- Source: `apps/sahara_pos/lib/features/menu/import/product_import_screen.dart`

### Real-time inventory
Track stock levels per product and variant, record adjustments, and get low-stock alerts before you run out on the floor.
- Source: `apps/sahara_pos/lib/features/inventory/screens/inventory_screen.dart`, `packages/sahara_core/lib/models/business_type.dart` (`enableInventoryCounts`, `enableStockAlerts`)

### Multi-location stock (configured)
Business type supports multi-location inventory for stores with backroom or warehouse stock — enable when your setup needs it.
- Source: `packages/sahara_core/lib/models/business_type.dart` (`enableMultiLocation`)

### Customer profiles & loyalty
Build a shopper database with contact details, purchase history, and a points program to drive repeat visits.
- Source: `apps/sahara_pos/lib/features/customers/screens/customers_screen.dart`, route `/settings/loyalty`

### Customer groups
Segment wholesale, VIP, or regular customers for differentiated service — enabled for retail business types.
- Source: `packages/sahara_core/lib/models/business_type.dart` (`enableCustomerGroups`)

### Sales reports & analytics
Review sales, top products, and payment breakdowns (cash, CIB, Edahabia) to see what's moving on the floor.
- Source: `apps/sahara_pos/lib/features/reports/reports_screen.dart`, route `/reports`

### Business dashboard
Today's sales, order counts, and shift status at a glance — retail checkout mode, not table service.
- Source: `apps/sahara_pos/lib/features/dashboard/dashboard_screen.dart`, route `/dashboard`

### Shift & cash control
Open and close shifts with cash counts, X-reports, and Z-reports for end-of-day reconciliation.
- Source: `apps/sahara_pos/lib/features/shift/screens/shift_screen.dart`, route `/shift`

### Receipt & label printing
Configure thermal receipt printers and label printing for shelf tags and customer receipts.
- Source: `apps/sahara_pos/lib/core/router/route_names.dart`, routes `/settings/receipt`, `/settings/printer`

### PIN login & permissions
Staff sign in with PIN; roles and granular permissions control who can void, discount, or adjust stock.
- Source: `apps/sahara_pos/lib/features/auth/pin_login_screen.dart`, `apps/sahara_pos/lib/features/roles/roles.dart`

### Cloud sync & backup
Offline-first local database with cloud sync and scheduled backups — the register keeps selling when internet drops.
- Source: `apps/sahara_pos/lib/features/settings/sync/screens/sync_status_screen.dart`, `apps/sahara_pos/lib/features/settings/screens/backup_settings_screen.dart`

### Instant search (command palette)
Ctrl+K to find products by name or barcode, customers, and settings — built for fast counter work.
- Source: `apps/sahara_pos/lib/core/services/command_palette_service.dart`

## What's not included

Sahara Retail does **not** include table management, waiter tablets, or kitchen display — those belong to [Sahara Restaurant](./sahara_restaurant_ecosystem.md). Retail business types disable `enableTables`, `enableWaiterApp`, `enableKDS`, and `enablePrinterDest` by default.

- Source: `packages/sahara_core/lib/models/business_type.dart` (`BusinessTypeFeatures.forType(BusinessType.retail)`, `BusinessType.clothing`)

## Tech highlights (optional, only if genuinely differentiating)
Same offline-first Sahara POS engine as the restaurant line — one platform, two product experiences configured at provisioning time via business type.
