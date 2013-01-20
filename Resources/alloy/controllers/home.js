function Controller() {
    function openAddExpenseWindow(e) {
        Alloy.createController("addExpense").getView().open();
        $.home.close();
    }
    function openStatusWindow(e) {
        Alloy.createController("status").getView().open();
        $.home.close();
    }
    function btnLogoutCallback(e) {
        var user = Alloy.Models.Employee;
        Ti.API.info("logging out");
        var token = user.get("token"), svc = require("/api/UserService");
        svc.logout(token);
        user.unset("token");
        $.home.close();
        Alloy.createController("login").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.home = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "home"
    }), "Window", null);
    $.addTopLevelView($.__views.home);
    $.__views.__alloyId3 = A$(Ti.UI.iOS.createToolbar({
        id: "__alloyId3"
    }), "Toolbar", $.__views.home);
    $.__views.home.add($.__views.__alloyId3);
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
    }), "Button", $.__views.__alloyId3);
    $.__views.__alloyId3.add($.__views.btnLogout);
    btnLogoutCallback ? $.__views.btnLogout.on("click", btnLogoutCallback) : __defers["$.__views.btnLogout!click!btnLogoutCallback"] = !0;
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
    openAddExpenseWindow ? $.__views.addButton.on("click", openAddExpenseWindow) : __defers["$.__views.addButton!click!openAddExpenseWindow"] = !0;
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
    openStatusWindow ? $.__views.overviewButton.on("click", openStatusWindow) : __defers["$.__views.overviewButton!click!openStatusWindow"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var user = Alloy.Models.Employee;
    user.fetch();
    $.welcomeLabel.text = "Welcome " + user.fullName() + "!";
    __defers["$.__views.btnLogout!click!btnLogoutCallback"] && $.__views.btnLogout.on("click", btnLogoutCallback);
    __defers["$.__views.addButton!click!openAddExpenseWindow"] && $.__views.addButton.on("click", openAddExpenseWindow);
    __defers["$.__views.overviewButton!click!openStatusWindow"] && $.__views.overviewButton.on("click", openStatusWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;