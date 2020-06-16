lib.headerImage {

	slides = COA
	slides {
		10 = FILES
		10 {
			references {
				table = pages
				#levelfiled does not work for TypoScript loaded from an Extension use fullRootLine insted, take care if you use for multiple instances
				data = levelfield:-1, media, slide
				insertData = 1
			}
			renderObj = COA
			renderObj {
				stdWrap.dataWrap =  <div class="site-blocks-cover small inner-page overlay" data-aos="fade" data-stellar-background-ratio="0.5">|</div>


				10 = IMG_RESOURCE
				10 {
					# import Image
					file.import.data = file:current:uid
					#Use FAL
					file.treatIdAsReference = 1
					# define altText
					altText.data = file:current:alternative // file:current:name
					# define titleText
					titleText.data = file:current:title
					# wrap fancybox link if tx_nctemplate_clickenlarge is activated
					stdWrap.typolink {
						parameter.data = file:current:publicUrl
						parameter.data.if.isTrue.data = page:tx_nctemplate_clickenlarge
						ATagParams = class="fancybox"
					}
					stdWrap.wrap = <div class="site-blocks-cover inner-page overlay" style="background-image: url(/|);" data-aos="fade" data-stellar-background-ratio="0.5">
				}

				20 = COA
				20 {

					wrap = <div class="row align-items-center justify-content-center"><div class="col-md-5 text-center text-marginMinus" data-aos="fade">|</div></div></div>

					10 = TEXT
					10 {
						#define long description
						value.data = file:current:title
						# wrap description
						stdWrap.wrap = <h1 class="text-uppercase text-white">|</h1>
						stdWrap.required = 1
					}

					20 = TEXT
					20 {
						#define long description
						value.data = file:current:description
						# wrap description
						stdWrap.wrap = <span class="caption d-block text-white">|</span>
						stdWrap.required = 1
					}
				}
			}
		}
	}
}

lib.headerContent {

	slides = COA
	slides {
		10 = FILES
		10 {
			references {
				table = pages
				#levelfiled does not work for TypoScript loaded from an Extension use fullRootLine insted, take care if you use for multiple instances
				data = levelfield:-1, media, slide
				insertData = 1
			}
			renderObj = COA
			renderObj {
				stdWrap.dataWrap =  <div class="site-blocks-cover small inner-page overlay aos-init aos-animate" data-aos="fade" data-stellar-background-ratio="0.5">|</div>


				10 = IMG_RESOURCE
				10 {
					# import Image
					file.import.data = file:current:uid
					#Use FAL
					file.treatIdAsReference = 1
					# define altText
					altText.data = file:current:alternative // file:current:name
					# define titleText
					titleText.data = file:current:title
					# wrap fancybox link if tx_nctemplate_clickenlarge is activated
					stdWrap.typolink {
						parameter.data = file:current:publicUrl
						parameter.data.if.isTrue.data = page:tx_nctemplate_clickenlarge
						ATagParams = class="fancybox"
					}
					stdWrap.wrap = <div class="site-blocks-cover inner-page overlay" style="background-image: url(/|);" data-aos="fade" data-stellar-background-ratio="0.5">
				}

				20 = COA
				20 {

					wrap = <div class="row align-items-center justify-content-center"><div class="col-md-5 text-center text-marginMinus" data-aos="fade">|</div></div></div>

					5 = TEXT
					5 {
						#define long description
						data = levelfield : 1 , title
						# wrap description
						stdWrap.wrap = <span class="caption d-block text-white">|</span>
						stdWrap.required = 1
					}

					10 = TEXT
					10 {
						#define long description
						data = FIELD:title
						# wrap description
						stdWrap.wrap = <h1 class="text-uppercase text-white">|</h1>
						stdWrap.required = 1
					}
				}
			}
		}
	}
}
