# SaharaOS Product Lines

Marketing landing content is split by **what you sell**, not by repository folder. One platform app (`sahara_pos`) powers retail and restaurant; companion apps join only the restaurant ecosystem bundle.

## Customer-facing products

| Product | Path | For | Status |
|---------|------|-----|--------|
| **Sahara Retail** | [sahara_retail.md](./sahara_retail.md) | Shops, clothing, general retail | shipped |
| **Sahara Restaurant — Full Ecosystem** | [sahara_restaurant_ecosystem.md](./sahara_restaurant_ecosystem.md) | POS + Waiter + KDS | shipped (KDS beta) |
| **Sahara Restaurant — POS with Printers** | [sahara_restaurant_pos.md](./sahara_restaurant_pos.md) | Counter/café, kitchen printers only | shipped |

## Platform & companion apps

| App | Path | Role |
|-----|------|------|
| Sahara POS (platform) | [sahara_pos.md](./sahara_pos.md) | Shared engine — configure via business type |
| Sahara Waiter | [sahara_waiter.md](./sahara_waiter.md) | Restaurant ecosystem only |
| Sahara KDS | [sahara_kds.md](./sahara_kds.md) | Restaurant ecosystem only |

## Shared packages

| Package | Path |
|---------|------|
| Sahara Core | [sahara_core.md](./sahara_core.md) |
| Sahara UI | [sahara_ui.md](./sahara_ui.md) |
| Sahara Native | [sahara_native.md](./sahara_native.md) |
| Sahara Importer | [sahara_importer.md](./sahara_importer.md) |

## Other (not active product lines)

| App | Path | Status |
|-----|------|--------|
| Clinic | [clinic.md](./clinic.md) | flagged-off |
| Ecosystem Admin | [ecosystem_admin.md](./ecosystem_admin.md) | flagged-off |
| Loyalty Portal | [sahara_loyalty_portal.md](./sahara_loyalty_portal.md) | flagged-off (PRD only) |

## Decision tree

```
What do you run?
├── Retail / clothing / shop
│   └── → Sahara Retail (POS only, barcode + inventory)
└── Restaurant / café / fast food
    ├── Need waiter tablets + kitchen screen?
    │   ├── Yes → Sahara Restaurant Full Ecosystem (POS + Waiter + KDS)
    │   └── No  → Sahara Restaurant POS with Printers
```

Business type codes: `retail`, `clothing`, `restaurant`, `cafe`, `fast_food`, `bakery` — see `packages/sahara_core/lib/models/business_type.dart`.
