function Controller() {
    function btnBackCallback(e) {
        Alloy.createController("home").getView().open();
        $.addExpense.close();
    }
    function btnInfoCallback(e) {
        Alloy.createController("forms/info").getView().open();
        $.addExpense.close();
    }
    function btnOverviewCallback(e) {
        Alloy.createController("forms/overview").getView().open();
        $.addExpense.close();
    }
    function btnAddCallback(e) {
        Alloy.createController("forms/add").getView().open();
        $.addExpense.close();
    }
    function btnSignCallback(e) {
        Alloy.createController("forms/sign").getView().open();
        $.addExpense.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
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
    btnBackCallback ? $.__views.btnBack.on("click", btnBackCallback) : __defers["$.__views.btnBack!click!btnBackCallback"] = !0;
    $.__views.btnInfo = A$(Ti.UI.createTableViewRow({
        title: "Your info",
        id: "btnInfo"
    }), "TableViewRow", null);
    var __alloyId2 = [];
    __alloyId2.push($.__views.btnInfo);
    btnInfoCallback ? $.__views.btnInfo.on("click", btnInfoCallback) : __defers["$.__views.btnInfo!click!btnInfoCallback"] = !0;
    $.__views.btnOverview = A$(Ti.UI.createTableViewRow({
        title: "Overview",
        id: "btnOverview"
    }), "TableViewRow", null);
    __alloyId2.push($.__views.btnOverview);
    btnOverviewCallback ? $.__views.btnOverview.on("click", btnOverviewCallback) : __defers["$.__views.btnOverview!click!btnOverviewCallback"] = !0;
    $.__views.btnAdd = A$(Ti.UI.createTableViewRow({
        title: "Add expense",
        id: "btnAdd"
    }), "TableViewRow", null);
    __alloyId2.push($.__views.btnAdd);
    btnAddCallback ? $.__views.btnAdd.on("click", btnAddCallback) : __defers["$.__views.btnAdd!click!btnAddCallback"] = !0;
    $.__views.btnSign = A$(Ti.UI.createTableViewRow({
        title: "Sign and Send",
        id: "btnSign"
    }), "TableViewRow", null);
    __alloyId2.push($.__views.btnSign);
    btnSignCallback ? $.__views.btnSign.on("click", btnSignCallback) : __defers["$.__views.btnSign!click!btnSignCallback"] = !0;
    $.__views.__alloyId1 = A$(Ti.UI.createTableView({
        data: __alloyId2,
        id: "__alloyId1"
    }), "TableView", $.__views.addExpense);
    $.__views.addExpense.add($.__views.__alloyId1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.btnBack!click!btnBackCallback"] && $.__views.btnBack.on("click", btnBackCallback);
    __defers["$.__views.btnInfo!click!btnInfoCallback"] && $.__views.btnInfo.on("click", btnInfoCallback);
    __defers["$.__views.btnOverview!click!btnOverviewCallback"] && $.__views.btnOverview.on("click", btnOverviewCallback);
    __defers["$.__views.btnAdd!click!btnAddCallback"] && $.__views.btnAdd.on("click", btnAddCallback);
    __defers["$.__views.btnSign!click!btnSignCallback"] && $.__views.btnSign.on("click", btnSignCallback);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;