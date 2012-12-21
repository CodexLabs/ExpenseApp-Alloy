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
    var $ = this, exports = {}, __defers = {};
    Alloy.Collections.instance("Expense");
    $.__views.overview = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "composite",
        id: "overview"
    }), "Window", null);
    $.addTopLevelView($.__views.overview);
    $.__views.__alloyId22 = A$(Ti.UI.iOS.createToolbar({
        top: 0,
        height: "43dp",
        backgroundColor: "#bbb",
        id: "__alloyId22"
    }), "Toolbar", $.__views.overview);
    $.__views.overview.add($.__views.__alloyId22);
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
    }), "Button", $.__views.__alloyId22);
    $.__views.__alloyId22.add($.__views.btnBack);
    btnBackCallback ? $.__views.btnBack.on("click", btnBackCallback) : __defers["$.__views.btnBack!click!btnBackCallback"] = !0;
    $.__views.__alloyId23 = A$(Ti.UI.createTableView({
        top: "43dp",
        bottom: "43dp",
        backgroundColor: "white",
        id: "__alloyId23"
    }), "TableView", $.__views.overview);
    $.__views.overview.add($.__views.__alloyId23);
    var __alloyId27 = function(e) {
        var models = filterFunction(Alloy.Collections.Expense), len = models.length, rows = [];
        for (var i = 0; i < len; i++) {
            var __alloyId25 = models[i];
            __alloyId25.__transform = transformFunction(__alloyId25);
            var __alloyId26 = Alloy.createController("overviewRow", {
                id: "expenseRow",
                $model: __alloyId25
            });
            rows.push(__alloyId26.getViewEx({
                recurse: !0
            }));
            expenseRowCallback ? $.__views.expenseRow.on("click", expenseRowCallback) : __defers["$.__views.expenseRow!click!expenseRowCallback"] = !0;
        }
        $.__views.__alloyId23.setData(rows);
    };
    Alloy.Collections.Expense.on("fetch destroy change add remove reset", __alloyId27);
    $.__views.__alloyId28 = A$(Ti.UI.iOS.createToolbar({
        bottom: 0,
        height: "43dp",
        backgroundColor: "#bbb",
        id: "__alloyId28"
    }), "Toolbar", $.__views.overview);
    $.__views.overview.add($.__views.__alloyId28);
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
    }), "Button", $.__views.__alloyId28);
    $.__views.__alloyId28.add($.__views.btnPrevious);
    btnPreviousCallback ? $.__views.btnPrevious.on("click", btnPreviousCallback) : __defers["$.__views.btnPrevious!click!btnPreviousCallback"] = !0;
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
    }), "Button", $.__views.__alloyId28);
    $.__views.__alloyId28.add($.__views.btnNext);
    btnNextCallback ? $.__views.btnNext.on("click", btnNextCallback) : __defers["$.__views.btnNext!click!btnNextCallback"] = !0;
    exports.destroy = function() {
        Alloy.Collections.Expense.off("fetch destroy change add remove reset", __alloyId27);
    };
    _.extend($, $.__views);
    __defers["$.__views.btnBack!click!btnBackCallback"] && $.__views.btnBack.on("click", btnBackCallback);
    __defers["$.__views.expenseRow!click!expenseRowCallback"] && $.__views.expenseRow.on("click", expenseRowCallback);
    __defers["$.__views.btnPrevious!click!btnPreviousCallback"] && $.__views.btnPrevious.on("click", btnPreviousCallback);
    __defers["$.__views.btnNext!click!btnNextCallback"] && $.__views.btnNext.on("click", btnNextCallback);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;