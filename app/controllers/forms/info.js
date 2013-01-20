function btnNextCallback(e) {
	Alloy.createController('forms/overview').getView().open();
	$.info.close();
}

function btnBackCallback(e) {
	Alloy.createController('addExpense').getView().open();
	$.info.close();
}

function saveUser() {
	
}

$.info.on('close', function() {
	// Since we are referencing a global model for our bindings,
	// make sure to call $.destroy() when you are done with the 
	// controller/window. This will ensure that no memory is 
	// leaked and that the bindings are properly released.
	$.destroy();
});

Alloy.Models.Employee.fetch();
