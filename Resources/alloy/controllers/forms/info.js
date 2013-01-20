function Controller() {
    function btnNextCallback(e) {
        Alloy.createController("forms/overview").getView().open();
        $.info.close();
    }
    function btnBackCallback(e) {
        Alloy.createController("addExpense").getView().open();
        $.info.close();
    }
    function saveUser() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.info = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "composite",
        id: "info"
    }), "Window", null);
    $.addTopLevelView($.__views.info);
    $.__views.__alloyId20 = A$(Ti.UI.iOS.createToolbar({
        top: 0,
        height: "43dp",
        backgroundColor: "#bbb",
        id: "__alloyId20"
    }), "Toolbar", $.__views.info);
    $.__views.info.add($.__views.__alloyId20);
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
    }), "Button", $.__views.__alloyId20);
    $.__views.__alloyId20.add($.__views.btnBack);
    btnBackCallback ? $.__views.btnBack.on("click", btnBackCallback) : __defers["$.__views.btnBack!click!btnBackCallback"] = !0;
    $.__views.__alloyId21 = A$(Ti.UI.createScrollView({
        bottom: "43dp",
        top: "43dp",
        contentWidth: "auto",
        contentHeight: "auto",
        layout: "vertical",
        showVerticalScrollIndicator: !0,
        showHorizontalScrollIndicator: !1,
        id: "__alloyId21"
    }), "ScrollView", $.__views.info);
    $.__views.info.add($.__views.__alloyId21);
    $.__views.monthPicker = A$(Ti.UI.createTextField({
        height: "40dp",
        width: "250dp",
        top: "10dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Date",
        editable: !1,
        id: "monthPicker"
    }), "TextField", $.__views.__alloyId21);
    $.__views.__alloyId21.add($.__views.monthPicker);
    $.__views.txtFirstName = A$(Ti.UI.createTextField({
        height: "40dp",
        width: "250dp",
        top: "10dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "First Name",
        enabled: !1,
        id: "txtFirstName"
    }), "TextField", $.__views.__alloyId21);
    $.__views.__alloyId21.add($.__views.txtFirstName);
    $.__views.txtLastName = A$(Ti.UI.createTextField({
        height: "40dp",
        width: "250dp",
        top: "10dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Last Name",
        enabled: !1,
        id: "txtLastName"
    }), "TextField", $.__views.__alloyId21);
    $.__views.__alloyId21.add($.__views.txtLastName);
    $.__views.txtEmployeeNumber = A$(Ti.UI.createTextField({
        height: "40dp",
        width: "250dp",
        top: "10dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Employee Number",
        keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
        id: "txtEmployeeNumber"
    }), "TextField", $.__views.__alloyId21);
    $.__views.__alloyId21.add($.__views.txtEmployeeNumber);
    $.__views.unitPicker = A$(Ti.UI.createTextField({
        height: "40dp",
        width: "250dp",
        top: "10dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Unit",
        editable: !1,
        id: "unitPicker"
    }), "TextField", $.__views.__alloyId21);
    $.__views.__alloyId21.add($.__views.unitPicker);
    $.__views.txtEmail = A$(Ti.UI.createTextField({
        height: "40dp",
        width: "250dp",
        top: "10dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Email",
        keyboardType: Ti.UI.KEYBOARD_EMAIL,
        id: "txtEmail"
    }), "TextField", $.__views.__alloyId21);
    $.__views.__alloyId21.add($.__views.txtEmail);
    $.__views.__alloyId22 = A$(Ti.UI.iOS.createToolbar({
        bottom: 0,
        height: "43dp",
        backgroundColor: "#bbb",
        id: "__alloyId22"
    }), "Toolbar", $.__views.info);
    $.__views.info.add($.__views.__alloyId22);
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
    }), "Button", $.__views.__alloyId22);
    $.__views.__alloyId22.add($.__views.btnNext);
    btnNextCallback ? $.__views.btnNext.on("click", btnNextCallback) : __defers["$.__views.btnNext!click!btnNextCallback"] = !0;
    var __alloyId23 = function() {
        $.txtFirstName.value = _.isFunction(Alloy.Models.Employee.transform) ? Alloy.Models.Employee.transform().firstName : Alloy.Models.Employee.get("firstName");
        $.txtLastName.value = _.isFunction(Alloy.Models.Employee.transform) ? Alloy.Models.Employee.transform().lastName : Alloy.Models.Employee.get("lastName");
        $.txtEmployeeNumber.value = _.isFunction(Alloy.Models.Employee.transform) ? Alloy.Models.Employee.transform().employeeNumber : Alloy.Models.Employee.get("employeeNumber");
        $.unitPicker.value = _.isFunction(Alloy.Models.Employee.transform) ? Alloy.Models.Employee.transform().unitId : Alloy.Models.Employee.get("unitId");
        $.txtEmail.value = _.isFunction(Alloy.Models.Employee.transform) ? Alloy.Models.Employee.transform().email : Alloy.Models.Employee.get("email");
    };
    Alloy.Models.Employee.on("fetch change destroy", __alloyId23);
    exports.destroy = function() {
        Alloy.Models.Employee.off("fetch change destroy", __alloyId23);
    };
    _.extend($, $.__views);
    $.info.on("close", function() {
        $.destroy();
    });
    Alloy.Models.Employee.fetch();
    __defers["$.__views.btnBack!click!btnBackCallback"] && $.__views.btnBack.on("click", btnBackCallback);
    __defers["$.__views.btnNext!click!btnNextCallback"] && $.__views.btnNext.on("click", btnNextCallback);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;