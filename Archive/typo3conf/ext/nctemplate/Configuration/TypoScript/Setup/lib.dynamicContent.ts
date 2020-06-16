#################
#### CONTENT ####
#################
#
#  0  = main
#  1  = left
#  2  = right
#  3  = border
#  4  = main2
#
#  10 = footer1
#  11 = footer2
#  12 = footer3
#
#  20 = middle1
#  21 = middle2
#  22 = middle3
#
#  30 = special1
#  31 = special2
#  32 = special3
#  33 = special4
#  34 = special5
#  35 = special6
#  36 = special7
#  37 = special8
#  38 = special9
#  39 = special10
#
#################
lib.dynamicContent = COA
lib.dynamicContent {
    5 = LOAD_REGISTER
    5  {
        colPos.cObject = TEXT
        colPos.cObject {
            value.current = 1
            ifEmpty = 0
        }
    }
    20 < styles.content.get
    20.select.where = colPos={register:colPos}
    20.select.where.insertData = 1
}

lib.footerContent = COA
lib.footerContent {
    5 = LOAD_REGISTER
    5  {
        colPos.cObject = TEXT
        colPos.cObject {
            value.current = 1
            ifEmpty = 0
        }
    }
    20 < styles.content.get
    20.select.pidInList = 26
    20.select.where = colPos={register:colPos}
    20.select.where.insertData = 1
}