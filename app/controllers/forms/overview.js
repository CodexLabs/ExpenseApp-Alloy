function btnNextCallback(e) {
	Alloy.createController('forms/add').getView().open();
	$.overview.close();
}

function btnPreviousCallback(e) {
	Alloy.createController('forms/info').getView().open();
	$.overview.close();
}

function btnBackCallback(e) {
	Alloy.createController('addExpense').getView().open();
	$.overview.close();
}

function expenseRowCallback(e) {
	// Ti.API.info("clicked row index: "+ e.rowIndex);
}
