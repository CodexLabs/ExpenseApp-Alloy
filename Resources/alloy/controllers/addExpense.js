function Controller() {
    function btnBackCallback(e) {
        var home = Alloy.createController("home").getView();
        home.open();
    }
    function btnInfoCallback(e) {
        var info = Alloy.createController("forms/info").getView();
        info.open();
    }
    function btnOverviewCallback(e) {
        var overview = Alloy.createController("forms/overview").getView();
        overview.open();
    }
    function btnAddCallback(e) {
        var add = Alloy.createController("forms/add").getView();
        add.open();
    }
    function btnSignCallback(e) {
        var sign = Alloy.createController("forms/sign").getView();
        sign.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {};
    $.__views.addExpense = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "addExpense"
    }), "Window", null);
    $.addTopLevelView($.__views.addExpense);
    $.__views.__alloyId0 = A$(Ti.UI.iOS.createToolbar({
        id: "__alloyId0"
    }), "Toolbar", $.__views.addExpense);
    $.__views.addExpense.add($.__views.__alloyId0);
    $.__views.btnBack = A$(Ti.UI.createButton({
        height: "30dp",
        width: "80dp",
        top: "10dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        style: Ti.UI.iPhone.SystemButtonStyle.BORDERED,
        left: "10dp",
        title: "Overview",
        id: "btnBack"
    }), "Button", $.__views.__alloyId0);
    $.__views.__alloyId0.add($.__views.btnBack);
    $.__views.btnBack.on("click", function() {
        btnBackCallback.apply(this, Array.prototype.slice.apply(arguments));
    });
    var __alloyId2 = [];
    $.__views.btnInfo = A$(Ti.UI.createTableViewRow({
        title: "Your info",
        id: "btnInfo"
    }), "TableViewRow", null);
    __alloyId2.push($.__views.btnInfo);
    $.__views.btnInfo.on("click", function() {
        btnInfoCallback.apply(this, Array.prototype.slice.apply(arguments));
    });
    $.__views.btnOverview = A$(Ti.UI.createTableViewRow({
        title: "Overview",
        id: "btnOverview"
    }), "TableViewRow", null);
    __alloyId2.push($.__views.btnOverview);
    $.__views.btnOverview.on("click", function() {
        btnOverviewCallback.apply(this, Array.prototype.slice.apply(arguments));
    });
    $.__views.btnAdd = A$(Ti.UI.createTableViewRow({
        title: "Add expense",
        id: "btnAdd"
    }), "TableViewRow", null);
    __alloyId2.push($.__views.btnAdd);
    $.__views.btnAdd.on("click", function() {
        btnAddCallback.apply(this, Array.prototype.slice.apply(arguments));
    });
    $.__views.btnSign = A$(Ti.UI.createTableViewRow({
        title: "Sign and Send",
        id: "btnSign"
    }), "TableViewRow", null);
    __alloyId2.push($.__views.btnSign);
    $.__views.btnSign.on("click", function() {
        btnSignCallback.apply(this, Array.prototype.slice.apply(arguments));
    });
    $.__views.__alloyId1 = A$(Ti.UI.createTableView({
        data: __alloyId2,
        id: "__alloyId1"
    }), "TableView", $.__views.addExpense);
    $.__views.addExpense.add($.__views.__alloyId1);
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;