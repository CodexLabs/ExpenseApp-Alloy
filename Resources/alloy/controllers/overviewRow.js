function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {};
    $.__views.overviewRow = A$(Ti.UI.createTableViewRow({
        className: "expense",
        selectedBackgroundColor: "white",
        height: 110,
        id: "overviewRow"
    }), "TableViewRow", null);
    $.addTopLevelView($.__views.overviewRow);
    $.__views.imgEvidence = A$(Ti.UI.createImageView({
        left: 10,
        top: 5,
        width: 50,
        height: 100,
        borderRadius: "5dp",
        id: "imgEvidence",
        image: typeof $model.__transform.evidence != "undefined" ? $model.__transform.evidence : $model.get("evidence")
    }), "ImageView", $.__views.overviewRow);
    $.__views.overviewRow.add($.__views.imgEvidence);
    $.__views.lblProjectCode = A$(Ti.UI.createLabel({
        color: "#576996",
        font: {
            fontFamily: "Arial",
            fontSize: 20,
            fontWeight: "bold"
        },
        left: 70,
        top: 6,
        width: 200,
        height: 30,
        id: "lblProjectCode",
        text: typeof $model.__transform.projectCode != "undefined" ? $model.__transform.projectCode : $model.get("projectCode")
    }), "Label", $.__views.overviewRow);
    $.__views.overviewRow.add($.__views.lblProjectCode);
    $.__views.lblAmount = A$(Ti.UI.createLabel({
        color: "#222",
        font: {
            fontFamily: "Arial",
            fontSize: 16,
            fontWeight: "normal"
        },
        left: 70,
        top: 44,
        width: 360,
        id: "lblAmount",
        text: typeof $model.__transform["amount} {currency"] != "undefined" ? $model.__transform["amount} {currency"] : $model.get("amount} {currency")
    }), "Label", $.__views.overviewRow);
    $.__views.overviewRow.add($.__views.lblAmount);
    $.__views.imgCalendar = A$(Ti.UI.createImageView({
        image: "/images/glyphish/83-calendar.png",
        left: 70,
        bottom: 6,
        width: 24,
        height: 24,
        id: "imgCalendar"
    }), "ImageView", $.__views.overviewRow);
    $.__views.overviewRow.add($.__views.imgCalendar);
    $.__views.lblDate = A$(Ti.UI.createLabel({
        color: "#999",
        font: {
            fontFamily: "Arial",
            fontSize: 14,
            fontWeight: "normal"
        },
        left: 100,
        bottom: 10,
        width: 200,
        height: 20,
        id: "lblDate",
        text: "on {date}"
    }), "Label", $.__views.overviewRow);
    $.__views.overviewRow.add($.__views.lblDate);
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;