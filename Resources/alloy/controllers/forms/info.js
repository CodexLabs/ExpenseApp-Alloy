function Controller() {
    function btnNextCallback(e) {
        var overview = Alloy.createController("forms/overview").getView();
        overview.open();
        Ti.API.info($.user.get("firstName"));
    }
    function btnBackCallback(e) {
        var addExpense = Alloy.createController("addExpense").getView();
        addExpense.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {};
    $.__views.info = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "composite",
        id: "info"
    }), "Window", null);
    $.addTopLevelView($.__views.info);
    $.__views.__alloyId14 = A$(Ti.UI.iOS.createToolbar({
        top: 0,
        height: "43dp",
        backgroundColor: "#bbb",
        id: "__alloyId14"
    }), "Toolbar", $.__views.info);
    $.__views.info.add($.__views.__alloyId14);
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
    }), "Button", $.__views.__alloyId14);
    $.__views.__alloyId14.add($.__views.btnBack);
    $.__views.btnBack.on("click", function() {
        btnBackCallback.apply(this, Array.prototype.slice.apply(arguments));
    });
    $.__views.__alloyId15 = A$(Ti.UI.createScrollView({
        bottom: "43dp",
        top: "43dp",
        contentWidth: "auto",
        contentHeight: "auto",
        layout: "vertical",
        showVerticalScrollIndicator: !0,
        showHorizontalScrollIndicator: !1,
        id: "__alloyId15"
    }), "ScrollView", $.__views.info);
    $.__views.info.add($.__views.__alloyId15);
    $.__views.monthPicker = A$(Ti.UI.createTextField({
        height: "40dp",
        width: "250dp",
        top: "10dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Date",
        editable: !1,
        id: "monthPicker"
    }), "TextField", $.__views.__alloyId15);
    $.__views.__alloyId15.add($.__views.monthPicker);
    $.__views.txtFirstName = A$(Ti.UI.createTextField({
        height: "40dp",
        width: "250dp",
        top: "10dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "First Name",
        enabled: !1,
        id: "txtFirstName"
    }), "TextField", $.__views.__alloyId15);
    $.__views.__alloyId15.add($.__views.txtFirstName);
    $.__views.txtLastName = A$(Ti.UI.createTextField({
        height: "40dp",
        width: "250dp",
        top: "10dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Last Name",
        enabled: !1,
        id: "txtLastName"
    }), "TextField", $.__views.__alloyId15);
    $.__views.__alloyId15.add($.__views.txtLastName);
    $.__views.txtEmployeeNumber = A$(Ti.UI.createTextField({
        height: "40dp",
        width: "250dp",
        top: "10dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Employee Number",
        keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
        id: "txtEmployeeNumber"
    }), "TextField", $.__views.__alloyId15);
    $.__views.__alloyId15.add($.__views.txtEmployeeNumber);
    $.__views.unitPicker = A$(Ti.UI.createTextField({
        height: "40dp",
        width: "250dp",
        top: "10dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Unit",
        editable: !1,
        id: "unitPicker"
    }), "TextField", $.__views.__alloyId15);
    $.__views.__alloyId15.add($.__views.unitPicker);
    $.__views.txtEmail = A$(Ti.UI.createTextField({
        height: "40dp",
        width: "250dp",
        top: "10dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Email",
        keyboardType: Ti.UI.KEYBOARD_EMAIL,
        id: "txtEmail"
    }), "TextField", $.__views.__alloyId15);
    $.__views.__alloyId15.add($.__views.txtEmail);
    $.__views.__alloyId16 = A$(Ti.UI.iOS.createToolbar({
        bottom: 0,
        height: "43dp",
        backgroundColor: "#bbb",
        id: "__alloyId16"
    }), "Toolbar", $.__views.info);
    $.__views.info.add($.__views.__alloyId16);
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
    }), "Button", $.__views.__alloyId16);
    $.__views.__alloyId16.add($.__views.btnNext);
    $.__views.btnNext.on("click", function() {
        btnNextCallback.apply(this, Array.prototype.slice.apply(arguments));
    });
    _.extend($, $.__views);
    var user = Alloy.Models.employee;
    $.monthPicker.value = user.get("date");
    $.txtFirstName.value = user.get("firstName");
    $.txtLastName.value = user.get("lastName");
    $.txtEmployeeNumber.value = user.get("employeeNumber");
    $.unitPicker.value = user.get("unitPicker");
    $.txtEmail.value = user.get("email");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;