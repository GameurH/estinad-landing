---
app: sahara_native
tagline: Faster startups, tighter security on Windows
status: shipped
---

# Sahara Native

A native FFI library that accelerates critical Windows operations for Sahara POS — device identity, local database lifecycle, and secure file handling. End users experience faster logins and more reliable local operation; developers get a drop-in performance layer.

## Features

### Instant device fingerprinting
Identify and bind each terminal to its license in milliseconds instead of seconds — speeding up provisioning and preventing unauthorized copies.
- Source: `packages/sahara_native/README.md`, `packages/sahara_native/lib/src/fingerprint_native.dart`

### Reliable local database startup
Start and stop the embedded PocketBase server with Windows Job Objects so the database never orphan-runs after the POS closes.
- Source: `packages/sahara_native/lib/src/process_native.dart`, `packages/sahara_native/README.md`

### Secure data directories
Create local data folders with user-only access permissions so sensitive business data isn't exposed to other accounts on the machine.
- Source: `packages/sahara_native/lib/src/filesystem_native.dart`

### Verified binary copies
Copy executables with Authenticode signature verification before launch — reducing risk from tampered local files.
- Source: `packages/sahara_native/README.md`, `packages/sahara_native/lib/src/filesystem_native.dart`

### Atomic configuration writes
Save config and state files atomically so a crash mid-write never corrupts your database or settings.
- Source: `packages/sahara_native/README.md`

### High-speed CSV parsing
Native CSV tokenization and row fingerprinting accelerate bulk product imports on large catalogs.
- Source: `packages/sahara_importer/README.md`, `packages/sahara_native/native/`

## Tech highlights (optional, only if genuinely differentiating)
Hardware fingerprinting runs ~100× faster than legacy shell-based approaches (~5 ms vs ~500 ms), making license checks imperceptible at login.
