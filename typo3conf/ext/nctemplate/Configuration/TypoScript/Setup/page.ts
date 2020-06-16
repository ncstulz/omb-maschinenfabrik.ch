lib.stdheader.10.setCurrent.htmlSpecialChars = 0
lib.stdheader.10.setCurrent.br = 1

# ---------------------------------------------------------------------------------------------------------------------
# PAGE
# ---------------------------------------------------------------------------------------------------------------------
page = PAGE
page {
	typeNum = 0
	#we add them below
	shortcutIcon =

	// Abuse headTag to set X-UA-Compatible the original headTag will be set in config.htmlTag_stdWrap
	// This is sadly needed to get automatic baseurl setting to work
	headTag = <meta http-equiv="X-UA-Compatible" content="{$page.meta.compatible}">

	bodyTagCObject = CASE
	bodyTagCObject {
		key.data = levelfield:-1, backend_layout_next_level, slide
		key.override.field = backend_layout

		1 = TEXT
		1.value = <body>

		default < .1
	}

	headerData {

		5 = TEXT
		5 {
			field = title
			noTrimWrap = |<title>| - OMB Maschinenfabrik </title>|
		}

		// Flip ahead browsing for IE10/11
		10 = HMENU
		10 {
			special = browse
			special {
				items = prev|next
			}
			1 = TMENU
			1.NO {
				allWrap = <link rel="prev" href="|" /> |*| <link rel="prev" href="|" /> |*| <link rel="next" href="|" />
				doNotLinkIt = 1
				stdWrap {
					typolink {
						parameter.data = field:uid
						useCacheHash = 1
						returnLast = url
					}
				}
			}
		}



		30 = TEXT
		30.value (
<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->
		<link
			href="https://fonts.googleapis.com/css?family=Oswald:400,700|Work+Sans:300,400,700"
		rel="stylesheet"
			/>
		)
	}

	10 = FLUIDTEMPLATE
	10 {
		file.stdWrap.cObject = CASE
		file.stdWrap.cObject {

			key.data = levelfield:-1, backend_layout_next_level, slide
			key.override.field = backend_layout

			1 = TEXT
			1.value = {$page.fluidtemplate.templateRootPath}Homepage.html
			1.insertData = 1

			5 = TEXT
			5.value = {$page.fluidtemplate.templateRootPath}Default.html
			5.insertData = 1

			6 = TEXT
			6.value = {$page.fluidtemplate.templateRootPath}Kompetenzen.html
			6.insertData = 1

			7 = TEXT
			7.value = {$page.fluidtemplate.templateRootPath}Loesungen.html
			7.insertData = 1

			3 = TEXT
			3.value = {$page.fluidtemplate.templateRootPath}Content.html
			3.insertData = 1

			default < .1

		}

		partialRootPath = {$page.fluidtemplate.partialRootPath}
		layoutRootPath = {$page.fluidtemplate.layoutRootPath}

		variables {

			backendLayout = TEXT
			backendLayout {
				data = levelfield:-1, backend_layout_next_level, slide
				override.field = backend_layout
			}

			siteTitle = TEXT
			siteTitle.data = page:nav_title // page:title

			rootPage = TEXT
			rootPage.data = leveluid:0
		}
	}

	meta {
		viewport = {$page.meta.viewport}
		robots = {$page.meta.robots}
		google = {$page.meta.google}
		apple-mobile-web-app-capable  = {$page.meta.apple-mobile-web-app-capable}

		author = {$page.meta.author}
		author_email = {$page.meta.autohr_email}

		description = TEXT
		description {
			data = page:description
			ifEmpty.data = DB : pages:{$netcase.navigation.homePid}:description
		}

		keywords = TEXT
		keywords {
			data = page:keywords
			ifEmpty.data = DB : pages:{$netcase.navigation.homePid}:keywords
		}

		abstract = TEXT
		abstract {
			data = page:abstract
			ifEmpty.data = DB : pages:{$netcase.navigation.homePid}:abstract
		}
	}

	includeCSS {
		icomoon = EXT:nctemplate/Resources/Public/Fonts/Icomoon/style.css
		bootstrap = EXT:nctemplate/Resources/Public/Css/bootstrap.min.css
		jqueryUi = EXT:nctemplate/Resources/Public/Css/jquery-ui.css
		owlCarousel = EXT:nctemplate/Resources/Public/Css/owl.carousel.min.css
		owlTheme = EXT:nctemplate/Resources/Public/Css/owl.theme.default.min.css
		animate = EXT:nctemplate/Resources/Public/Css/animate.css
		flaticon = EXT:nctemplate/Resources/Public/Fonts/Flaticon/font/flaticon.css
		aos = EXT:nctemplate/Resources/Public/Css/aos.css
		animate = EXT:nctemplate/Resources/Public/Css/animate.css
		styles = EXT:nctemplate/Resources/Public/Css/style.css
	}

	includeJSLibs {
		#header = EXT:nctemplate/Resources/Public/JavaScript/header.min.js
		header {
			disableCompression = 1
			excludeFromConcatenation = 1
			forceOnTop = 1
		}
	}

	includeJSFooterlibs {
		jquery = EXT:nctemplate/Resources/Public/JavaScript/jquery-3.3.1.min.js
		jquery {
			disableCompression = 1
			excludeFromConcatenation = 1
		}

		migrate =  EXT:nctemplate/Resources/Public/JavaScript/jquery-migrate-3.0.1.min.js
		migrate {
			disableCompression = 1
			excludeFromConcatenation = 1
		}

		bootstrap = EXT:nctemplate/Resources/Public/JavaScript/bootstrap.min.js
		bootstrap {
			disableCompression = 1
			excludeFromConcatenation = 1
		}

		owlCarousel = EXT:nctemplate/Resources/Public/JavaScript/owl.carousel.min.js
		owlCarousel {
			disableCompression = 1
			excludeFromConcatenation = 1
		}

		stellar = EXT:nctemplate/Resources/Public/JavaScript/jquery.stellar.min.js
		stellar {
			disableCompression = 1
			excludeFromConcatenation = 1
		}

		aos = EXT:nctemplate/Resources/Public/JavaScript/aos.js
		aos {
			disableCompression = 1
			excludeFromConcatenation = 1
		}

		waypoints = EXT:nctemplate/Resources/Public/JavaScript/jquery.waypoints.min.js
		waypoints {
			disableCompression = 1
			excludeFromConcatenation = 1
		}

		main = EXT:nctemplate/Resources/Public/JavaScript/main.js
		main {
			disableCompression = 1
			excludeFromConcatenation = 1
		}
	}
}
