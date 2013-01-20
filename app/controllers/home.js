var user = Alloy.Models.Employee;
user.fetch();

function openAddExpenseWindow(e) {  
    Alloy.createController('addExpense').getView().open();
    $.home.close();
}

function openStatusWindow(e) {
	Alloy.createController('status').getView().open();
	$.home.close();
}

function btnLogoutCallback(e) {
	var user = Alloy.Models.Employee;
	Ti.API.info("logging out");
	var token = user.get('token');
	var svc = require('/api/UserService');
	svc.logout(token);
	user.unset('token');
	// user.save();
	$.home.close();
	Alloy.createController('login').getView().open();
}

$.welcomeLabel.text = "Welcome " + user.fullName() + "!";