function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {};
    $.__views.status = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "status"
    }), "Window", null);
    $.addTopLevelView($.__views.status);
    $.__views.__alloyId8 = A$(Ti.UI.iOS.createToolbar({
        id: "__alloyId8"
    }), "Toolbar", $.__views.status);
    $.__views.status.add($.__views.__alloyId8);
    $.__views.overviewButton = A$(Ti.UI.createButton({
        height: "30dp",
        width: "80dp",
        top: "10dp",
        color: "#222",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        style: Ti.UI.iPhone.SystemButtonStyle.BORDERED,
        left: "10dp",
        title: "Overview",
        id: "overviewButton"
    }), "Button", $.__views.__alloyId8);
    $.__views.__alloyId8.add($.__views.overviewButton);
    var __alloyId10 = [];
    $.__views.__alloyId9 = A$(Ti.UI.createTableView({
        id: "__alloyId9"
    }), "TableView", $.__views.status);
    $.__views.status.add($.__views.__alloyId9);
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;