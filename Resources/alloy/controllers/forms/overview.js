function Controller() {
    function btnNextCallback(e) {
        var add = Alloy.createController("forms/add").getView();
        add.open();
    }
    function btnPreviousCallback(e) {
        var info = Alloy.createController("forms/info").getView();
        info.open();
    }
    function btnBackCallback(e) {
        var addExpense = Alloy.createController("addExpense").getView();
        addExpense.open();
    }
    function expenseRowCallback(e) {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {};
    Alloy.Collections.instance("Expense");
    $.__views.overview = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "composite",
        id: "overview"
    }), "Window", null);
    $.addTopLevelView($.__views.overview);
    $.__views.__alloyId19 = A$(Ti.UI.iOS.createToolbar({
        top: 0,
        height: "43dp",
        backgroundColor: "#bbb",
        id: "__alloyId19"
    }), "Toolbar", $.__views.overview);
    $.__views.overview.add($.__views.__alloyId19);
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
    }), "Button", $.__views.__alloyId19);
    $.__views.__alloyId19.add($.__views.btnBack);
    $.__views.btnBack.on("click", function() {
        btnBackCallback.apply(this, Array.prototype.slice.apply(arguments));
    });
    $.__views.__alloyId20 = A$(Ti.UI.createTableView({
        top: "43dp",
        bottom: "43dp",
        backgroundColor: "white",
        dataTransform: "transformFunction",
        id: "__alloyId20"
    }), "TableView", $.__views.overview);
    $.__views.overview.add($.__views.__alloyId20);
    Alloy.Collections.Expense.on("fetch change add remove", function(e) {
        var models = filterFunction(Alloy.Collections.Expense), len = models.length, rows = [];
        for (var i = 0; i < len; i++) {
            var __alloyId22 = models[i];
            __alloyId22.__transform = transformFunction(__alloyId22);
            var __alloyId23 = Alloy.createController("overviewRow", {
                id: "expenseRow",
                $model: __alloyId22
            });
            rows.push(__alloyId23.getViewEx({
                recurse: !0
            }));
            $.__views.expenseRow.on("click", function() {
                expenseRowCallback.apply(this, Array.prototype.slice.apply(arguments));
            });
        }
        $.__views.__alloyId20.setData(rows);
    });
    $.__views.__alloyId24 = A$(Ti.UI.iOS.createToolbar({
        bottom: 0,
        height: "43dp",
        backgroundColor: "#bbb",
        id: "__alloyId24"
    }), "Toolbar", $.__views.overview);
    $.__views.overview.add($.__views.__alloyId24);
    $.__views.btnPrevious = A$(Ti.UI.createButton({
        height: "30dp",
        width: "80dp",
        top: "10dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        style: Ti.UI.iPhone.SystemButtonStyle.BORDERED,
        left: "10dp",
        title: "Previous",
        id: "btnPrevious"
    }), "Button", $.__views.__alloyId24);
    $.__views.__alloyId24.add($.__views.btnPrevious);
    $.__views.btnPrevious.on("click", function() {
        btnPreviousCallback.apply(this, Array.prototype.slice.apply(arguments));
    });
    $.__views.btnNext = A$(Ti.UI.createButton({
        height: "30dp",
        width: "80dp",
        top: "10dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        style: Ti.UI.iPhone.SystemButtonStyle.BORDERED,
        right: "10dp",
        title: "Next",
        id: "btnNext"
    }), "Button", $.__views.__alloyId24);
    $.__views.__alloyId24.add($.__views.btnNext);
    $.__views.btnNext.on("click", function() {
        btnNextCallback.apply(this, Array.prototype.slice.apply(arguments));
    });
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;