var httpClient = Titanium.Network.createHTTPClient();

var baseUrl = 'http://kulcapexpenseapp.appspot.com/resources/userService/';
var loginUrl = 'login';
var logoutUrl = 'logout';
var getEmployeeUrl = 'getEmployee';

var token;

exports.login = function(email, password) {
	params = {  
   		email: email,
        password: password
	};
	Ti.API.info("starting login request");
	httpClient.onload = loginOnload;
	httpClient.onerror = loginError;
	httpClient.open('POST', baseUrl + loginUrl);
	httpClient.send(params);
}

exports.logout = function(myToken) {
	params = {  
        token: myToken
	};
	Ti.API.info("starting logout request");
	httpClient.onload = logoutOnload;
	httpClient.onerror = logoutError;
	httpClient.open('POST', baseUrl + logoutUrl);
	httpClient.send(params);
}

exports.getEmployee = function(myToken) {
	params = {  
        token: myToken
	};
	Ti.API.info("starting getEmployee request.");
	httpClient.setOnload(getEmployeeOnload);
	httpClient.setOnerror(getEmployeeError);
	httpClient.open('POST', baseUrl + getEmployeeUrl);
	httpClient.send(params);
}

function loginOnload(){
	Ti.API.info('Login Success ' + httpClient.connected + ' ' + httpClient.statusText + ' ' + httpClient.responseText);
	
	if(httpClient.responseText){
		// Ti.App.fireEvent('loginSuccess', {token : httpClient.responseText});
		token = httpClient.responseText;
		exports.getEmployee(token);
	} else {
		Ti.App.fireEvent('loginFailed', {message : 'Your username and password combination was wrong'});
	}
}

function loginError(){
	Ti.API.info('Login Error ' + httpClient.connected  + ' ' + httpClient.statusText + ' ' + httpClient.responseText);
	Ti.App.fireEvent('loginError', {message : 'Failed to connect to login service.'});
}

function logoutOnload(){
	Ti.API.info('Logout Success ' + httpClient.connected + ' ' + httpClient.statusText + ' ' + httpClient.responseText);
	Ti.App.fireEvent('logoutSuccess');
}

function logoutError(){
	Ti.API.info('Logout Error ' + httpClient.connected  + ' ' + httpClient.statusText + ' ' + httpClient.responseText);
	Ti.App.fireEvent('logoutError');
}

function getEmployeeOnload(){  	
	Ti.API.info('GetEmployee Success ' + httpClient.connected + ' ' + httpClient.statusText + ' ' + httpClient.responseText);
	
	if(httpClient.responseText){
		var response = JSON.parse(httpClient.responseText);
		
		Ti.API.info(response);
		Ti.App.fireEvent('loginSuccess',response);
	} else {
		Ti.App.fireEvent('loginFailed', {message : 'User info not found'});
	}
}

function getEmployeeError(){
	Ti.API.info('GetEmployee Error ' + httpClient.connected  + ' ' + httpClient.statusText + ' ' + httpClient.responseText);
	Ti.App.fireEvent('loginFailed', {message : 'Failed to retrieve user info.'});
}


