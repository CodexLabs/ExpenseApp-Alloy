var user = Alloy.Models.Employee;
Ti.API.info(user.transform());

if(user.isAuthenticated()) {
	var home = Alloy.createController('home').getView();
	home.open();
} else {
	var login = Alloy.createController('login').getView();
	login.open();
}

// var home = Alloy.createController('home').getView();
// home.open();

// var addExpense = Alloy.createController('addExpense').getView();
// addExpense.open();