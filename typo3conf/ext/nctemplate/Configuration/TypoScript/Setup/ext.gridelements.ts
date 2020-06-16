# Configuration
# -------------------------------
tt_content.gridelements_pi1.20.10.setup {

	# 2 Spalten (70-30)
	# ----------------------------------------
	1 < lib.gridelements.defaultGridSetup
	1 {
		columns {
			0 < .default
			0.wrap = <div class="grid-left">|</div>
			0.insertData = 1
			1 < .default
			1.wrap = <div class="grid-right">|</div>
			1.insertData = 1
		}

		wrap = <div class="grid">|</div>
	}
}
