function btnNextCallback(e) {
	var add = Alloy.createController('forms/add').getView();
	add.open();
}

function btnPreviousCallback(e) {
	var info = Alloy.createController('forms/info').getView();
	info.open();
}

function btnBackCallback(e) {
	var addExpense = Alloy.createController('addExpense').getView();
	addExpense.open();
}

function expenseRowCallback(e) {
	// Ti.API.info("clicked row index: "+ e.rowIndex);
}
