function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    Alloy.Models.instance("Employee");
    $.__views.index = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "index"
    }), "Window", null);
    $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var user = Alloy.createModel("Employee");
    user.fetch();
    Alloy.createController(user.validateAuth() ? "home" : "login").getView().open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;