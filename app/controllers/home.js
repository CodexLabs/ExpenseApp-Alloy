var user = Alloy.Models.Employee;

function openAddExpenseWindow(e) {  
    var addExpense = Alloy.createController('addExpense').getView();
	addExpense.open();
}

function openStatusWindow(e) {
	var status = Alloy.createController('status').getView();
	status.open();
}

function btnLogoutCallback(e) {
	Ti.API.info("logging out");
	user.logout();
}

user.on("logoutSucces", function(){
	user.set({token : ""});
	user.save();
	Ti.API.info(user.transform());
	$.home.close();
	var login = Alloy.createController('login').getView();
	login.open();
});

user.on("logoutFailed", function(e){
	Ti.API.error("Error logging out");
	alert("Error when logging out: " + e.message);
});

$.welcomeLabel.text = "Welcome " + user.fullName() + "!";