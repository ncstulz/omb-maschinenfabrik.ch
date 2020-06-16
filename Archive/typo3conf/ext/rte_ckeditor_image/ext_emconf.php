<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "rte_ckeditor_image".
 *
 * Auto generated 27-05-2020 10:39
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array (
  'title' => 'CKEditor Rich Text Editor Image Support',
  'description' => 'Adds FAL image support to CKEditor for TYPO3.',
  'category' => 'be',
  'state' => 'stable',
  'uploadfolder' => true,
  'createDirs' => '',
  'clearCacheOnLoad' => 0,
  'author' => 'Christian Opitz',
  'author_email' => 'christian.opitz@netresearch.de',
  'version' => '9.0.4',
  'constraints' => 
  array (
    'depends' => 
    array (
      'typo3' => '9.5.0-9.5.99',
      'rte_ckeditor' => '9.5.0-9.5.99',
    ),
    'conflicts' => 
    array (
    ),
    'suggests' => 
    array (
      'setup' => '',
    ),
  ),
  'clearcacheonload' => true,
  'author_company' => NULL,
);

