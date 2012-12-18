function btnNextCallback(e) {
	var overview = Alloy.createController('forms/overview').getView();
	overview.open();
	Ti.API.info($.user.get('firstName'));
}

function btnBackCallback(e) {
	var addExpense = Alloy.createController('addExpense').getView();
	addExpense.open();
}

var user = Alloy.Models.employee;

$.monthPicker.value = user.get("date");
$.txtFirstName.value = user.get("firstName");
$.txtLastName.value = user.get("lastName");
$.txtEmployeeNumber.value = user.get("employeeNumber");
$.unitPicker.value = user.get("unitPicker");
$.txtEmail.value = user.get("email");;