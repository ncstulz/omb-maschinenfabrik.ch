<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

// Include new content elements to modWizards
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:nctemplate/Configuration/PageTS/TSConfig.ts">');

// Register the presets
if (empty($GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['netcase'])) {
    $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['netcase'] = 'EXT:nctemplate/Configuration/RTE/Default.yaml';
}

// Inhaltselemente
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    'mod.wizards.newContentElement.wizardItems.common {
    elements {
      nctemplate_imgTextRight {
        title = Bild links / Text rechts
        icon = EXT:nctemplate/Resources/Public/Icons/bild-links.gif
        description = Fügt ein Inhaltselement Bild (links) mit Text (rechts) ein
        tt_content_defValues {
          CType = nctemplate_imgTextRight
        }
      }
    }
    show := addToList(nctemplate_imgTextRight)
  }'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    'mod.wizards.newContentElement.wizardItems.common {
    elements {
      nctemplate_imgTextLeft {
        title = Text links / Bild rechts
        icon = EXT:nctemplate/Resources/Public/Icons/bild-rechts.gif
        description = Fügt ein Inhaltselement Text (links) mit Bild (rechts) ein
        tt_content_defValues {
          CType = nctemplate_imgTextLeft
        }
      }
    }
    show := addToList(nctemplate_imgTextLeft)
  }'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    'mod.wizards.newContentElement.wizardItems.common {
    elements {
      nctemplate_card {
        icon = EXT:nctemplate/Resources/Public/Icons/highlight-card.gif
        title = Highlight Card
        description = Fügt ein Inhaltselement Highlight-Card ein
        tt_content_defValues {
          CType = nctemplate_card
        }
      }
    }
    show := addToList(nctemplate_card)
  }'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    'mod.wizards.newContentElement.wizardItems.common {
    elements {
      nctemplate_iconText {
        icon = EXT:nctemplate/Resources/Public/Icons/icon-text.gif
        title = Icon / Text
        description = Fügt ein Inhaltselement Icon / Text
        tt_content_defValues {
          CType = nctemplate_iconText
        }
      }
    }
    show := addToList(nctemplate_iconText)
  }'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    'mod.wizards.newContentElement.wizardItems.common {
    elements {
      nctemplate_linkButton {
        icon = EXT:nctemplate/Resources/Public/Icons/linkbutton.gif
        title = Linkbutton
        description = Fügt ein Inhaltselement Linkbutton ein
        tt_content_defValues {
          CType = nctemplate_linkButton
        }
      }
    }
    show := addToList(nctemplate_linkButton)
  }'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    'mod.wizards.newContentElement.wizardItems.common {
    elements {
      nctemplate_sectionTitle {
        icon = EXT:nctemplate/Resources/Public/Icons/title-section.gif
        title = Titel Section
        description = Fügt einen Section Titel ein
        tt_content_defValues {
          CType = nctemplate_sectionTitle
        }
      }
    }
    show := addToList(nctemplate_sectionTitle)
  }'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    'mod.wizards.newContentElement.wizardItems.common {
    elements {
      nctemplate_title {
        icon = EXT:nctemplate/Resources/Public/Icons/title.gif
        title = Normaler Titel
        description = Fügt einen Titel (wahlweise mit Subtitel) ein
        tt_content_defValues {
          CType = nctemplate_title
        }
      }
    }
    show := addToList(nctemplate_title)
  }'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    'mod.wizards.newContentElement.wizardItems.common {
    elements {
      nctemplate_standard {
        icon = EXT:nctemplate/Resources/Public/Icons/inhalt.gif
        title = Standard-Inhalt (Titel, Text, Bild etc.)
        description = Standard-Inhalt (Titel, Text, Bild etc.)
        tt_content_defValues {
          CType = nctemplate_standard
        }
      }
    }
    show := addToList(nctemplate_standard)
  }'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    'mod.wizards.newContentElement.wizardItems.common {
    elements {
      nctemplate_textBoxLeft {
        icon = EXT:nctemplate/Resources/Public/Icons/textbox-menu.gif
        title = Textbox unterhalb Submenü
        description = Standard-Inhalt (Titel, Text, Bild etc.)
        tt_content_defValues {
          CType = nctemplate_textBoxLeft
        }
      }
    }
    show := addToList(nctemplate_textBoxLeft)
  }'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    'mod.wizards.newContentElement.wizardItems.common {
    elements {
      nctemplate_textBoxFooter {
        icon = EXT:nctemplate/Resources/Public/Icons/textbox-menu.gif
        title = Textbox für die Fusszeile
        description = Standard-Inhalt (Titel, Text, Bild etc.)
        tt_content_defValues {
          CType = nctemplate_textBoxFooter
        }
      }
    }
    show := addToList(nctemplate_textBoxFooter)
  }'
);