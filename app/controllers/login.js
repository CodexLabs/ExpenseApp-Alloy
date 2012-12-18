var user = Alloy.Models.Employee;

function btnLoginCallback(e) {
	user.login($.email.value, $.password.value);
}

user.on('loginSucces', function() {
	Ti.API.info("Login succeeded. Now fetching user data...")
	user.fetchInfo();
});

user.on('loginFailed', function(e) {
	Ti.API.error("Failed to login user.");
	alert("login failed: " + e.message + e.index);
});

user.on('fetchInfoSucces', function() {	
	Ti.API.info("Fetch user info succeeded.")
	var home = Alloy.createController('home').getView();
	home.open();
});

user.on('fetchInfoFailed', function(e) {	
	Ti.API.error("Failed to fetch user info.");
	alert("login failed: " + e.message);
});
