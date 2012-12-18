function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {};
    Alloy.Models.instance("Employee");
    _.extend($, $.__views);
    var user = Alloy.Models.Employee;
    user.fetch();
    if (user.isAuthenticated) {
        var home = Alloy.createController("home").getView();
        home.open();
    } else {
        var login = Alloy.createController("login").getView();
        login.open();
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;