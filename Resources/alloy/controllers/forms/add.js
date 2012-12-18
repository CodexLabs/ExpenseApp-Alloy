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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {};
    $.__views.add = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "composite",
        id: "add"
    }), "Window", null);
    $.addTopLevelView($.__views.add);
    $.__views.__alloyId12 = A$(Ti.UI.iOS.createToolbar({
        top: 0,
        height: "43dp",
        backgroundColor: "#bbb",
        id: "__alloyId12"
    }), "Toolbar", $.__views.add);
    $.__views.add.add($.__views.__alloyId12);
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
    }), "Button", $.__views.__alloyId12);
    $.__views.__alloyId12.add($.__views.btnBack);
    $.__views.btnBack.on("click", function() {
        btnBackCallback.apply(this, Array.prototype.slice.apply(arguments));
    });
    $.__views.container = A$(Ti.UI.createScrollView({
        bottom: "43dp",
        top: "43dp",
        contentWidth: "auto",
        contentHeight: "auto",
        layout: "vertical",
        showVerticalScrollIndicator: !0,
        showHorizontalScrollIndicator: !1,
        id: "container"
    }), "ScrollView", $.__views.add);
    $.__views.add.add($.__views.container);
    $.__views.__alloyId13 = A$(Ti.UI.iOS.createToolbar({
        bottom: 0,
        height: "43dp",
        backgroundColor: "#bbb",
        id: "__alloyId13"
    }), "Toolbar", $.__views.add);
    $.__views.add.add($.__views.__alloyId13);
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
    }), "Button", $.__views.__alloyId13);
    $.__views.__alloyId13.add($.__views.btnPrevious);
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
    }), "Button", $.__views.__alloyId13);
    $.__views.__alloyId13.add($.__views.btnNext);
    $.__views.btnNext.on("click", function() {
        btnNextCallback.apply(this, Array.prototype.slice.apply(arguments));
    });
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;