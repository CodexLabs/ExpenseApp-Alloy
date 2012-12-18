function Controller() {
    function btnPreviousCallback(e) {
        var add = Alloy.createController("forms/add").getView();
        add.open();
    }
    function btnSendCallback(e) {
        alert("sending");
    }
    function btnBackCallback(e) {
        var addExpense = Alloy.createController("addExpense").getView();
        addExpense.open();
    }
    function btnClearCallback(e) {
        paint.clear();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {};
    $.__views.win = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "composite",
        id: "win"
    }), "Window", null);
    $.addTopLevelView($.__views.win);
    $.__views.__alloyId25 = A$(Ti.UI.iOS.createToolbar({
        top: 0,
        height: "32dp",
        backgroundColor: "#bbb",
        id: "__alloyId25"
    }), "Toolbar", $.__views.win);
    $.__views.win.add($.__views.__alloyId25);
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
    }), "Button", $.__views.__alloyId25);
    $.__views.__alloyId25.add($.__views.btnBack);
    $.__views.btnBack.on("click", function() {
        btnBackCallback.apply(this, Array.prototype.slice.apply(arguments));
    });
    $.__views.__alloyId26 = A$(Ti.UI.createScrollView({
        bottom: "32dp",
        top: "32dp",
        contentWidth: "auto",
        contentHeight: "auto",
        showVerticalScrollIndicator: !0,
        showHorizontalScrollIndicator: !1,
        id: "__alloyId26"
    }), "ScrollView", $.__views.win);
    $.__views.win.add($.__views.__alloyId26);
    $.__views.wrapper = A$(Ti.UI.createView({
        width: "95%",
        top: "2dp",
        height: "150dp",
        borderColor: "#aaa",
        borderRadius: 5,
        borderWidth: 2,
        backgroundColor: "#fff",
        id: "wrapper"
    }), "View", $.__views.__alloyId26);
    $.__views.__alloyId26.add($.__views.wrapper);
    $.__views.remarks = A$(Ti.UI.createTextArea({
        borderColor: "#999",
        borderRadius: 5,
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        textAlign: "left",
        hintText: "Remarks",
        height: "76dp",
        width: "60%",
        left: "2.5%",
        bottom: "2dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "remarks"
    }), "TextArea", $.__views.__alloyId26);
    $.__views.__alloyId26.add($.__views.remarks);
    $.__views.btnClear = A$(Ti.UI.createButton({
        height: 27,
        width: 26,
        top: "4dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        backgroundImage: "/images/clear.png",
        right: "20dp",
        id: "btnClear"
    }), "Button", $.__views.__alloyId26);
    $.__views.__alloyId26.add($.__views.btnClear);
    $.__views.btnClear.on("click", function() {
        btnClearCallback.apply(this, Array.prototype.slice.apply(arguments));
    });
    $.__views.lblNotify = A$(Ti.UI.createLabel({
        text: "Notifications",
        textAlign: "center",
        width: "auto",
        height: "auto",
        font: {
            fontFamily: "Arial",
            fontSize: 16
        },
        color: "#999",
        bottom: "50dp",
        right: "2.5%",
        id: "lblNotify"
    }), "Label", $.__views.__alloyId26);
    $.__views.__alloyId26.add($.__views.lblNotify);
    $.__views.notifySwitch = A$(Ti.UI.createSwitch({
        value: !0,
        width: 300,
        right: "2.5%",
        bottom: "20dp",
        id: "notifySwitch"
    }), "Switch", $.__views.__alloyId26);
    $.__views.__alloyId26.add($.__views.notifySwitch);
    $.__views.__alloyId27 = A$(Ti.UI.iOS.createToolbar({
        bottom: 0,
        height: "32dp",
        backgroundColor: "#bbb",
        id: "__alloyId27"
    }), "Toolbar", $.__views.win);
    $.__views.win.add($.__views.__alloyId27);
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
    }), "Button", $.__views.__alloyId27);
    $.__views.__alloyId27.add($.__views.btnPrevious);
    $.__views.btnPrevious.on("click", function() {
        btnPreviousCallback.apply(this, Array.prototype.slice.apply(arguments));
    });
    $.__views.btnSend = A$(Ti.UI.createButton({
        height: "30dp",
        width: "80dp",
        top: "10dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        style: Ti.UI.iPhone.SystemButtonStyle.BORDERED,
        right: "10dp",
        title: "Send",
        id: "btnSend"
    }), "Button", $.__views.__alloyId27);
    $.__views.__alloyId27.add($.__views.btnSend);
    $.__views.btnSend.on("click", function() {
        btnSendCallback.apply(this, Array.prototype.slice.apply(arguments));
    });
    _.extend($, $.__views);
    var Paint = require("ti.paint"), paint = Paint.createPaintView({
        strokeWidth: 6,
        strokeColor: "#2a81df",
        zIndex: 10,
        bottom: 0,
        top: 0
    });
    $.wrapper.add(paint);
    $.win.orientationModes = [ Titanium.UI.LANDSCAPE_RIGHT ];
    $.win.addEventListener("open", function() {
        Titanium.UI.orientation = Titanium.UI.LANDSCAPE_RIGHT;
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;