var httpClient = Titanium.Network.createHTTPClient(), baseUrl = "http://kulcapexpenseapp.appspot.com/resources/userService/", loginUrl = "login", logoutUrl = "logout", getEmployeeUrl = "getEmployee";

exports.definition = {
    config: {
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
            collection_name: "Employees"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            validate: function(attributes) {
                if (attributes.age < 0 && attributes.name != "Dr Manhatten") return "You can't be negative years old";
            },
            login: function(email, password) {
                var model = this;
                if (email && password) {
                    params = {
                        email: email,
                        password: password
                    };
                    httpClient.onload = function() {
                        if (httpClient.responseText) {
                            model.set("token", httpClient.responseText);
                            model.isAuthenticated = !0;
                            model.save();
                            model.trigger("loginSucces");
                        } else model.trigger("loginFailed", {
                            message: "email/password combination wrong",
                            index: 1
                        });
                    };
                    httpClient.onerror = function() {
                        model.trigger("loginFailed", {
                            message: "Could not execute request",
                            index: 2
                        });
                    };
                    httpClient.open("POST", baseUrl + loginUrl);
                    httpClient.send(params);
                } else model.trigger("loginFailed", {
                    message: "Please provide email and password",
                    index: 3
                });
            },
            fetchInfo: function() {
                var model = this;
                if (model.isAuthenticated) {
                    params = {
                        token: model.get("token")
                    };
                    httpClient.onload = function() {
                        if (httpClient.responseText) {
                            var response = JSON.parse(httpClient.responseText);
                            model.set({
                                firstName: response.firstName,
                                lastName: response.lastName,
                                email: response.email,
                                password: response.password,
                                employeeNumber: response.employeeNumber,
                                unitId: response.unitId
                            });
                            model.save();
                            model.trigger("fetchInfoSucces");
                        } else model.trigger("fetchInfoFailed", {
                            message: "No response when getting user info."
                        });
                    };
                    httpClient.onerror = function() {
                        model.trigger("fetchInfoFailed", {
                            message: "Error when fetching user info."
                        });
                    };
                    httpClient.open("POST", baseUrl + getEmployeeUrl);
                    httpClient.send(params);
                } else model.trigger("fetchInfoFailed", {
                    message: "User is not authenticated."
                });
            },
            logout: function() {
                var model = this;
                if (model.isAuthenticated) {
                    params = {
                        token: model.token
                    };
                    httpClient.onload = function() {
                        model.isAuthenticated = !1;
                        model.save();
                        model.trigger("logoutSucces");
                    };
                    httpClient.onerror = function() {
                        model.trigger("logoutFailed", {
                            message: "Could not connect to logout service."
                        });
                    };
                    httpClient.open("POST", baseUrl + logoutUrl);
                    httpClient.send(params);
                } else model.trigger("logoutFailed", {
                    message: "Can't log out. User is not authenticated!"
                });
            },
            isAuthenticated: !1,
            fullName: function() {
                this.get("firstName") + " " + this.get("lastName");
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

model = Alloy.M("Employee", exports.definition, []);

collection = Alloy.C("Employee", exports.definition, model);

exports.Model = model;

exports.Collection = collection;