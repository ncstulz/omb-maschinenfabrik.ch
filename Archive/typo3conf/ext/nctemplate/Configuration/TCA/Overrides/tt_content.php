<?php
if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPlugin(
    array(
        'Bild (links) mit Text (rechts)',
        'nctemplate_imgTextRight',
        'EXT:nctemplate/Resources/Public/Icons/bild-links.gif' // Extension Icon
    ),
    'CType',
    'nctemplate_imgTextRight' // Ist der selbe Wert wie aus der ext_localconf.php (CType)
);



$GLOBALS['TCA']['tt_content']['columns']['header']['config']['type'] = "text";
$GLOBALS['TCA']['tt_content']['columns']['header']['config']['rows'] = "2";

$GLOBALS['TCA']['tt_content']['types']['nctemplate_imgTextRight'] = array(
'showitem' => '
-palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.general;general,

image;Bild (links),
subheader;Kleine Überschrift,
header;Überschrift/Titel,
bodytext;;;richtext:rte_transform[mode=ts_links],


--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.access,
--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.visibility;visibility,
--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.access;access,
--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.extended
');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPlugin(
    array(
        'Text (links) mit Bild (rechts)',
        'nctemplate_imgTextLeft',
        'EXT:nctemplate/Resources/Public/Icons/bild-rechts.gif' // Extension Icon
    ),
    'CType',
    'nctemplate_imgTextLeft' // Ist der selbe Wert wie aus der ext_localconf.php (CType)
);

$GLOBALS['TCA']['tt_content']['types']['nctemplate_imgTextLeft'] = array(
    'showitem' => '
-palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.general;general,

image;Bild (rechts),
subheader;Kleine Überschrift,
header;Überschrift/Titel,
bodytext;;;richtext:rte_transform[mode=ts_links],


--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.access,
--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.visibility;visibility,
--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.access;access,
--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.extended
');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPlugin(
    array(
        'Hightlight-Card',
        'nctemplate_card',
        'EXT:nctemplate/Resources/Public/Icons/highlight-card.gif' // Extension Icon
    ),
    'CType',
    'nctemplate_card' // Ist der selbe Wert wie aus der ext_localconf.php (CType)
);

$GLOBALS['TCA']['tt_content']['types']['nctemplate_card'] = array(
    'showitem' => '
-palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.general;general,

image;Bild (oberhalb),
header;Überschrift/Titel,
bodytext;;;richtext:rte_transform[mode=ts_links],


--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.access,
--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.visibility;visibility,
--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.access;access,
--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.extended
');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPlugin(
    array(
        'Icon Text',
        'nctemplate_iconText',
        'EXT:nctemplate/Resources/Public/Icons/icon-text.gif' // Extension Icon
    ),
    'CType',
    'nctemplate_iconText' // Ist der selbe Wert wie aus der ext_localconf.php (CType)
);

$GLOBALS['TCA']['tt_content']['types']['nctemplate_iconText'] = array(
    'showitem' => '
-palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.general;general,

subheader;Icon-Class,
header;Überschrift/Titel,
bodytext;;;richtext:rte_transform[mode=ts_links],


--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.access,
--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.visibility;visibility,
--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.access;access,
--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.extended
');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPlugin(
    array(
        'Linkbutton',
        'nctemplate_linkButton',
        'EXT:nctemplate/Resources/Public/Icons/linkbutton.gif' // Extension Icon
    ),
    'CType',
    'nctemplate_linkButton' // Ist der selbe Wert wie aus der ext_localconf.php (CType)
);

$GLOBALS['TCA']['tt_content']['types']['nctemplate_linkButton'] = array(
    'showitem' => '
-palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.general;general,

header_link;Link,
subheader;Text Button,


--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.access,
--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.visibility;visibility,
--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.access;access,
--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.extended
');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPlugin(
    array(
        'Section Titel',
        'nctemplate_sectionTitle',
        'EXT:nctemplate/Resources/Public/Icons/title-section.gif' // Extension Icon
    ),
    'CType',
    'nctemplate_sectionTitle' // Ist der selbe Wert wie aus der ext_localconf.php (CType)
);

$GLOBALS['TCA']['tt_content']['types']['nctemplate_sectionTitle'] = array(
    'showitem' => '
-palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.general;general,

subheader;Kleine Überschrift (Subtitel),
header;Grosse Überschrift (Titel),


--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.access,
--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.visibility;visibility,
--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.access;access,
--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.extended
');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPlugin(
    array(
        'Titel',
        'nctemplate_title',
        'EXT:nctemplate/Resources/Public/Icons/title.gif' // Extension Icon
    ),
    'CType',
    'nctemplate_title' // Ist der selbe Wert wie aus der ext_localconf.php (CType)
);

$GLOBALS['TCA']['tt_content']['types']['nctemplate_title'] = array(
    'showitem' => '
-palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.general;general,

subheader;Kleine Überschrift (Subtitel),
header;Grosse Überschrift (Titel),


--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.access,
--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.visibility;visibility,
--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.access;access,
--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.extended
');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPlugin(
    array(
        'Standard-Inhalt',
        'nctemplate_standard',
        'EXT:nctemplate/Resources/Public/Icons/inhalt.gif' // Extension Icon
    ),
    'CType',
    'nctemplate_standard' // Ist der selbe Wert wie aus der ext_localconf.php (CType)
);

$GLOBALS['TCA']['tt_content']['types']['nctemplate_standard'] = array(
    'showitem' => '
-palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.general;general,

subheader;Kleine Überschrift (Subtitel),
header;Grosse Überschrift (Titel),
bodytext;;;richtext:rte_transform[mode=ts_links],

--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.access,
--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.visibility;visibility,
--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.access;access,
--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.extended
');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPlugin(
    array(
        'Textbox unterhalb Submenü',
        'nctemplate_textBoxLeft',
        'EXT:nctemplate/Resources/Public/Icons/textbox-menu.gif' // Extension Icon
    ),
    'CType',
    'nctemplate_textBoxLeft' // Ist der selbe Wert wie aus der ext_localconf.php (CType)
);

$GLOBALS['TCA']['tt_content']['types']['nctemplate_textBoxLeft'] = array(
    'showitem' => '
-palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.general;general,

header;Grosse Überschrift (Titel),
bodytext;;;richtext:rte_transform[mode=ts_links],

--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.access,
--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.visibility;visibility,
--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.access;access,
--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.extended
');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPlugin(
    array(
        'Textbox für die Fusszeile',
        'nctemplate_textBoxFooter',
        'EXT:nctemplate/Resources/Public/Icons/textbox-menu1.gif' // Extension Icon
    ),
    'CType',
    'nctemplate_textBoxFooter' // Ist der selbe Wert wie aus der ext_localconf.php (CType)
);

$GLOBALS['TCA']['tt_content']['types']['nctemplate_textBoxFooter'] = array(
    'showitem' => '
-palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.general;general,

header;Überschrift (Titel),
bodytext;;;richtext:rte_transform[mode=ts_links],

--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.access,
--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.visibility;visibility,
--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:palette.access;access,
--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xml:tabs.extended
');