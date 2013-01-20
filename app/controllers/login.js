function btnLoginCallback(e) {	
	if ($.email.value && $.password.value) {
		var svc = require('/api/UserService');
		svc.login($.email.value, $.password.value)
	}
	else
	{
		alert("Email/Password are required");
	}	
}

Ti.App.addEventListener('loginSuccess', function(data){
	var user = Alloy.Models.Employee;
	Ti.API.info('Succesful login.');
	user.save(data);
	$.login.close();
	Alloy.createController('home').getView().open();
});

Ti.App.addEventListener('loginFailed', function(data){
	Ti.API.error(data.message);
	alert("Login failed: " + data.message);
});

Ti.App.addEventListener('loginError', function(){
	alert("Error when trying to login");
});