var user = Alloy.createModel("Employee");
user.fetch();

Alloy.createController(user.validateAuth() ? 'home' : 'login').getView().open();

// var home = Alloy.createController('home').getView();
// home.open();

// var addExpense = Alloy.createController('addExpense').getView();
// addExpense.open();