<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

if (TYPO3_MODE === 'BE') {

}

$TYPO3_CONF_VARS['FE']['addRootLineFields'] .= ',media,description';

$GLOBALS['TCA']['sys_file_reference']['columns']['crop']['config'] = array(
	'type' => 'imageManipulation',
	'allowedExtensions' => 'jpg',
	'ratios' => array(
		'2.05660377358491' => 'Standard-Bilder Inhalt (1090/530)',
		'1' => 'Standard-Bilder Thumbnails',
		'NaN' => 'Freie Eingabe',
	),
);


\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'NETCASE GmbH TYPO3 Template');
