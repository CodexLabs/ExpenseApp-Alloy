function Controller() {
    function openAddExpenseWindow(e) {
        var addExpense = Alloy.createController("addExpense").getView();
        addExpense.open();
    }
    function openStatusWindow(e) {
        var status = Alloy.createController("status").getView();
        status.open();
    }
    function btnLogoutCallback(e) {
        Ti.API.info("logging out");
        user.logout();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {};
    $.__views.home = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "home"
    }), "Window", null);
    $.addTopLevelView($.__views.home);
    $.__views.__alloyId4 = A$(Ti.UI.iOS.createToolbar({
        id: "__alloyId4"
    }), "Toolbar", $.__views.home);
    $.__views.home.add($.__views.__alloyId4);
    $.__views.btnLogout = A$(Ti.UI.createButton({
        height: "30dp",
        width: "80dp",
        top: "10dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        style: Ti.UI.iPhone.SystemButtonStyle.BORDERED,
        right: "10dp",
        title: "Log out",
        id: "btnLogout"
    }), "Button", $.__views.__alloyId4);
    $.__views.__alloyId4.add($.__views.btnLogout);
    $.__views.btnLogout.on("click", function() {
        btnLogoutCallback.apply(this, Array.prototype.slice.apply(arguments));
    });
    $.__views.welcomeLabel = A$(Ti.UI.createLabel({
        top: "10dp",
        color: "#999",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        width: "auto",
        text: "Welcome!",
        id: "welcomeLabel"
    }), "Label", $.__views.home);
    $.__views.home.add($.__views.welcomeLabel);
    $.__views.addButton = A$(Ti.UI.createButton({
        height: "40dp",
        width: "250dp",
        top: "10dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        title: "Add new expense",
        id: "addButton"
    }), "Button", $.__views.home);
    $.__views.home.add($.__views.addButton);
    $.__views.addButton.on("click", function() {
        openAddExpenseWindow.apply(this, Array.prototype.slice.apply(arguments));
    });
    $.__views.overviewButton = A$(Ti.UI.createButton({
        height: "40dp",
        width: "250dp",
        top: "10dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        title: "Overview",
        id: "overviewButton"
    }), "Button", $.__views.home);
    $.__views.home.add($.__views.overviewButton);
    $.__views.overviewButton.on("click", function() {
        openStatusWindow.apply(this, Array.prototype.slice.apply(arguments));
    });
    _.extend($, $.__views);
    var user = Alloy.Models.Employee;
    user.fetch();
    user.on("logoutSucces", function() {
        $.home.close();
        var login = Alloy.createController("login").getView();
        login.open();
    });
    user.on("logoutFailed", function(e) {
        Ti.API.error("Error logging out");
        alert("Error when logging out: " + e.message);
    });
    $.welcomeLabel.value = user.fullName();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;