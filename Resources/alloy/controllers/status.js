function Controller() {
    function btnBackCallback(e) {
        var home = Alloy.createController("home").getView();
        home.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.status = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "status"
    }), "Window", null);
    $.addTopLevelView($.__views.status);
    $.__views.__alloyId7 = A$(Ti.UI.iOS.createToolbar({
        id: "__alloyId7"
    }), "Toolbar", $.__views.status);
    $.__views.status.add($.__views.__alloyId7);
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
    }), "Button", $.__views.__alloyId7);
    $.__views.__alloyId7.add($.__views.btnBack);
    btnBackCallback ? $.__views.btnBack.on("click", btnBackCallback) : __defers["$.__views.btnBack!click!btnBackCallback"] = !0;
    $.__views.__alloyId8 = A$(Ti.UI.createTableView({
        id: "__alloyId8"
    }), "TableView", $.__views.status);
    $.__views.status.add($.__views.__alloyId8);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.btnBack!click!btnBackCallback"] && $.__views.btnBack.on("click", btnBackCallback);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;