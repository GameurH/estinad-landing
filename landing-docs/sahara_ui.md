---
app: sahara_ui
tagline: Professional interfaces that stay out of the way
status: shipped
---

# Sahara UI

The SaharaOS design system — a Linear-style Flutter component library that gives every app in the ecosystem a consistent, dense, keyboard-friendly look and feel built for long shifts at the register or back office.

## Features

### Dark & light themes
Production-ready light and dark themes with a zinc palette, Inter typography, and consistent spacing — switch modes without redesigning screens.
- Source: `packages/sahara_ui/README.md`, `packages/sahara_ui/lib/src/theme/sahara_theme.dart`

### Application shell
Sidebar navigation, top bar, tabbed content area, and collapsible layout — the standard frame for desktop Sahara apps.
- Source: `packages/sahara_ui/lib/src/shell/sahara_shell.dart`, `packages/sahara_ui/README.md`

### Buttons & inputs
Touch- and keyboard-optimized buttons, icon buttons, text fields, and search inputs styled for fast data entry during service.
- Source: `packages/sahara_ui/lib/src/widgets/sahara_button.dart`, `packages/sahara_ui/lib/src/widgets/sahara_input.dart`

### Cards & surfaces
Compact cards and surface containers for dashboards, settings panels, and detail views without heavy Material elevation.
- Source: `packages/sahara_ui/lib/src/widgets/sahara_card.dart`

### Data tables & grids
Sortable tables and data grids for product lists, customer records, shift history, and other high-volume back-office screens.
- Source: `packages/sahara_ui/lib/src/widgets/sahara_table/sahara_table.dart`, `packages/sahara_ui/lib/src/widgets/sahara_data_grid.dart`

### Filter bar
Composable filter chips, dropdowns, and search for list pages — the pattern used across inventory, customers, and reports.
- Source: `packages/sahara_ui/lib/src/widgets/filter_bar/`, `packages/sahara_ui/README.md`

### Modal & sheet patterns
Dialogs and bottom sheets for confirmations, quick edits, and mobile-friendly actions without breaking layout flow.
- Source: `packages/sahara_ui/lib/src/widgets/sahara_modal.dart`, `packages/sahara_ui/lib/src/widgets/sahara_bottom_sheet.dart`

### List page states
Built-in empty, loading, and error states so every list screen handles edge cases consistently.
- Source: `packages/sahara_ui/lib/src/widgets/sahara_empty_state.dart`, `packages/sahara_ui/lib/src/widgets/sahara_loading_state.dart`

### Unsaved-changes save bar
Sticky save/cancel bar for edit forms — staff always know when changes haven't been committed.
- Source: `packages/sahara_ui/lib/src/widgets/sahara_save_bar.dart`

### Command palette building blocks
Searchable command items and palette infrastructure powering Ctrl+K navigation in Sahara POS.
- Source: `packages/sahara_ui/lib/src/widgets/command_palette/`

### Multi-step wizards
Wizard module scaffolding for guided setup flows like product import (planned integration).
- Source: `packages/sahara_ui/lib/src/widgets/sahara_wizard/sahara_wizard_module.dart`

## Tech highlights (optional, only if genuinely differentiating)
Opinionated anti-patterns (no hamburger menus, no heavy shadows) keep interfaces fast and information-dense — closer to Linear or Raycast than typical Material apps.
