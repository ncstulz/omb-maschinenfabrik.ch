# ---------------------------------------------------------------------------------------------------------------------
# Navigation
# ---------------------------------------------------------------------------------------------------------------------
lib.navigation.main = COA
lib.navigation.main {

	10 = HMENU
	10 {

		1 = TMENU
		1 {
			expAll = 1
			noBlur = 1
			NO.allWrap = <li>|</li>
			NO.ATagTitle.field = abstract // description // title

			ACT = 1
			ACT.wrapItemAndSub = <li class="active">|</li>
			ACT.ATagTitle.field = abstract // description // title
			ACT.ATagParams = class="active"

			IFSUB = 1
			IFSUB.wrapItemAndSub = <li class="has-children">|</li>
			IFSUB.ATagTitle.field = abstract // description // title

			ACTIFSUB = 1
			ACTIFSUB.wrapItemAndSub = <li class="active has-children">|</li>
			ACTIFSUB.ATagTitle.field = abstract // description // title
			ACTIFSUB.ATagParams = class="active"

			wrap = <ul class="site-menu js-clone-nav d-none d-lg-block">|</ul>
		}

		2 < .1
		2 {
			IFSUB = 1
			IFSUB.wrapItemAndSub = <li class="has-children">|</li>

			ACTIFSUB = 1
			ACTIFSUB.wrapItemAndSub = <li class="has-children active">|</li>
			ACTIFSUB.ATagTitle.field = abstract // description // title
			ACTIFSUB.ATagParams = class="active"

			wrap = <ul class="dropdown arrow-top">|</ul>
		}

		3 < .2
		3 {
			ACT = 1
			ACT.wrapItemAndSub = <li class="active">|</li>
			ACT.ATagTitle.field = abstract // description // title

			wrap = <ul class="dropdown">|</ul>
		}
	}
}

lib.navigation.sub = COA
lib.navigation.sub {

	5 = TEXT
	5 {
		data = levelfield : 1 , title
		wrap = <h3 class="text-uppercase text-blue">|</h3>
	}

	10 = HMENU
	10 {
		entryLevel = 1
		excludeUidList =

		1 = TMENU
		1 {
			wrap = <ul class="side-navigation">|</ul>
			expAll = 1
			noBlur = 1
			NO = 1
			NO {
				ATagTitle.field = abstract // description // title
				ATagParams =
					wrapItemAndSub = <li>|</li>
			}
			ACT < .NO
			ACT {
				wrapItemAndSub = <li>|</li>
				ATagParams = class="active"
			}
			CUR < .ACT
		}
		2 < .1
		
	}
}
