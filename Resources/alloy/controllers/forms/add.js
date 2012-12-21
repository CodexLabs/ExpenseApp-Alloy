function Controller() {
    function btnNextCallback(e) {
        var sign = Alloy.createController("forms/sign").getView();
        sign.open();
    }
    function btnPreviousCallback(e) {
        var overview = Alloy.createController("forms/overview").getView();
        overview.open();
    }
    function btnBackCallback(e) {
        var addExpense = Alloy.createController("addExpense").getView();
        addExpense.open();
    }
    function changeGrouping(e) {
        switch (e.index) {
          case 0:
            alert("now domestic");
            break;
          case 1:
            alert("now Abroad");
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.add = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "composite",
        id: "add"
    }), "Window", null);
    $.addTopLevelView($.__views.add);
    $.__views.__alloyId9 = A$(Ti.UI.iOS.createToolbar({
        top: 0,
        height: "43dp",
        backgroundColor: "#bbb",
        id: "__alloyId9"
    }), "Toolbar", $.__views.add);
    $.__views.add.add($.__views.__alloyId9);
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
    }), "Button", $.__views.__alloyId9);
    $.__views.__alloyId9.add($.__views.btnBack);
    btnBackCallback ? $.__views.btnBack.on("click", btnBackCallback) : __defers["$.__views.btnBack!click!btnBackCallback"] = !0;
    $.__views.header = A$(Ti.UI.createView({
        top: "43dp",
        height: "43dp",
        backgroundColor: "white",
        id: "header"
    }), "View", $.__views.add);
    $.__views.add.add($.__views.header);
    var __alloyId12 = [];
    __alloyId12.push({
        title: "Domestic"
    });
    __alloyId12.push({
        title: "Abroad"
    });
    $.__views.__alloyId10 = A$(Ti.UI.iOS.createTabbedBar({
        bottom: "6dp",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        style: Ti.UI.iPhone.SystemButtonStyle.BAR,
        labels: __alloyId12,
        index: "0",
        id: "__alloyId10"
    }), "TabbedBar", $.__views.header);
    $.__views.header.add($.__views.__alloyId10);
    changeGrouping ? $.__views.__alloyId10.on("click", changeGrouping) : __defers["$.__views.__alloyId10!click!changeGrouping"] = !0;
    $.__views.container = A$(Ti.UI.createScrollView({
        bottom: "43dp",
        top: "86dp",
        contentWidth: "auto",
        contentHeight: "auto",
        layout: "vertical",
        showVerticalScrollIndicator: !0,
        showHorizontalScrollIndicator: !1,
        id: "container"
    }), "ScrollView", $.__views.add);
    $.__views.add.add($.__views.container);
    $.__views.__alloyId15 = A$(Ti.UI.iOS.createToolbar({
        bottom: 0,
        height: "43dp",
        backgroundColor: "#bbb",
        id: "__alloyId15"
    }), "Toolbar", $.__views.add);
    $.__views.add.add($.__views.__alloyId15);
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
    }), "Button", $.__views.__alloyId15);
    $.__views.__alloyId15.add($.__views.btnPrevious);
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
    }), "Button", $.__views.__alloyId15);
    $.__views.__alloyId15.add($.__views.btnNext);
    btnNextCallback ? $.__views.btnNext.on("click", btnNextCallback) : __defers["$.__views.btnNext!click!btnNextCallback"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.btnBack!click!btnBackCallback"] && $.__views.btnBack.on("click", btnBackCallback);
    __defers["$.__views.__alloyId10!click!changeGrouping"] && $.__views.__alloyId10.on("click", changeGrouping);
    __defers["$.__views.domesticSwitch!click!changeGrouping"] && $.__views.domesticSwitch.on("click", changeGrouping);
    __defers["$.__views.abroadSwitch!click!changeGrouping"] && $.__views.abroadSwitch.on("click", changeGrouping);
    __defers["$.__views.btnPrevious!click!btnPreviousCallback"] && $.__views.btnPrevious.on("click", btnPreviousCallback);
    __defers["$.__views.btnNext!click!btnNextCallback"] && $.__views.btnNext.on("click", btnNextCallback);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;