exports.definition = {
    config: {
        columns: {
            token: "string",
            firstName: "string",
            lastName: "string",
            email: "string",
            employeeNumber: "int",
            unitId: "int"
        },
        adapter: {
            type: "sql",
            collection_name: "Employee"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            validateAuth: function() {
                return this.get("token") ? !0 : !1;
            },
            fullName: function() {
                return this.get("firstName") + " " + this.get("lastName");
            },
            transform: function() {
                return this.toJSON();
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("Employee", exports.definition, [ function(migration) {
    migration.name = "Employee";
    migration.id = "201211211055666";
    migration.up = function(db) {
        db.createTable({
            columns: {
                token: "string",
                firstName: "string",
                lastName: "string",
                email: "string",
                password: "string",
                unitId: "tinyint",
                employeeNumber: "integer"
            },
            adapter: {
                type: "sql",
                collection_name: "Employee"
            }
        });
    };
    migration.down = function(db) {
        db.dropTable("Employee");
    };
} ]);

collection = Alloy.C("Employee", exports.definition, model);

exports.Model = model;

exports.Collection = collection;