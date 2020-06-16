#############
#### RTE ####
#############
# RTE Konfiguration Basis Optionen
# Zeile 11: Pfad zur rte.css anpassen !
# weitere Infos: http://typo3.org/extension-manuals/rtehtmlarea/1.4.4/view/5/2/
	#

RTE.default {

	RTEHeightOverride = 700
	RTEWidthOverride = 700

	disableColorPicker = 1

	contentCSS = EXT:nctemplate/Resources/Public/Css/rte.css

	## Markup options
	enableWordClean = 1
	removeTrailingBR = 1
	removeComments = 1
	removeTags = center, font, o:p, sdfield, strike, u
	removeTagsAndContents = link, meta, script, style, title

	# Dies sind alle zur Verfügung stehende Buttons
	# die mit showButtons hideButtons angezeigt/versteckt werden können
	# showButtons (
	#   blockstylelabel, blockstyle, textstylelabel, textstyle, fontstyle, fontsize, formatblock, blockquote, insertparagraphbefore, insertparagraphafter,
	#   lefttoright, righttoleft, language, showlanguagemarks, left, center, right, justifyfull, orderedlist, unorderedlist, definitionlist, definitionitem,
	#   outdent, indent, formattext, bidioverride, big, bold, citation, code, definition, deletedtext, emphasis, insertedtext, italic, keyboard, monospaced,
	#   quotation, sample, small, span, strikethrough, strong, subscript, superscript, underline, variable, textcolor, bgcolor, textindicator, editelement,
	#   showmicrodata, emoticon, insertcharacter, insertsofthyphen, line, link, unlink, image, table, user, acronym, findreplace, spellcheck, chMode, inserttag,
	#   removeformat, copy, cut, paste, pastetoggle, pastebehaviour, undo, redo, about, toggleborders, tableproperties, tablerestyle, rowproperties, rowinsertabove,
	#   rowinsertunder, rowdelete, rowsplit, columnproperties, columninsertbefore, columninsertafter, columndelete, columnsplit, cellproperties, cellinsertbefore,
	#   cellinsertafter, celldelete, cellsplit, cellmerge
	# )
#
# Damit die Buttons angezeigt werden müssen Sie in der oprion 'toolbarOrder' vorhanden sein

	# Buttons die gezeigt werden
	showButtons (
		bold
		, italic
		, formatblock
		, chMode
		, textcolor
		, underline
		, left
		, center
		, right
		, orderedlist
		, unorderedlist
		, insertcharacter
		, line
		, link
		, image
		, removeformat
		, findreplace
		, insertcharacter
		, pastetoggle
		, copy
		, cut
		, paste
		, tableproperties
		, rowproperties
		, rowinsertabove
		, rowinsertunder
		, rowdelete
		, rowsplit
		, columninsertbefore
		, columninsertafter
		, columndelete
		, columnsplit
		, cellproperties
		, cellinsertbefore
		, cellinsertafter
		, celldelete
		, cellsplit
		, cellmerge
		, tableproperties
		, toggleborders
		, table
		, undo
		, redo
		, showhelp
	)
    # Buttons die ausgeblendet werden sollen, damit wird die defualt Einstellung des rte sicher überschrieben
    # show und hide buttons sollten nachher alle buttons aus der Vorgabe enthalten (Zeile 22 ff)
	hideButtons(
		fontstyle
		, fontsize
		, textstyle
		, textstylelabel
		, blockstyle
		, blockstylelabel
		, strikethrough
		, lefttoright
		, righttoleft
		, bgcolor
		, textcolor
		, textindicator
		, emoticon
		, user
		, spellcheck
		, inserttag
		, outdent
		, indent
		, justifyfull
		, subscript
		, superscript
		, acronym
		, about
	)
	/*
	 showButtons = blockstylelabel, blockstyle, textstylelabel, textstyle
	 showButtons := addToList(formatblock, bold, italic, subscript, superscript)
	 showButtons := addToList(orderedlist, unorderedlist, outdent, indent, textindicator)
	 showButtons := addToList(insertcharacter, link, table, findreplace, chMode, removeformat, undo, redo, about)
	 showButtons := addToList(toggleborders, tableproperties)
	 showButtons := addToList(rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit)
	 showButtons := addToList(columninsertbefore, columninsertafter, columndelete, columnsplit)
	 showButtons := addToList(cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge)
	 */
# die Reihenfolge der Buttons im RTE
    #toolbarOrder = formatblock, blockstyle, textstyle, linebreak, bold, italic, underline, strikethrough, bar, orderedlist, unorderedlist, bar, left, center, right, copy, cut, paste, bar, undo, redo, removeformat, bar, link, unlink, linkcreator, bar, image, imageeditor, bar, line, insertparagraphbefore, insertparagraphafter, bar, chMode, pastetoggle


    # Einträge im RTE select Feld "Format"
    # zunächst eine Übersicht aller Standard Einträge:
		# address, article, aside, div, footer, header, nav, p,  h1 - h6, pre, blockquote, section,
    # jetzt all das was wir nicht wollen:
		buttons.formatblock.removeItems (
			address
			, article
			, aside
			, div
			, footer
			, header
			, nav
			, h1
			, h5
			, h6
			, pre
			, blockquote
			, section
		)
	buttons.formatblock.items {
		h2.label = h2: Titel 2
		h3.label = h3: Titel 3
		h4.label = Lead Text
		p.label  = p: Normaler Text
	}

	# Defaultmässig deaktivieren
	buttons.pastetoggle {
		setActiveOnRteOpen = 0
	}

    # Hält die RTE Icons gegroupt zusammen
	keepButtonGroupTogether = 1
	keepToggleBordersInToolbar = 1

    # blendet Statusbar in htmlarea aus
	showStatusBar =  0

    ## Ergänzt CSS Style für Textausrichtung links - center - rechts für h, p und Tabellen
	inlineStyle.text-alignment (
		p.align-left, h1.align-left, h2.align-left, h3.align-left, h4.align-left, h5.align-left, h6.align-left, td.align-left { text-align: left; }
	p.align-center, h1.align-center, h2.align-center, h3.align-center, h4.align-center, h5.align-center, h6.align-center, td.align-center { text-align: center; }
	p.align-right, h1.align-right, h2.align-right, h3.align-right, h4.align-right, h5.align-right, h6.align-right, td.align-right { text-align: right; }
)

## Eigens Stylesheet (für RTE Ansicht) wird nicht vom RTE EXT Stylesheet überschrieben
	ignoreMainStyleOverride = 1

	proc {
	# tags die erlaubt / verboten sind
		allowTags (
			, table , thead, tbody, tr, th, td, caption,
			, h2, h3, h4, h5, h6
			, div
			, p
			, br
			, span
			, ul, ol, li
			, re
			, blockquote
			, hr
			, strong, em, b, i, u, sub, sup, strike
			, a
			, img
			, nobr, hr, tt, q, cite, abbr, acronym, center
		)

		denyTags = font

          # br wird nicht zu p konvertiert
		dontConvBRtoParagraph = 1

          # tags sind erlaubt außerhalt von p, div
		allowTagsOutside = img,hr

          # erlaubte attribute in p, div tags
		keepPDIVattribs = align,class,style,id

          # Eigenen Klassen müssen hier nochmal eingefügt werden
          allowedClasses = lead
          classesParagraph = lead

          # Liste aller Klassen die in die DB geschrieben werden dürfen
          # Eigene Klassen müssen hier angefügt werden!
			allowedClasses (
				external-link, external-link-new-window, external-link-lightbox, internal-link, internal-link-new-window, download, mail,
				align-left, align-center, align-right, author,lead
			)

          # Generelle Einstellungen für den HTML-Parser
		HTMLparser_rte {

		# tags die erlaubt/verboten sind
			allowTags < RTE.default.proc.allowTags
			denyTags < RTE.default.proc.denyTags

              # entfernt html-kommentare
			removeComments = 1

              # tags die nicht übereinstimmen werden nicht entfernt (protect / 1 / 0)
			keepNonMatchedTags = 0

              # Tags, die nicht richtig verschachtelt sind, werden entfernt
			keepNonMatchedTags = 1
		}


           # Vom RTE in die Datenbank
		entryHTMLparser_db = 1
		entryHTMLparser_db {

		# tags die erlaubt/verboten sind
			allowTags < RTE.default.proc.allowTags
			denyTags < RTE.default.proc.denyTags

              # Für diese Tags sind keine Attribute erlaubt
			noAttrib = b, i, u, strike, sub, sup, strong, em, quote, blockquote, cite, tt, br, center, hr

              # Diese Tags werden entfernt wenn kein Attribut vorhanden ist
			rmTagIfNoAttrib = span,div,font

              # htmlSpecialChars = 1

              ## align attribute werden erlaubt
			tags {
				p.fixAttrib.align.unset >
				p.allowedAttribs = class,style,align

				div.fixAttrib.align.unset >

				hr.allowedAttribs = class

			# Das <b>-Tag wird durch <strong> ersetzt
				b.remap >
				i.remap = em

                    ## img tags werden erlaubt
				img >
			}
		}

           # Von der Datenbank in den RTE
		exitHTMLparser_db = 1
		exitHTMLparser_db {
		}

	} #end proc

	showTagFreeClasses = 1

    # Tags die nicht eingeführt werden dürfen
	hideTags = font

    # Tabellen Optionen in der RTE Toolbar
	hideTableOperationsInToolbar = 1
	keepToggleBordersInToolbar = 1
	buttons.toggleborders.setOnTableCreation = 1
	buttons.toggleborders.setOnRTEOpen = 1

    # Tabellen Editierungs-Optionen (cellspacing/ cellpadding / border)
	disableSpacingFieldsetInTableOperations = 1
	disableAlignmentFieldsetInTableOperations=1
	disableColorFieldsetInTableOperations=1
	disableLayoutFieldsetInTableOperations=1
	disableBordersFieldsetInTableOperations=1


    ## Tabellen Config
	disableLayoutFieldsetInTableOperations    = 0
	disableSpacingFieldsetInTableOperations   = 0
	disableAlignmentFieldsetInTableOperations = 0
	disableBordersFieldsetInTableOperations   = 1
	disableColorFieldsetInTableOperations     = 1

	buttons.table.enableHandles = 0
	buttons.table.disableEnterParagraphs = 1

	buttons.table.properties.removed = float
	buttons.table.properties.widthUnit.defaultValue = %
	buttons.table.properties.widthUnit.removeItems = px, em
	buttons.table.properties.heightUnit.defaultValue = %
	buttons.table.properties.heightUnit.removeItems = px, em
	buttons.table.properties.borderStyle.defaultValue = solid

	# buttons.rowproperties.removeFieldsets = alignment, borders, color, layout, rowgroup, style
	buttons.rowproperties.removeFieldsets = color, rowgroup, style
	buttons.rowproperties.properties.widthUnit.defaultValue = %
	buttons.rowproperties.properties.widthUnit.removeItems = px, em
	buttons.rowproperties.properties.heightUnit.defaultValue = %
	buttons.rowproperties.properties.heightUnit.removeItems = px, em

	# buttons.columnproperties.removeFieldsets = alignment, borders, color, layout, style
	# buttons.columnproperties.removeFieldsets = color, layout, style

	# buttons.cellproperties.removeFieldsets = alignment, borders, color, layout, style
	buttons.cellproperties.removeFieldsets = color, style
	buttons.cellproperties.properties.widthUnit.defaultValue = %
	buttons.cellproperties.properties.widthUnit.removeItems = px, em
	buttons.cellproperties.properties.heightUnit.defaultValue = %
	buttons.cellproperties.properties.heightUnit.removeItems = px, em


} #End RTE.default

# Use same processing as on entry to database to clean content pasted into the editor
RTE.default.enableWordClean.HTMLparser < RTE.default.proc.entryHTMLparser_db

# FE RTE configuration (htmlArea RTE only)
RTE.default.FE < RTE.default
RTE.default.FE.userElements >
RTE.default.FE.userLinks >

# Breite des RTE in Fullscreen-Ansicht
TCEFORM.tt_content.bodytext.RTEfullScreenWidth= 80%

## Klassen hinzufuegen
RTE.default.proc.allowedClasses := addToList(lightbox-iframe)
RTE.default.buttons {
	link.properties.class.allowedClasses := addToList(lightbox-iframe)
}
RTE.classesAnchor.lightbox-iframe {
	name = Link in Lightbox
}

