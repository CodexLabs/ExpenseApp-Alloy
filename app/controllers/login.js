var user = Alloy.Models.Employee;

function btnLoginCallback(e) {
	user.login($.email.value, $.password.value);
}

user.on('loginSucces', function(e) {
	Ti.API.info("Login succeeded. Now fetching user data...");
	user.set(e);
	user.save();
	Ti.API.info(user.transform());
	user.fetchInfo();
});

user.on('loginFailed', function(e) {
	Ti.API.error("Failed to login user.");
	alert("login failed: " + e.message + e.index);
});

user.on('fetchInfoSucces', function(e) {	
	Ti.API.info("Fetch user info succeeded.");
	user.set(e);
	user.save();
	Ti.API.info(this.transform());	
	var home = Alloy.createController('home').getView();
	home.open();
});

user.on('fetchInfoFailed', function(e) {	
	Ti.API.error("Failed to fetch user info.");
	alert("login failed: " + e.message);
});

Ti.App.addEventListener("loggedin", function() {
	Ti.API.info("LOOOOOOOOOOOL");
});
