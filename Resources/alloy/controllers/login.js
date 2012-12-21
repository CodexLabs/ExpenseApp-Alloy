function Controller() {
    function btnLoginCallback(e) {
        user.login($.email.value, $.password.value);
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
        value: "test123",
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
    var user = Alloy.Models.Employee;
    user.on("loginSucces", function(e) {
        Ti.API.info("Login succeeded. Now fetching user data...");
        user.set(e);
        user.save();
        Ti.API.info(user.transform());
        user.fetchInfo();
    });
    user.on("loginFailed", function(e) {
        Ti.API.error("Failed to login user.");
        alert("login failed: " + e.message + e.index);
    });
    user.on("fetchInfoSucces", function(e) {
        Ti.API.info("Fetch user info succeeded.");
        user.set(e);
        user.save();
        Ti.API.info(this.transform());
        var home = Alloy.createController("home").getView();
        home.open();
    });
    user.on("fetchInfoFailed", function(e) {
        Ti.API.error("Failed to fetch user info.");
        alert("login failed: " + e.message);
    });
    Ti.App.addEventListener("loggedin", function() {
        Ti.API.info("LOOOOOOOOOOOL");
    });
    __defers["$.__views.btnLogin!click!btnLoginCallback"] && $.__views.btnLogin.on("click", btnLoginCallback);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;