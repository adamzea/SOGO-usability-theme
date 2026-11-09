// custom-theme.js

(function () {
    // Create a <style> element
    var style = document.createElement('style');
    style.type = 'text/css';

    // Your custom CSS rules
    style.innerHTML = `



/* BEGIN custom CSS */

/* =========================================================
   COLOR TOKENS
   Light mode = light grey headers (no black bars)
   Dark mode  = follows the OS/browser prefers-color-scheme
   ========================================================= */
:root {
  color-scheme: light dark;

  /* surfaces */
  --sg-bg:               #fafafa;   /* message list, main content      */
  --sg-surface:          #ffffff;   /* cards, dialogs, menus           */
  --sg-surface-raised:   #ffffff;   /* selected folder, chips          */
  --sg-sidebar:          #e0e0e0;   /* left folder column              */
  --sg-detail:           #eeeeee;   /* message reading pane            */

  /* headers / toolbars */
  --sg-toolbar-main:     #e4e4e4;   /* top bar (date, Calendar, Mail…) */
  --sg-toolbar-side:     #d3d6d5;   /* account header in sidebar       */
  --sg-toolbar-selected: #c9c9c9;   /* bar shown when mail is selected */
  --sg-toolbar-compose:  #e4e4e4;   /* new-message window header       */
  --sg-toolbar-text:     rgba(0,0,0,0.87);
  --sg-toolbar-border:   rgba(0,0,0,0.10);

  /* text */
  --sg-text:             rgba(0,0,0,0.87);
  --sg-text-2:           rgba(0,0,0,0.60);
  --sg-text-3:           rgba(0,0,0,0.38);
  --sg-divider:          rgba(0,0,0,0.12);   /* decorative only */
  --sg-input-line:       rgba(0,0,0,0.46);   /* 3:1 vs every surface */
  --sg-link:             #356868;            /* 4.5:1+ on all light surfaces */

  /* Accent used for the compose button and the selected message.
     A fixed blue that passes 4.5:1 with white text. Set it back to
     AccentColor to follow your OS accent (not guaranteed to pass). */
  --sg-accent:           #0060df;
  --sg-accent-text:      #ffffff;

  /* SOGo's built-in theme palette, made accessible
     (originals: teal #4d8080, green #56b04c, orange #ff5722, red #dd2c00) */
  --sg-primary:          #356868;   /* 4.78:1+ on all light surfaces   */
  --sg-green:            #27692b;   /* 5.06:1+                         */
  --sg-warn:             #b3261e;   /* 4.95:1+ (errors, delete, warn)  */
  --sg-on-color:         #ffffff;   /* text/checkmarks on those fills  */
  --sg-active:           #1b5e20;   /* current module / view highlight */

  /* calendar grid */
  --sg-cal-bg:           #ffffff;   /* working hours / month days       */
  --sg-cal-off:          #fafafa;   /* off-hours / other-month days     */
  --sg-cal-line:         #e6d8ba;   /* hour & day grid lines            */

  /* HTML e-mail bodies and the compose editor ("paper") */
  --sg-paper:            #ffffff;
  --sg-paper-text:       #1f1f1f;
}

@media (prefers-color-scheme: dark) {
  :root {
    --sg-bg:               #1c1c1e;
    --sg-surface:          #2a2a2d;
    --sg-surface-raised:   #343438;
    --sg-sidebar:          #161618;
    --sg-detail:           #121214;

    --sg-toolbar-main:     #000000;
    --sg-toolbar-side:     #2e3231;
    --sg-toolbar-selected: #3c3c40;
    --sg-toolbar-compose:  #000000;
    --sg-toolbar-text:     rgba(255,255,255,0.87);
    --sg-toolbar-border:   rgba(255,255,255,0.08);

    --sg-text:             rgba(255,255,255,0.87);
    --sg-text-2:           rgba(255,255,255,0.62);
    --sg-text-3:           rgba(255,255,255,0.38);
    --sg-divider:          rgba(255,255,255,0.12);
    --sg-input-line:       rgba(255,255,255,0.40);
    --sg-link:             #8ab4f8;

    --sg-primary:          #80cbc4;   /* 6.64:1+ on all dark surfaces */
    --sg-green:            #81c784;   /* 6.16:1+                      */
    --sg-warn:             #ff8a80;   /* 5.43:1+                      */
    --sg-on-color:         rgba(0,0,0,0.87);
    --sg-active:           #81c784;

    --sg-cal-bg:           #222225;
    --sg-cal-off:          #19191b;
    --sg-cal-line:         rgba(255,255,255,0.10);

    /* Incoming HTML mail often hard-codes dark text, so it stays on
       "paper". Change these two to #2a2a2d / rgba(255,255,255,.87)
       if you'd rather have dark message bodies.                     */
    --sg-paper:            #f2f2f2;
    --sg-paper-text:       #1f1f1f;
  }
}


/* =========================================================
   BUTTON LABELS (your original layout rules)
   ========================================================= */

/* add labels to buttons */
/* new compose button */
/* Make room for the label and lay out icon + text horizontally */
md-fab-speed-dial .md-fab.md-button {
  display: inline-flex !important;
  align-items: center;
  justify-content: flex-start;
  width: 12.75rem !important;
  min-height: 2.5rem;
  height: auto;
  border-radius: 1.25rem !important;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  white-space: normal;
  overflow: hidden;
  box-sizing: border-box;
}

/* Trigger button (the main "edit" FAB) */
md-fab-trigger .md-fab.md-button {
  border-radius: 1.75rem;
  min-height: 3.5rem;
  padding: 0.625rem 1.25rem 0.625rem 1rem;
}

/* Trigger button FAB moves when list is hidden */
@media (min-width: 1024px) {
  .sg-fab-bottom-center.sg-sidenav-close {
    right: 72vw;
  }
  .sg-fab-bottom-center.sg-center-close {
    right: 57vw;
  }
}

/* Icon stays fixed-size, doesn't shrink, and centers with the wrapped label */
md-fab-speed-dial .md-fab.md-button md-icon {
  flex: 0 0 auto;
  align-self: center;
}

/* The always-visible label, built from the button's aria-label */
md-fab-speed-dial .md-fab.md-button::after {
  content: attr(aria-label);
  display: inline-block;
  margin-left: 0.5rem;
  margin-top: 0.3rem;
  font-size: 0.7rem;
  font-weight: 500;
  line-height: 1.2;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  flex: 1 1 auto;
}

/* Action items: keep their row from clipping the new wider/taller buttons */
md-fab-speed-dial .md-fab-actions,
md-fab-speed-dial .md-fab-action-item {
  overflow: visible;
}

md-fab-speed-dial .md-fab-action-item {
  display: flex;
  justify-content: flex-end;
}

/* Stack the icon and text vertically within the buttons */
md-card-actions .md-button,
.md-toolbar-tools .md-button {
  display: inline-flex;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  height: auto !important;
  min-height: 48px !important; /* Prevents button height from collapsing */
}

.md-button.md-default-theme.md-accent.md-fab, .md-button.md-accent.md-fab,
.md-button.md-default-theme.md-accent.md-raised, .md-button.md-accent.md-raised {
  background-color: var(--sg-accent);
  color: var(--sg-accent-text);
}

/* Style and center the ::after text */
md-card-actions .md-button:after,
.md-toolbar-tools .md-button:after {
  content: attr(aria-label);
  font-size: 0.55rem;
  line-height: 0.8rem;
  display: block;
  padding-top: 0.25rem;
  color: var(--sg-text);
  text-align: center;
  margin-left: 0;
  white-space: nowrap; /* Prevents multi-word labels from wrapping awkwardly */
}

/* Preferences Save button */
/* Layout: icon + label side by side, vertically centered */
.md-fab.md-fab-bottom-right.md-button {
  display: inline-flex !important;
  align-items: center;
  justify-content: flex-start;
  width: 6rem !important;
  min-height: 3.5rem;
  height: auto;
  padding: 0.625rem 1.25rem 0.625rem 1rem;
  white-space: normal;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 1.25rem !important;
}

/* Icon stays fixed-size, vertically centered, and first in the row */
.md-fab.md-fab-bottom-right.md-button md-icon {
  flex: 0 0 auto;
  align-self: center;
  order: 1;
}

/* Always-visible label, positioned to the right */
.md-fab.md-fab-bottom-right.md-button:after {
  content: "save";
  display: inline-block;
  order: 2;
  margin-left: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.2;
  color: white;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  text-transform: uppercase;
  flex: 1 1 auto;
}


/* =========================================================
   TOOLBARS / HEADERS  (light grey in light mode, dark in dark)
   ========================================================= */

/* all standard toolbars (top bar, compose window, dialogs) */
md-toolbar.md-default-theme:not(.md-menu-toolbar),
md-toolbar:not(.md-menu-toolbar) {
  background-color: var(--sg-toolbar-main);
  color: var(--sg-toolbar-text);
  box-shadow: inset 0 -1px 0 var(--sg-toolbar-border);
}

/* sidebar account header */
md-toolbar.md-default-theme.md-hue-2:not(.md-menu-toolbar),
md-toolbar.md-hue-2:not(.md-menu-toolbar) {
  background-color: var(--sg-toolbar-side);
  color: var(--sg-toolbar-text);
}

/* toolbar shown when messages are selected */
md-toolbar.md-default-theme.md-hue-1:not(.md-menu-toolbar),
md-toolbar.md-hue-1:not(.md-menu-toolbar) {
  background-color: var(--sg-toolbar-selected);
  color: var(--sg-toolbar-text);
}

/* message-list header ("Inbox  Filter Sort Refresh") */
md-toolbar.md-default-theme.md-accent.md-hue-1:not(.md-menu-toolbar),
md-toolbar.md-accent.md-hue-1:not(.md-menu-toolbar) {
  background-color: var(--sg-bg);
  color: var(--sg-text);
}

/* icons, buttons and inputs inside toolbars follow the toolbar text */
md-toolbar:not(.md-menu-toolbar) md-icon,
md-toolbar:not(.md-menu-toolbar) .material-icons,
md-toolbar:not(.md-menu-toolbar) .md-button:not(.md-fab):not(.md-raised),
md-toolbar:not(.md-menu-toolbar) .sg-search-field-container,
md-toolbar:not(.md-menu-toolbar) input,
md-icon.sg-icon-toolbar-bg {
  color: var(--sg-toolbar-text) !important;
}
/* placeholders everywhere (Material default .38 black = 2.6:1) */
input::placeholder, textarea::placeholder,
.md-input::placeholder,
md-input-container .md-placeholder {
  color: var(--sg-text-2) !important;
  opacity: 1 !important;
}
md-toolbar:not(.md-menu-toolbar) md-input-container .md-input {
  border-color: var(--sg-input-line);
}

/* top row toolbar labels */
.toolbar-main md-card-actions .md-button:after,
.toolbar-main .md-toolbar-tools .md-button:after,
.md-tall .md-toolbar-tools .md-button:after,
md-toolbar.md-hue-1:not(.md-menu-toolbar) .md-button:after {
  color: var(--sg-toolbar-text);
}
.toolbar-main md-card-actions .md-button,
.toolbar-main .md-toolbar-tools .md-button { width: 3rem; }

.md-button.md-icon-button, .md-button.sg-icon-button,
.md-button.sg-timepicker-triangle-button.md-icon-button,
.md-button.sg-timepicker-triangle-button.sg-icon-button,
[sg-toggle-grid] md-grid-tile.sg-icon-button,
[sg-toggle-grid] md-grid-tile.sg-icon-button.sg-timepicker-triangle-button,
a.md-button.sg-icon-button,
md-list md-list-item button.md-button.sg-icon-button {
  margin: 0 12px;
  height: 3.5rem;
  min-width: 0;
  line-height: 24px;
  padding: 8px;
  width: 2.5rem;
  border-radius: 0%;
}

/* mobile toolbar edits */
@media (min-width: 0) and (max-width: 959px) and (orientation: portrait) {
  .md-toolbar-tools {
    padding: 0 !important;
    margin-right: 1rem;
  }
  .md-button.md-icon-button, .md-button.sg-icon-button,
  .md-button.sg-timepicker-triangle-button.md-icon-button,
  .md-button.sg-timepicker-triangle-button.sg-icon-button,
  [sg-toggle-grid] md-grid-tile.sg-icon-button,
  [sg-toggle-grid] md-grid-tile.sg-icon-button.sg-timepicker-triangle-button,
  a.md-button.sg-icon-button,
  md-list md-list-item button.md-button.sg-icon-button {
    margin: 0 !important;
    padding: 0 !important;
  }
}

/* disabled icons text color */
.md-button.md-default-theme.md-accent[disabled], .md-button.md-accent[disabled],
.md-button.md-default-theme.md-fab[disabled], .md-button.md-fab[disabled],
.md-button.md-default-theme.md-raised[disabled], .md-button.md-raised[disabled],
.md-button.md-default-theme.md-warn[disabled], .md-button.md-warn[disabled],
.md-button.md-default-theme[disabled], .md-button[disabled] {
  color: unset;
}

/* Left column style changes */
.view-list .md-toolbar-tools .md-button.md-icon-button { width: 1.5rem; }
.view-list .md-toolbar-tools .md-button.md-icon-button:after {
  color: var(--sg-text);
}

/* Selected email background color */
.md-default-theme.md-accent.md-bg {
  background-color: var(--sg-accent) !important;
  color: var(--sg-accent-text) !important;
}

/* links outside HTML mail bodies (SOGo's teal fails 4.5:1) */
.view-detail a:not(.md-button):not(.mailer_htmlcontent *),
md-dialog a:not(.md-button):not(.mailer_htmlcontent *) {
  color: var(--sg-link);
}

/* settings buttons */
md-fab.md-fab-bottom-right.md-fab-overlap-bottom.md-button .material-icons[aria-label="save"]:after {
  content: attr(aria-label);
}


/* New Message toolbar */
md-dialog md-toolbar:not(.md-menu-toolbar),
form[name="messageForm"] md-toolbar:not(.md-menu-toolbar) {
  background-color: var(--sg-toolbar-compose);
}
/* expand button */
form[name="messageForm"] .md-toolbar-tools .md-button:after {
  content: attr(aria-label);
  font-size: 0.55rem;
  color: var(--sg-toolbar-text);
  text-transform: uppercase;
}
/* other toolbar buttons */
form[name="messageForm"] .material-icons:after {
  content: attr(aria-label);
  font-size: 0.55rem;
  color: var(--sg-toolbar-text);
  font-family: "Fira sans", "Helvetica Neue", sans-serif;
  display: flow;
  line-height: 0.75rem;
  text-transform: uppercase;
}


/* change some button names to shorter */
.md-button[aria-label="Toggle Menu"]:after { content: "Menu"; }
.md-button[aria-label="Disconnect"]:after { content: "Log Out"; }
.md-button[aria-label="mailcow Preferences"]:after { content: "Settings"; }
.md-button[aria-label="Get Mail"]:after { content: "Refresh"; }
.md-button[aria-label="flagged"]:after { content: "Flag"; }
.md-button[aria-label="Mark as read"]:after { content: "Read"; }
.md-button[aria-label="More mail options"]:after { content: "More"; }
.md-button[aria-label="Address Book"]:after { content: "Contacts"; }
.md-button[aria-label="Move To"]:after { content: "Move"; }
.md-button[aria-label="Flagged"]:after { content: "Flag"; }
.md-button[aria-label="'Open in New Mail Window'.asSafeJSString"]:after { content: "Pop Out"; }

/* Calendar toolbar: short Previous / Next labels that fit
   (covers Previous/Next Day, Week and Month) */
.md-button[aria-label^="Previous "]:after { content: "Previous"; }
.md-button[aria-label^="Next "]:after { content: "Next"; }
.md-button[aria-label="Multicolumn Day View"]:after { content: "Columns"; }
.md-button[aria-label="More options"]:after { content: "More"; }
/* calendar Properties dialog: the color-picker button has no real
   aria-label, so give it one (no backslashes here: the mailcow
   CSS editor strips them, which breaks the rule) */
.md-button[ng-click*="showPicker"]:after { content: "Color"; }
/* "TODAY" is already a word - no extra label (the small-screen
   arrow-icon version of the button keeps its label) */
.md-button[aria-label="Today"]:not(.md-icon-button):after {
  content: none;
  display: none;
}

.md-button[aria-label="Not junk"]:after { content: "Junk"; color: var(--sg-toolbar-text); }
.md-button[aria-label="Delete selected message or folder"]:after { content: "Delete"; color: var(--sg-toolbar-text); }
.md-button[aria-label="More messages options"]:after { content: "More"; color: var(--sg-toolbar-text); }
.md-button[aria-label="Select All"]:after { content: "All"; color: var(--sg-toolbar-text); }

form[name="messageForm"] .material-icons[aria-label="person"]:after {
  content: "From";
}
form[name="messageForm"] .material-icons[aria-label="attach_file"]:after {
  content: "attach";
  color: var(--sg-text);
}


/* =========================================================
   SOGo BUILT-IN PALETTE -> ACCESSIBLE COLORS
   Applies in both modes; the variables switch per mode.
   Order matters: primary, then accent (green), then warn.
   ========================================================= */

/* --- primary (teal): text & icons ------------------------ */
.md-button.md-primary:not(.md-fab):not(.md-raised),
.md-button.md-primary:not([disabled]):not(.md-fab):not(.md-raised) md-icon,
._md a:not(.md-button).md-primary,
md-icon.md-primary,
.md-fg.md-primary,
.md-fg:not(.md-accent):not(.md-warn):not(.md-background),  /* md-fg with no palette = primary, incl. hue-1/2/3 */
.md-subheader.md-primary,
md-list md-list-item > md-icon.md-highlight,
md-input-container:not(.md-input-invalid).md-input-focused label,
md-input-container.md-input-focused:not(.md-input-has-value) md-select .md-select-value,
md-select-menu md-content md-option[selected],
.md-datepicker-open .md-datepicker-calendar-icon,
.sg-timepicker-open .sg-timepicker-icon,
md-toast .md-toast-content .md-button.md-highlight.md-primary {
  color: var(--sg-primary) !important;
}
/* primary: fills */
.md-button.md-primary.md-fab,
.md-button.md-primary.md-raised,
md-chips md-chip.md-focused,
.md-bg.md-primary,
.md-bg:not(.md-accent):not(.md-warn):not(.md-background):not(md-autocomplete),  /* e.g. week-number chips */
md-progress-linear .md-bar,
md-slider.md-primary .md-track.md-track-fill,
md-slider.md-primary .md-sign,
md-switch.md-checked:not([disabled]).md-primary .md-thumb,
md-checkbox:not([disabled]).md-primary.md-checked .md-icon,
.md-checkbox-enabled[selected] .md-icon,
md-radio-button:not([disabled]).md-primary .md-on {
  background-color: var(--sg-primary) !important;
}
.md-button.md-primary.md-fab, .md-button.md-primary.md-raised,
.md-button.md-primary.md-fab md-icon, .md-button.md-primary.md-raised md-icon,
md-chips md-chip.md-focused, md-chips md-chip.md-focused md-icon,
.md-bg.md-primary, .md-bg.md-primary md-icon,
.md-bg:not(.md-accent):not(.md-warn):not(.md-background):not(md-autocomplete),
.md-bg:not(.md-accent):not(.md-warn):not(.md-background):not(md-autocomplete) md-icon {
  color: var(--sg-on-color) !important;
}
md-switch.md-checked:not([disabled]).md-primary .md-bar {
  background-color: color-mix(in srgb, var(--sg-primary) 50%, transparent) !important;
}
md-progress-linear .md-container {
  background-color: color-mix(in srgb, var(--sg-primary) 22%, transparent) !important;
}
md-progress-circular path { stroke: var(--sg-primary) !important; }
/* primary: borders */
md-input-container:not(.md-input-invalid).md-input-focused .md-input,
md-select:not([disabled]):focus .md-select-value,
.md-datepicker-input-container.md-datepicker-focused,
md-slider.md-primary .md-thumb::after,
md-radio-button:not([disabled]).md-primary.md-checked .md-off {
  border-color: var(--sg-primary) !important;
}
md-slider.md-primary .md-thumb::after { background-color: var(--sg-primary) !important; }

/* --- accent (green): text & icons ------------------------ */
.md-button.md-accent:not(.md-fab):not(.md-raised),
.md-button.md-accent:not([disabled]):not(.md-fab):not(.md-raised) md-icon,
._md a:not(.md-button).md-accent,
md-icon.md-accent,
.md-fg.md-accent,
.md-subheader.md-accent,
md-list md-list-item > md-icon.md-highlight.md-accent,
md-input-container:not(.md-input-invalid).md-input-focused.md-accent label,
md-input-container:not(.md-input-invalid).md-input-focused.md-accent .md-select-value span,
md-autocomplete.md-accent md-input-container.md-input-focused label,
md-select-menu md-content md-option[selected].md-accent,
md-tabs .md-tab.md-active,
md-toast .md-toast-content .md-button.md-highlight:not(.md-primary):not(.md-warn) {
  color: var(--sg-green) !important;
}
/* accent: fills (calendar on/off switches keep their own calendar
   color via SOGo's .md-switch-folder... classes) */
md-tabs md-ink-bar,
md-nav-bar md-nav-ink-bar,
md-checkbox.md-checked:not(.md-primary):not(.md-warn):not(.sg-folder) .md-icon,
md-radio-button:not(.md-primary):not(.md-warn) .md-on,
md-switch.md-checked:not([disabled]):not(.md-primary):not(.md-warn):not([class*="md-switch-folder"]) .md-thumb,
md-slider:not(.md-primary):not(.md-warn) .md-track.md-track-fill,
md-slider:not(.md-primary):not(.md-warn) .md-thumb::after,
md-slider:not(.md-primary):not(.md-warn) .md-sign,
md-progress-linear.md-accent .md-bar {
  background-color: var(--sg-green) !important;
}
md-switch.md-checked:not([disabled]):not(.md-primary):not(.md-warn):not([class*="md-switch-folder"]) .md-bar {
  background-color: color-mix(in srgb, var(--sg-green) 50%, transparent) !important;
}
md-progress-circular.md-accent path { stroke: var(--sg-green) !important; }
/* accent: borders */
md-input-container:not(.md-input-invalid).md-input-focused.md-accent .md-input,
md-input-container:not(.md-input-invalid).md-input-focused.md-accent .md-select-value,
md-autocomplete.md-accent md-input-container.md-input-focused .md-input,
md-select:not([disabled]):focus.md-accent .md-select-value,
.md-accent .md-datepicker-input-container.md-datepicker-focused,
md-slider:not(.md-primary):not(.md-warn) .md-thumb::after,
md-radio-button.md-checked:not(.md-primary):not(.md-warn) .md-off {
  border-color: var(--sg-green) !important;
}
/* plain FABs follow your compose-button accent */
.md-button.md-fab:not(.md-primary):not(.md-warn):not(.md-mini) {
  background-color: var(--sg-accent);
  color: var(--sg-accent-text);
}

/* --- warn / error (orange & red): text & icons ----------- */
.md-button.md-warn:not(.md-fab):not(.md-raised),
.md-button.md-warn:not([disabled]):not(.md-fab):not(.md-raised) md-icon,
._md a:not(.md-button).md-warn,
md-icon.md-warn,
.md-fg.md-warn,
.md-subheader.md-warn,
md-input-container label.md-required::after,
md-input-container .md-input-message-animation,
md-input-container.md-input-invalid label,
md-input-container.md-input-invalid .md-char-counter,
md-input-container.md-input-invalid md-select .md-select-value,
md-input-container:not(.md-input-invalid).md-input-focused.md-warn label,
md-input-container:not(.md-input-invalid).md-input-focused.md-warn .md-select-value span,
md-select.ng-invalid.ng-touched .md-select-value,
md-toast .md-toast-content .md-button.md-highlight.md-warn,
.clean-mailbox-warn {
  color: var(--sg-warn) !important;
}
/* warn: fills */
.md-button.md-warn.md-fab,
.md-button.md-warn.md-raised,
.md-bg.md-warn,
md-checkbox:not([disabled]).md-warn.md-checked .md-icon,
md-radio-button:not([disabled]).md-warn .md-on,
md-switch.md-checked:not([disabled]).md-warn .md-thumb,
md-slider.md-warn .md-track.md-track-fill,
md-slider.md-warn .md-sign,
md-progress-linear.md-warn .md-bar {
  background-color: var(--sg-warn) !important;
}
.md-button.md-warn.md-fab, .md-button.md-warn.md-raised,
.md-button.md-warn.md-fab md-icon, .md-button.md-warn.md-raised md-icon,
.md-bg.md-warn, .md-bg.md-warn md-icon {
  color: var(--sg-on-color) !important;
}
md-progress-circular.md-warn path { stroke: var(--sg-warn) !important; }
/* warn: borders */
md-input-container.md-input-invalid .md-input,
md-input-container.md-input-invalid md-select .md-select-value,
md-input-container:not(.md-input-invalid).md-input-focused.md-warn .md-input,
md-select.ng-invalid.ng-touched .md-select-value,
md-select:not([disabled]):focus.md-warn .md-select-value,
.md-datepicker-input-container.md-datepicker-invalid,
md-radio-button:not([disabled]).md-warn.md-checked .md-off,
md-slider.md-warn .md-thumb::after {
  border-color: var(--sg-warn) !important;
}

/* "No message selected" placeholder (SOGo grey #9e9e9e = 2.3:1) */
md-content.show-gt-md .sg-md-title {
  color: var(--sg-text-2) !important;
}

/* hint text inside drop-downs, e.g. locale codes (SOGo grey = 2.6:1) */
md-select-value small, .md-select-value small, md-option small {
  color: var(--sg-text-2) !important;
}

/* =========================================================
   CALENDAR  (week / day / month views)
   ========================================================= */
[ui-view="calendars"] md-toolbar.daysView,
[ui-view="calendars"] md-toolbar.monthView,
[ui-view="calendars"] md-content[sg-calendar-scroll-view] {
  background-color: var(--sg-cal-bg) !important;
  color: var(--sg-text);
  box-shadow: none;
}
[ui-view="calendars"] .days .day .clickableHourCell.outOfDay,
[ui-view="calendars"] .monthView md-grid-tile.dayOfAnotherMonth {
  background-color: var(--sg-cal-off) !important;
}
/* grid lines */
[ui-view="calendars"] .days .day {
  border-left-color: var(--sg-cal-line) !important;
}
[ui-view="calendars"] .days .day .clickableHourCell,
[ui-view="calendars"] .hours .hour,
[ui-view="calendars"] .minutes30,
[ui-view="calendars"] .allDaysView,
[ui-view="calendars"] .allDaysView--sidenav,
[ui-view="calendars"] .monthView .dayLabels,
.hours-pane {
  border-bottom-color: var(--sg-cal-line) !important;
}
[ui-view="calendars"] .monthView md-grid-tile {
  border-right-color: var(--sg-cal-line) !important;
  border-bottom-color: var(--sg-cal-line) !important;
}
/* hour labels (SOGo light teal = 2.35:1) */
[ui-view="calendars"] .hours .hour {
  color: var(--sg-text-2) !important;
}
/* day numbers of the previous/next month (SOGo #e0e0e0 = 1.3:1) */
:root [ui-view="calendars"] .monthView md-grid-tile.dayOfAnotherMonth .sg-calendar-tile-header,
:root [ui-view="calendars"] .monthView md-grid-tile.dayOfAnotherMonth .sg-calendar-tile-header > span {
  color: var(--sg-text-2) !important;
}
[ui-view="calendars"] .multicolumnDay {
  color: var(--sg-text);
}
[ui-view="calendars"] .sg-priority {
  background-color: var(--sg-detail);
  color: var(--sg-text-2);
}
/* "Week 45" / date label in the calendar toolbar (a read-only input) */
.sg-datepicker-readonly-input-container .md-datepicker-input,
.sg-datepicker-readonly-input-container .md-datepicker-input[disabled] {
  color: var(--sg-text) !important;
  -webkit-text-fill-color: var(--sg-text);
  opacity: 1;
}
/* Print / Expand icons: SOGo tints these with pale teal (md-primary
   hue-1), which reads as light green - show them like the other icons */
md-card-actions .md-button.md-icon-button.md-primary:not([disabled]):not(.md-fab):not(.md-raised),
md-card-actions .md-button.md-icon-button.md-primary:not([disabled]):not(.md-fab):not(.md-raised) md-icon {
  color: var(--sg-text) !important;
}
/* Current section highlight:
   - top-right row (Calendar / Contacts / Mail / Settings)
   - calendar view buttons (Day / Week / Month / Columns)
   SOGo shows the current one as a disabled button, which made it
   black. Highlight it in green instead. */
md-toolbar.toolbar-main a.md-button[disabled],
md-card-actions a.md-button[disabled][aria-label="Day"],
md-card-actions a.md-button[disabled][aria-label="Week"],
md-card-actions a.md-button[disabled][aria-label="Month"],
md-card-actions a.md-button[disabled][aria-label="Multicolumn Day View"] {
  background-color: color-mix(in srgb, var(--sg-active) 16%, transparent) !important;
  border-radius: 0.5rem !important;
  cursor: default;
}
md-toolbar.toolbar-main a.md-button[disabled],
md-toolbar.toolbar-main a.md-button[disabled] md-icon,
md-toolbar.toolbar-main a.md-button[disabled]:after,
md-card-actions a.md-button[disabled][aria-label="Day"],
md-card-actions a.md-button[disabled][aria-label="Week"],
md-card-actions a.md-button[disabled][aria-label="Month"],
md-card-actions a.md-button[disabled][aria-label="Multicolumn Day View"],
md-card-actions a.md-button[disabled][aria-label="Day"] md-icon,
md-card-actions a.md-button[disabled][aria-label="Week"] md-icon,
md-card-actions a.md-button[disabled][aria-label="Month"] md-icon,
md-card-actions a.md-button[disabled][aria-label="Multicolumn Day View"] md-icon,
md-card-actions a.md-button[disabled][aria-label="Day"]:after,
md-card-actions a.md-button[disabled][aria-label="Week"]:after,
md-card-actions a.md-button[disabled][aria-label="Month"]:after,
md-card-actions a.md-button[disabled][aria-label="Multicolumn Day View"]:after {
  color: var(--sg-active) !important;
  font-weight: 700;
}
/* "Filter" bar at the bottom of the calendar list (SOGo inline grey) */
md-sidenav .md-toolbar-tools.sg-toolbar-tools--dense {
  background-color: var(--sg-toolbar-side) !important;
  color: var(--sg-toolbar-text);
}

/* "From" box in the new-message window: SOGo tints it pale teal;
   show it as a normal field on the toolbar instead */
md-toolbar md-autocomplete.md-bg,
md-toolbar md-autocomplete.md-bg md-autocomplete-wrap {
  background-color: var(--sg-surface-raised) !important;
}
md-toolbar md-autocomplete.md-bg input,
md-toolbar md-autocomplete.md-bg md-icon,
md-toolbar md-autocomplete.md-bg .md-button {
  color: var(--sg-text) !important;
}

/* Floating buttons (Save in Settings, Write a new message):
   - faded while disabled (e.g. Save when there is nothing to save),
     solid as soon as there is something to save
   - icon always matches the white label, even inside a toolbar */
.md-button.md-fab[disabled],
.md-button.md-fab.md-accent[disabled] {
  opacity: 0.4 !important;
  box-shadow: none !important;
  cursor: default;
}
md-toolbar .md-button.md-fab md-icon,
.md-button.md-fab.md-accent md-icon,
.md-fab.md-fab-bottom-right.md-button md-icon {
  color: var(--sg-accent-text) !important;
}

/* small "Write a message in new window / Write a new message" buttons */
md-fab-speed-dial .md-fab-action-item .md-button.md-fab {
  background-color: var(--sg-surface-raised) !important;
  color: var(--sg-text) !important;
}

/* large faded icon behind the title in the event, task and
   contact editors (md-icon.sg-icon-toolbar-bg) */
md-icon.sg-icon-toolbar-bg {
  display: none !important;
}

/* =========================================================
   CONTACTS
   ========================================================= */
/* field labels in contact / list views ("Work", "Members") and the
   "New Email Address", "Add Birthday"... buttons in the editor
   (SOGo: fixed .54 black = 1.3:1 in dark mode) */
label.pseudo-input-label,
label.button-label {
  color: var(--sg-text-2) !important;
}

/* folder-tree expand/collapse arrows (SOGo: fixed .54 black) */
md-sidenav md-checkbox.sg-folder .md-container::after {
  color: var(--sg-text-2) !important;
}

/* checkmarks inside filled checkboxes */
md-checkbox.md-checked:not(.sg-folder) .md-icon::after,
.md-checkbox-enabled[selected]:not(.sg-folder) .md-icon::after {
  border-color: var(--sg-on-color) !important;
}


/* =========================================================
   DARK MODE SURFACES
   Only applies when the OS / browser is set to dark.
   ========================================================= */
@media (prefers-color-scheme: dark) {

  /* --- page & panes --------------------------------------- */
  html, body,
  md-content.md-default-theme, md-content {
    background-color: var(--sg-bg) !important;
    color: var(--sg-text);
  }
  md-sidenav.md-default-theme, md-sidenav,
  md-sidenav md-content,
  md-sidenav md-list {
    background-color: var(--sg-sidebar) !important;
    color: var(--sg-text);
  }
  .view-detail,
  .view-detail > md-content,
  .view-detail md-content.md-flex,
  md-content.show-gt-md {
    background-color: var(--sg-detail) !important;
    color: var(--sg-text-2);
  }
  .sg-has-form-sections {
    background-color: var(--sg-sidebar) !important;
  }

  /* --- cards, dialogs, menus, popups ---------------------- */
  md-card.md-default-theme, md-card,
  .view-detail md-card,
  md-dialog.md-default-theme, md-dialog,
  md-dialog md-dialog-content,
  md-dialog md-dialog-actions,
  md-menu-content.md-default-theme, md-menu-content,
  md-select-menu.md-default-theme, md-select-menu,
  md-select-menu md-content,
  .md-autocomplete-suggestions-container,
  .md-autocomplete-standard-list-container,
  .md-virtual-repeat-container.md-autocomplete-suggestions-container,
  md-autocomplete.md-default-theme, md-autocomplete,
  md-bottom-sheet.md-default-theme, md-bottom-sheet,
  ._md-panel, .md-panel,
  .md-datepicker-calendar-pane, .sg-timepicker-time-pane,
  .md-default-theme .md-calendar, .md-calendar,
  .md-default-theme .md-datepicker-calendar, .md-datepicker-calendar,
  .md-datepicker-input-mask-opaque,
  .sg-form-section,
  .sg-color-picker-panel,
  .sg-progress-circular-floating,
  .sg-droppable-over,
  .sg-over-dropzone .sg-dropzone {
    background-color: var(--sg-surface) !important;
    color: var(--sg-text) !important;
    box-shadow: 0 0 0 1px var(--sg-divider);
  }
  md-dialog md-content,
  md-card md-content,
  md-card md-card-content,
  md-card md-card-actions {
    background-color: transparent !important;
    color: var(--sg-text);
  }

  /* --- lists ---------------------------------------------- */
  .md-background.md-default-theme, .md-background {
    background-color: var(--sg-bg) !important;
  }
  .md-default-theme.md-background.md-hue-1, .md-background.md-hue-1,
  md-sidenav md-list-item.md-background.md-hue-1 {
    background-color: var(--sg-surface-raised) !important;
  }
  .md-background, .md-background.md-hue-1,
  .sg-item-name {
    color: var(--sg-text) !important;
  }
  md-select .md-select-icon,
  md-select .md-select-value .md-select-icon {
    color: var(--sg-text-2) !important;
  }
  md-list-item,
  md-list-item .md-list-item-text,
  md-list-item .md-list-item-text h3,
  md-list-item .md-list-item-text h4,
  md-list-item.sg-mailbox-list-item,
  md-list-item.sg-mailbox-list-item * {
    color: var(--sg-text);
  }
  md-list.md-default-theme md-list-item.md-2-line .md-list-item-text p,
  md-list.md-default-theme md-list-item.md-3-line .md-list-item-text p,
  md-list md-list-item.md-2-line .md-list-item-text p,
  md-list md-list-item.md-3-line .md-list-item-text p,
  md-list-item .md-list-item-text p,
  .sg-attachment-size,
  .msg-attachment-image md-card-content p .sg-label-outline,
  .msg-attachment-link md-card-content p .sg-label-outline {
    color: var(--sg-text-2) !important;
  }
  .md-subheader.md-default-theme, .md-subheader,
  .md-subheader .md-subheader-inner {
    background-color: var(--sg-bg) !important;
    color: var(--sg-text-2) !important;
  }
  md-sidenav .md-subheader {
    background-color: var(--sg-sidebar) !important;
  }
  .md-sidenav-left md-list-item[disabled],
  md-sidenav md-list-item[disabled],
  md-sidenav md-list-item[disabled] md-icon {
    color: var(--sg-text-3);
  }
  .md-sidenav-left md-list-item.md-clickable:not([disabled]):hover,
  md-sidenav md-list-item.md-clickable:not([disabled]):hover {
    background-color: rgba(255,255,255,0.06);
  }

  /* selected message stays readable */
  .md-default-theme.md-accent.md-bg,
  .md-default-theme.md-accent.md-bg * {
    color: var(--sg-accent-text) !important;
  }

  /* conversation threads & stars */
  .sg-message-thread       { background-color: rgba(77,128,128,0.18) !important; }
  .sg-message-thread-first { background-color: rgba(77,128,128,0.30) !important; }
  .sg-star-bg              { background-color: rgba(251,192,45,0.18) !important; }
  .sg-skeleton .md-button.sg-icon-button, .sg-skeleton .md-icon-button,
  .sg-skeleton .sg-md-body {
    background-color: #2f2f33 !important;
    color: #2f2f33 !important;
  }

  /* --- icons ---------------------------------------------- */
  :root md-icon.md-default-theme, :root md-icon,
  :root .material-icons {
    color: var(--sg-text-2);
  }
  :root .md-avatar md-icon, :root .md-avatar::before,
  :root sg-avatar-image .material-icons, :root sg-avatar-image md-icon,
  :root md-list-item .md-avatar-icon {
    color: var(--sg-text-3);
  }
  :root .sg-icon-star, :root md-icon.sg-icon-star { color: rgb(251,192,45); }
  :root .md-button.md-fab md-icon,
  :root .md-button.md-raised.md-accent md-icon,
  :root .md-default-theme.md-accent.md-bg md-icon { color: var(--sg-accent-text); }
  .sg-over-dropzone .sg-dropzone md-icon { color: var(--sg-text) !important; }

  /* --- menus & options ------------------------------------ */
  md-menu-content md-menu-item,
  md-menu-content md-menu-item .md-button,
  md-menu-content .md-button,
  md-select-menu md-option,
  md-option.md-default-theme, md-option,
  .md-autocomplete-suggestions li {
    color: var(--sg-text) !important;
  }
  md-menu-content md-menu-divider,
  md-divider.md-default-theme, md-divider {
    border-top-color: var(--sg-divider) !important;
    background-color: var(--sg-divider) !important;
  }
  md-select-menu md-option[selected],
  md-option.md-default-theme:not([disabled]):hover,
  md-option:not([disabled]):hover,
  md-option:not([disabled]):focus,
  .md-autocomplete-suggestions li:hover,
  .md-autocomplete-suggestions li.selected {
    background-color: rgba(255,255,255,0.08) !important;
  }

  /* --- form fields ---------------------------------------- */
  input, textarea, select {
    color: var(--sg-text);
  }
  md-input-container.md-default-theme .md-input,
  md-input-container .md-input,
  md-select.md-default-theme .md-select-value,
  md-select .md-select-value,
  .md-datepicker-input, .sg-timepicker-input,
  md-autocomplete input {
    color: var(--sg-text) !important;
    border-color: var(--sg-input-line) !important;
    background-color: transparent;
  }
  md-input-container.md-default-theme label,
  md-input-container label,
  md-input-container .md-placeholder,
  md-select .md-select-value.md-select-placeholder,
  .md-input::placeholder,
  input::placeholder, textarea::placeholder {
    color: var(--sg-text-2) !important;
  }
  .md-datepicker-input-container {
    border-bottom-color: var(--sg-input-line) !important;
  }
  md-checkbox:not(.md-checked):not(.sg-folder) .md-icon,
  md-radio-button:not(.md-checked) .md-off {
    border-color: var(--sg-text-2) !important;
  }
  md-chips.md-default-theme .md-chips, md-chips .md-chips {
    box-shadow: 0 1px var(--sg-input-line) !important;
  }
  md-chips.md-default-theme md-chip, md-chips md-chip,
  md-chips .ng-hide.sg-chip-color, md-chips .sg-chip-progress.ng-hide {
    background-color: var(--sg-surface-raised) !important;
    color: var(--sg-text) !important;
  }
  md-chips md-chip md-icon,
  md-chips md-chip .md-chip-remove md-icon {
    color: var(--sg-text-2) !important;
  }

  /* --- tabs ----------------------------------------------- */
  md-tabs.md-default-theme .md-tab:not(.md-active), md-tabs .md-tab:not(.md-active) {
    color: var(--sg-text-2) !important;
  }
  md-tabs .md-paginator md-icon { color: var(--sg-text-2) !important; }

  /* --- calendar pickers ----------------------------------- */
  .md-calendar-date, .md-calendar-month-label,
  .md-calendar-day-header {
    color: var(--sg-text) !important;
  }
  .md-calendar-date-disabled, .md-calendar-month-label-disabled {
    color: var(--sg-text-3) !important;
  }
  .sg-time-selection-indicator:hover    { background-color: rgba(255,255,255,0.10) !important; }
  .sg-time-selection-indicator.md-focus { background-color: rgba(255,255,255,0.06) !important; }

  /* --- message headers / bodies --------------------------- */
  .msg-header-content, .msg-recipients, .msg-date,
  .sg-md-title, .sg-md-subhead, .sg-md-body,
  .mailer_plaincontent {
    color: var(--sg-text);
  }
  .mailer_htmlcontent {
    background-color: var(--sg-paper);
    color: var(--sg-paper-text);
    padding: 0.75rem;
    border-radius: 4px;
  }
  .mailer_htmlcontent a { color: revert; }

  /* --- compose editor (CKEditor 5) ------------------------ */
  html:root {
    --ck-color-base-background:                  var(--sg-surface);
    --ck-color-base-foreground:                  var(--sg-surface-raised);
    --ck-color-base-border:                      rgba(255,255,255,0.18);
    --ck-color-base-text:                        var(--sg-text);
    --ck-color-text:                             var(--sg-text);
    --ck-color-toolbar-background:               var(--sg-surface);
    --ck-color-toolbar-border:                   rgba(255,255,255,0.18);
    --ck-color-button-default-hover-background:  rgba(255,255,255,0.08);
    --ck-color-button-default-active-background: rgba(255,255,255,0.14);
    --ck-color-button-on-background:             rgba(255,255,255,0.14);
    --ck-color-button-on-hover-background:       rgba(255,255,255,0.20);
    --ck-color-button-on-color:                  var(--sg-text);
    --ck-color-dropdown-panel-background:        var(--sg-surface);
    --ck-color-dropdown-panel-border:            rgba(255,255,255,0.18);
    --ck-color-panel-background:                 var(--sg-surface);
    --ck-color-panel-border:                     rgba(255,255,255,0.18);
    --ck-color-input-background:                 var(--sg-surface-raised);
    --ck-color-input-border:                     rgba(255,255,255,0.25);
    --ck-color-input-text:                       var(--sg-text);
    --ck-color-list-background:                  var(--sg-surface);
    --ck-color-list-button-hover-background:     rgba(255,255,255,0.08);
    --ck-color-labeled-field-label-background:   var(--sg-surface);
    --ck-color-shadow-drop:                      rgba(0,0,0,0.5);
  }
  .ck.ck-editor__editable,
  .ck.ck-editor__editable.ck-focused,
  .ck-content {
    background-color: var(--sg-paper) !important;
    color: var(--sg-paper-text) !important;
  }
  .sg-mail-editor, .sg-mail-editor-content, .sg-mail-editor-attachments {
    background-color: var(--sg-surface);
    color: var(--sg-text);
  }

  /* --- misc ----------------------------------------------- */
  sg-draggable-helper.sg-draggable-helper--copy md-icon { color: var(--sg-text-2); }
  .attendees .sg-no-freebusy { background-color: rgba(237,229,202,0.15) !important; }
  ::-webkit-scrollbar-thumb { background-color: rgba(255,255,255,0.22); }
  ::-webkit-scrollbar-track { background-color: transparent; }
}

/* END custom CSS */



    `;

    // Append to document head
    document.head.appendChild(style);
})();


/* EXAMPLE - EXAMPLE - EXAMPLE - EXAMPLE - EXAMPLE - EXAMPLE - EXAMPLE
(function() {
  'use strict';
  angular.module('SOGo.Common')
    .config(configure)

  configure.$inject = ['$mdThemingProvider'];
  function configure($mdThemingProvider) {
    var greyMap = $mdThemingProvider.extendPalette('grey', {
      '200': 'F5F5F5',
      '300': 'E5E5E5',
      '1000': '4C566A'
    });
    var greenCow = $mdThemingProvider.extendPalette('green', {
      '600': 'E5E5E5'
    });
    $mdThemingProvider.definePalette('frost-grey', greyMap);
    $mdThemingProvider.definePalette('green-cow', greenCow);
    $mdThemingProvider.theme('default')
      .primaryPalette('green-cow', {
        'default': '400',
        'hue-1': '400',
        'hue-2': '600',
        'hue-3': 'A700'
      })
      .accentPalette('green', {
        'default': '600',
        'hue-1': '300',
        'hue-2': '300',
        'hue-3': 'A700'
      })
      .backgroundPalette('frost-grey');
    $mdThemingProvider.generateThemesOnDemand(false);
  }
})();
 */


