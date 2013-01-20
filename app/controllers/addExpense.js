function btnBackCallback(e) {
	Alloy.createController('home').getView().open();
	$.addExpense.close();
}

function btnInfoCallback(e) {
	Alloy.createController('forms/info').getView().open();
	$.addExpense.close();
}

function btnOverviewCallback(e) {
	Alloy.createController('forms/overview').getView().open();
	$.addExpense.close();
}

function btnAddCallback(e) {
	Alloy.createController('forms/add').getView().open();
	$.addExpense.close();
}

function btnSignCallback(e) {
	Alloy.createController('forms/sign').getView().open();
	$.addExpense.close();
}