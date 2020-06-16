# ---------------------------------------------------------------------------------------------------------------------
# CONFIG
# ---------------------------------------------------------------------------------------------------------------------
config {
	no_cache = {$config.no_cache}
	uniqueLinkVars = {$config.uniqueLinkVars}
	pageTitleFirst = {$config.pageTitleFirst}
	noPageTitle = {$config.noPageTitle}
	linkVars = {$config.linkVars}
	renderCharset = {$config.renderCharset}
	metaCharset = {$config.metaCharset}
	doctype = {$config.doctype}
	removeDefaultJS = {$config.removeDefaultJS}
	inlineStyle2TempFile = {$config.inlineStyle2TempFile}
	admPanel = {$config.admPanel}
	debug = {$config.debug}
	cache_period = {$config.cache_period}
	sendCacheHeaders = {$config.sendCacheHeaders}
	intTarget = {$config.intTarget}
	extTarget = {$config.extTarget}
	disablePrefixComment = {$config.disablePrefixComment}
	headerComment = {$config.headerComment}
	removeDefaultCss = {$config.removeDefaultCss}

	// Disable Image Upscaling
	noScaleUp = {$config.noScaleUp}

	//Debug Handling
	contentObjectExceptionHandler = {$config.contentObjectExceptionHandler}

	// Compression and Concatenation of CSS and JS Files
	compressJs = {$config.compressJs}
	compressCss = {$config.compressCss}
	concatenateJs = {$config.concatenateJs}
	concatenateCss = {$config.concatenateCss}

	tx_extbase.features.skipDefaultArguments = 1
}
