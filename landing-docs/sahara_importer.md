---
app: sahara_importer
tagline: Import your whole menu in minutes
status: shipped
---

# Sahara Importer

A high-performance CSV import engine for SaharaOS. Restaurants migrating from spreadsheets or another POS can load entire product catalogs in one streaming job — with validation, deduplication, and live progress — without freezing the register.

## Features

### Streaming large files
Read CSV files of any size in chunked passes so memory stays bounded even on million-row catalogs.
- Source: `packages/sahara_importer/README.md`

### Schema-driven validation
Declarative import schemas coerce types, validate fields, and deduplicate rows before anything hits your database — fewer bad records to clean up later.
- Source: `packages/sahara_importer/lib/src/domain/import_schema.dart`

### Live import progress
Every job exposes a progress stream with rows read, throughput, and completion status — visible in the POS import screen during setup.
- Source: `packages/sahara_importer/README.md`, `apps/sahara_pos/lib/features/menu/import/product_import_controller.dart`

### Cancellable imports
Long-running jobs can be cancelled mid-stream without leaving the database in an inconsistent state.
- Source: `packages/sahara_importer/README.md`

### PocketBase product sink
Validated rows write directly into the local product catalog — already wired into Sahara POS product import.
- Source: `packages/sahara_importer/README.md`, `packages/sahara_core/lib/importer/supabase_product_sink.dart`

### Native-accelerated parsing
When the native DLL is available, CSV parsing and hashing run on a fast native path; pure-Dart fallback keeps imports working everywhere else.
- Source: `packages/sahara_importer/README.md`

### Parallel validation (optional)
Multi-isolate validation can be enabled for heavy schemas — off by default for typical POS imports where serial mode is faster.
- Source: `packages/sahara_importer/README.md`

## Tech highlights (optional, only if genuinely differentiating)
Benchmarked at ~390k rows/sec in serial mode on dev hardware for typical 5-field product schemas — large menu migrations complete in seconds, not hours.

---

**Not yet shipped:** Supabase bulk sink (`SupabaseBulkSink`, Phase 4) and the guided `SaharaImportWizard` UI in sahara_ui (Phase 3) are planned but not implemented.
