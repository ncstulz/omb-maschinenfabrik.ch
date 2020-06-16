lib.content {

	contact = CONTENT
	contact {
		table = tt_content
		select {
			where = colPos = 0
			orderBy = sorting
			pidInList = {$netcase.content.contactPid}
			languageField = sys_language_uid
		}
	}
}
