# ---------------------------------------------------------------------------------------------------------------------
	# Modules
# ---------------------------------------------------------------------------------------------------------------------

	RTE.default.preset = netcase

mod {
	SHARED{
		defaultLanguageFlag = de
		defaultLanguageLabel = Deutsch
	}
}

# ---------------------------------------------------------------------------------------------------------------------
	# ADMPANEL
# ---------------------------------------------------------------------------------------------------------------------
	admPanel {
	enable {
		preview = 1
		cache = 1
		publish = 1
		edit = 1
		info = 1
	}
	hide = 1
}

# ---------------------------------------------------------------------------------------------------------------------
	# TCAdefaults
# ---------------------------------------------------------------------------------------------------------------------
	TCAdefaults {
	pages {
		hidden = 0
		url_scheme = 2f
	}
}

# ---------------------------------------------------------------------------------------------------------------------
	# TCA
# ---------------------------------------------------------------------------------------------------------------------
	TCA {
	tt_content {
		columns {
			media.config.internal_type = 'file_reference'
			header.config.type = text
			header.config.rows = 2
		}
	}
}

# ---------------------------------------------------------------------------------------------------------------------
	# TCEMAIN
# ---------------------------------------------------------------------------------------------------------------------
	TCEMAIN {
	table {
		pages {
			disablePrependAtCopy = 1
			disableHideAtCopy = 1
		}
		tt_content {
			disablePrependAtCopy = 1
			disableHideAtCopy = 1
		}
	}
	permissions {
		groupid = 1
		user = show, editcontent, edit, new, delete
			group  = show, editcontent, edit, new, delete
			everybody = show, editcontent, edit, new
	}
	translateToHidden = 0
}

# ---------------------------------------------------------------------------------------------------------------------
	# TCEFORM
# ---------------------------------------------------------------------------------------------------------------------
	TCEFORM {
	pages {
		layout.disabled = 0
		backend_layout {
			backend_layout_next_level.removeItems = -1,0
			backend_layout.removeItems = -1,0
		}
	}
	tt_content {
		header_layout {
			altLabels {
				1 = H1
				2 = H2
				3 = H3
			}
			removeItems = 0,4,5,6,7,8,9,10
		}
		layout {
			removeItems = 1,2,3
			disableNoMatchingValueElement = 1
			types {
				bullets {
					removeItems =
						addItems {
					}
				}
				table {
					removeItems =
						addItems {
					}
				}
				uploads {
					removeItems =
						altLabels {
					}
				}
			}
		}
		list_type {
			noMatchingValue_label = Dieses Plugin können Sie nicht anpassen!
		}
		imagecols {
			removeItems =
		}
		section_frame {
			removeItems =
				addItems {
			}
			altLabels {
			}
			types {
			}
			disableNoMatchingValueElement = 1
		}

		table_bgColor.disabled = 1
		table_border.disabled = 1
		table_cellspacing.disabled = 1
		table_cellpadding.disabled = 1

		#remove not configured content elements
		CType.removeItems = bullets,table,mailform,search,multimedia,media,shortcut
	}
}
