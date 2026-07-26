---
app: sahara_kds
tagline: Every order visible, nothing forgotten
status: beta
product_line: restaurant
bundle: sahara_restaurant_ecosystem
---

# Sahara KDS

The kitchen display system — **part of the [Sahara Restaurant Full Ecosystem](./sahara_restaurant_ecosystem.md)** only. Not included in Sahara Retail or the Restaurant POS-with-Printers bundle (those use thermal printers instead). Replaces paper tickets with a live digital board on Android tablets, TVs, or wall-mounted screens. Kitchen staff see new orders instantly, track urgency, and bump items when done.

## Features

### Live order tickets
New order lines appear on screen in real time as waiters and cashiers submit them — no printer delay or lost chits.
- Source: `apps/sahara_kds/lib/features/kitchen/kitchen_controller.dart`, `apps/sahara_kds/README.md`

### Bump to complete
Tap to mark a ticket done and clear it from the active queue — giving you a clean view of what's still cooking.
- Source: `apps/sahara_kds/lib/features/kitchen/widgets/bump_button.dart`

### Recall bumped orders
Accidentally bumped too soon? Open recall mode to bring recently completed tickets back onto the board.
- Source: `apps/sahara_kds/lib/features/kitchen/widgets/recall_sheet.dart`

### Color-coded urgency timers
Each ticket shows elapsed time with green → yellow → red indicators so the line knows what's been waiting longest.
- Source: `apps/sahara_kds/lib/features/kitchen/widgets/ticket_card.dart`, `apps/sahara_kds/README.md`

### Audio alerts
Play a sound when a new order arrives so staff hear incoming tickets even when they're not looking at the screen.
- Source: `apps/sahara_kds/lib/core/audio/audio_service.dart`, `apps/sahara_kds/lib/features/settings/settings_screen.dart`

### Station filtering
Show only tickets for your station — grill, bar, cold prep, etc. — based on print routing destinations from the POS.
- Source: `apps/sahara_kds/lib/features/kitchen/kitchen_controller.dart`, `apps/sahara_kds/lib/features/settings/settings_screen.dart`

### Always-on display
The screen stays awake in immersive mode during service so tickets are always visible on the line.
- Source: `apps/sahara_kds/lib/main.dart`, `apps/sahara_kds/README.md`

### Auto-reconnect
If the link to the POS server drops, the KDS reconnects automatically with visible status — no manual restart needed.
- Source: `apps/sahara_kds/lib/features/kitchen/kitchen_controller.dart`, `apps/sahara_kds/lib/features/kitchen/widgets/connection_status_bar.dart`

### Server & display settings
Configure the PocketBase server URL, station filters, audio, and language from an in-app settings screen.
- Source: `apps/sahara_kds/lib/features/settings/settings_screen.dart`

## Tech highlights (optional, only if genuinely differentiating)
Dual SSE subscriptions to orders and order lines with local order caching deliver sub-second ticket updates on the local network.
