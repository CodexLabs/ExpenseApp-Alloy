function Controller() {
    function btnLoginCallback(e) {
        if ($.email.value && $.password.value) {
            var svc = require("/api/UserService");
            svc.login($.email.value, $.password.value);
        } else alert("Email/Password are required");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.login = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "login"
    }), "Window", null);
    $.addTopLevelView($.__views.login);
    $.__views.instructions = A$(Ti.UI.createLabel({
        height: "40dp",
        width: "250dp",
        top: "10dp",
        text: "Please log in",
        id: "instructions"
    }), "Label", $.__views.login);
    $.__views.login.add($.__views.instructions);
    $.__views.email = A$(Ti.UI.createTextField({
        height: "40dp",
        width: "250dp",
        top: "10dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        value: "bert.outtier@student.kuleuven.be",
        hintText: "Email",
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        keyboardType: Ti.UI.KEYBOARD_EMAIL,
        id: "email"
    }), "TextField", $.__views.login);
    $.__views.login.add($.__views.email);
    $.__views.password = A$(Ti.UI.createTextField({
        height: "40dp",
        width: "250dp",
        top: "10dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        value: "",
        hintText: "Password",
        passwordMask: !0,
        id: "password"
    }), "TextField", $.__views.login);
    $.__views.login.add($.__views.password);
    $.__views.btnLogin = A$(Ti.UI.createButton({
        height: "40dp",
        width: "250dp",
        top: "10dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        title: "Log in",
        id: "btnLogin"
    }), "Button", $.__views.login);
    $.__views.login.add($.__views.btnLogin);
    btnLoginCallback ? $.__views.btnLogin.on("click", btnLoginCallback) : __defers["$.__views.btnLogin!click!btnLoginCallback"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.App.addEventListener("loginSuccess", function(data) {
        var user = Alloy.Models.Employee;
        Ti.API.info("Succesful login.");
        user.save(data);
        $.login.close();
        Alloy.createController("home").getView().open();
    });
    Ti.App.addEventListener("loginFailed", function(data) {
        Ti.API.error(data.message);
        alert("Login failed: " + data.message);
    });
    Ti.App.addEventListener("loginError", function() {
        alert("Error when trying to login");
    });
    __defers["$.__views.btnLogin!click!btnLoginCallback"] && $.__views.btnLogin.on("click", btnLoginCallback);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;