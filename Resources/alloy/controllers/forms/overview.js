function Controller() {
    function btnNextCallback(e) {
        Alloy.createController("forms/add").getView().open();
        $.overview.close();
    }
    function btnPreviousCallback(e) {
        Alloy.createController("forms/info").getView().open();
        $.overview.close();
    }
    function btnBackCallback(e) {
        Alloy.createController("addExpense").getView().open();
        $.overview.close();
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
    $.__views.__alloyId26 = A$(Ti.UI.iOS.createToolbar({
        top: 0,
        height: "43dp",
        backgroundColor: "#bbb",
        id: "__alloyId26"
    }), "Toolbar", $.__views.overview);
    $.__views.overview.add($.__views.__alloyId26);
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
    }), "Button", $.__views.__alloyId26);
    $.__views.__alloyId26.add($.__views.btnBack);
    btnBackCallback ? $.__views.btnBack.on("click", btnBackCallback) : __defers["$.__views.btnBack!click!btnBackCallback"] = !0;
    $.__views.__alloyId27 = A$(Ti.UI.createTableView({
        top: "43dp",
        bottom: "43dp",
        backgroundColor: "white",
        id: "__alloyId27"
    }), "TableView", $.__views.overview);
    $.__views.overview.add($.__views.__alloyId27);
    var __alloyId31 = function(e) {
        var models = filterFunction(Alloy.Collections.Expense), len = models.length, rows = [];
        for (var i = 0; i < len; i++) {
            var __alloyId29 = models[i];
            __alloyId29.__transform = transformFunction(__alloyId29);
            var __alloyId30 = Alloy.createController("overviewRow", {
                id: "expenseRow",
                $model: __alloyId29
            });
            rows.push(__alloyId30.getViewEx({
                recurse: !0
            }));
            expenseRowCallback ? $.__views.expenseRow.on("click", expenseRowCallback) : __defers["$.__views.expenseRow!click!expenseRowCallback"] = !0;
        }
        $.__views.__alloyId27.setData(rows);
    };
    Alloy.Collections.Expense.on("fetch destroy change add remove reset", __alloyId31);
    $.__views.__alloyId32 = A$(Ti.UI.iOS.createToolbar({
        bottom: 0,
        height: "43dp",
        backgroundColor: "#bbb",
        id: "__alloyId32"
    }), "Toolbar", $.__views.overview);
    $.__views.overview.add($.__views.__alloyId32);
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
    }), "Button", $.__views.__alloyId32);
    $.__views.__alloyId32.add($.__views.btnPrevious);
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
    }), "Button", $.__views.__alloyId32);
    $.__views.__alloyId32.add($.__views.btnNext);
    btnNextCallback ? $.__views.btnNext.on("click", btnNextCallback) : __defers["$.__views.btnNext!click!btnNextCallback"] = !0;
    exports.destroy = function() {
        Alloy.Collections.Expense.off("fetch destroy change add remove reset", __alloyId31);
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