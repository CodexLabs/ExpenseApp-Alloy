function btnBackCallback(e) {
	var home = Alloy.createController('home').getView();
	home.open();
}

function btnInfoCallback(e) {
	var info = Alloy.createController('forms/info').getView();
	info.open();
}

function btnOverviewCallback(e) {
	var overview = Alloy.createController('forms/overview').getView();
	overview.open();
}

function btnAddCallback(e) {
	var add = Alloy.createController('forms/add').getView();
	add.open();
}

function btnSignCallback(e) {
	var sign = Alloy.createController('forms/sign').getView();
	sign.open();
}