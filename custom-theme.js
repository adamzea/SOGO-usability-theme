// custom-theme.js

(function () {
    // Create a <style> element
    var style = document.createElement('style');
    style.type = 'text/css';

    // Your custom CSS rules
    style.innerHTML = `






/* BEGIN custom CSS */

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
  border-radius: 1.25rem!important;
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
.sg-fab-bottom-center.sg-center-close  {
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
  font-size: 0.7rem;
  font-weight: 500;
  line-height: 1.2;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  flex: 1 1 auto;
margin-top: 0.3rem;
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

.md-button.md-default-theme.md-accent.md-fab, .md-button.md-accent.md-fab, .md-button.md-default-theme.md-accent.md-raised, .md-button.md-accent.md-raised {
    background-color: AccentColor;
    color: rgba(255,255,255,1);
}


/* Style and center the ::after text */
md-card-actions .md-button:after,
.md-toolbar-tools .md-button:after {
    content: attr(aria-label);
    font-size: 0.55rem;
    line-height: 0.8rem;
    display: block;
    padding-top: 0.25rem;
    color: var(--ck-color-base-text);
    text-align: center;
    margin-left: 0; /* Removed the -0.25rem offset so it aligns properly */
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
border-radius: 1.25rem!important;
}

/* Icon stays fixed-size, vertically centered, and first in the row */
.md-fab.md-fab-bottom-right.md-button md-icon {
  flex: 0 0 auto;
  align-self: center;
  order: 1;
}

/* Always-visible label, built from the icon's own aria-label, positioned to the right */
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


/* top row toolbar edits */
.toolbar-main md-card-actions .md-button:after, .toolbar-main .md-toolbar-tools .md-button:after, .md-tall .md-toolbar-tools .md-button:after {
color: var(--ck-color-base-background);
}
.toolbar-main md-card-actions .md-button, .toolbar-main .md-toolbar-tools .md-button {width: 3rem;}

.md-button.md-icon-button, .md-button.sg-icon-button, .md-button.sg-timepicker-triangle-button.md-icon-button, .md-button.sg-timepicker-triangle-button.sg-icon-button, [sg-toggle-grid] md-grid-tile.sg-icon-button, [sg-toggle-grid] md-grid-tile.sg-icon-button.sg-timepicker-triangle-button, a.md-button.sg-icon-button, md-list md-list-item button.md-button.sg-icon-button {
    margin: 0 12px;
    height: 3.5rem;
    min-width: 0;
    line-height: 24px;
    padding: 8px;
    width: 2.5rem;
    border-radius: 0%;
}

md-toolbar.md-default-theme:not(.md-menu-toolbar), md-toolbar:not(.md-menu-toolbar) {
    background-color: rgb(0 0 0);
    color: rgba(255,255,255,0.87);
}

md-toolbar.md-default-theme.md-hue-2:not(.md-menu-toolbar), md-toolbar.md-hue-2:not(.md-menu-toolbar) {
    background-color: rgb(55 59 58);
    color: rgba(255,255,255,0.87);
}

/*mobile toolbar edits */
@media (min-width: 0) and (max-width: 959px) and (orientation: portrait) {
.md-toolbar-tools {
    padding: 0!important; margin-right: 1rem;
}
.md-button.md-icon-button, .md-button.sg-icon-button, .md-button.sg-timepicker-triangle-button.md-icon-button, .md-button.sg-timepicker-triangle-button.sg-icon-button, [sg-toggle-grid] md-grid-tile.sg-icon-button, [sg-toggle-grid] md-grid-tile.sg-icon-button.sg-timepicker-triangle-button, a.md-button.sg-icon-button, md-list md-list-item button.md-button.sg-icon-button
Specificity: (0,3,1)
 { margin: 0!important; padding 0!important;}
}

/* disabled icons text color */
.md-button.md-default-theme.md-accent[disabled], .md-button.md-accent[disabled], .md-button.md-default-theme.md-fab[disabled], .md-button.md-fab[disabled], .md-button.md-default-theme.md-raised[disabled], .md-button.md-raised[disabled], .md-button.md-default-theme.md-warn[disabled], .md-button.md-warn[disabled], .md-button.md-default-theme[disabled], .md-button[disabled] {
    color: unset;
}

/* Left column style changes */
.view-list .md-toolbar-tools .md-button.md-icon-button { width: 1.5rem;}
.view-list .md-toolbar-tools .md-button.md-icon-button:after {
color: var(--ck-color-base-text);}

/* Selected email background color */
.md-default-theme.md-accent.md-bg {
    background-color: AccentColor!important;
    color: rgb(255, 255, 255) !important;
}


/* settings buttons */
md-fab.md-fab-bottom-right.md-fab-overlap-bottom.md-button .material-icons[aria-label="save"]:after {content: attr(aria-label);
}
/* Selected email toolbar */
md-toolbar.md-default-theme.md-hue-1:not(.md-menu-toolbar), md-toolbar.md-hue-1:not(.md-menu-toolbar) {
    background-color: rgb(114 114 114);
    color: rgba(255,255,255,0.87);
}
md-toolbar.md-default-theme.md-hue-1:not(.md-menu-toolbar) .md-button:after {
color: rgba(255,255,255,0.87);
} 


/* New Message toolbar */
/* expand button */
form[name="messageForm"] .md-toolbar-tools .md-button:after {
    content: attr(aria-label);
    font-size: 0.55rem;
    color: #ffffff;
text-transform: uppercase;
}
/* other toolbar buttons */
form[name="messageForm"] .material-icons:after {
content: attr(aria-label);
    font-size: 0.55rem;
    color: #ffffff;
font-family:
"Fira sans", "Helvetica Neue", sans-serif;
display: flow;
line-height: 0.75rem;
text-transform: uppercase;
}




/* change some button names to shorter */

.md-button[aria-label="Toggle Menu"]:after {content: "Menu";}
.md-button[aria-label="Disconnect"]:after {content: "Log Out";}
.md-button[aria-label="mailcow Preferences"]:after {content: "Settings";}
.md-button[aria-label="Get Mail"]:after {content: "Refresh";}
.md-button[aria-label="flagged"]:after {content: "Flag";}
.md-button[aria-label="Mark as read"]:after {content: "Read";}
.md-button[aria-label="More mail options"]:after {content: "More";}
.md-button[aria-label="Address Book"]:after {content: "Contacts";}
.md-button[aria-label="Move To"]:after {content: "Move";}
.md-button[aria-label="Flagged"]:after {content: "Flag";}
.md-button[aria-label="'Open in New Mail Window'.asSafeJSString"]:after {content: "Pop Out";}

.md-button[aria-label="Not junk"]:after {content: "Junk"; color: rgba(255,255,255,0.87);}
.md-button[aria-label="Delete selected message or folder"]:after {content: "Delete"; color: rgba(255,255,255,0.87);}
.md-button[aria-label="More messages options"]:after {content: "More";  color: rgba(255,255,255,0.87);}
.md-button[aria-label="Select All"]:after {content: "All";  color: rgba(255,255,255,0.87);}

form[name="messageForm"] .material-icons[aria-label="person"]:after {
content: "From";}
form[name="messageForm"] .material-icons[aria-label="attach_file"]:after {
content: "attach"; color: #000000;}




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
