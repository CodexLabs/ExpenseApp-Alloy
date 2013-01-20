function getProjectCodeSuggestionOnload() {
    Ti.API.info("getProjectCodeSuggestion Success " + httpClient.connected + " " + httpClient.statusText + " " + httpClient.responseText);
    if (httpClient.responseText) {
        var response = JSON.parse(httpClient.responseText);
        Ti.App.fireEvent("getProjectCodeSuccess", {
            data: response.data
        });
    } else Ti.App.fireEvent("getProjectCodeSuccess", {
        data: []
    });
}

function getProjectCodeSuggestionError() {
    Ti.API.info("getProjectCodeSuggestion Error " + httpClient.connected + " " + httpClient.statusText + " " + httpClient.responseText);
    Ti.App.fireEvent("getProjectCodeSuggestionError", {
        message: "Failed to connect to getProjectCodeSuggestion service."
    });
}

function saveExpenseOnload() {
    Ti.API.info("Logout Success " + httpClient.connected + " " + httpClient.statusText + " " + httpClient.responseText);
    Ti.App.fireEvent("logoutSuccess");
}

function saveExpenseError() {
    Ti.API.info("Logout Error " + httpClient.connected + " " + httpClient.statusText + " " + httpClient.responseText);
    Ti.App.fireEvent("logoutError");
}

function getExpenseFormPDFOnload() {
    Ti.API.info("GetEmployee Success " + httpClient.connected + " " + httpClient.statusText + " " + httpClient.responseText);
    if (httpClient.responseText) {
        var response = JSON.parse(httpClient.responseText);
        Ti.App.fireEvent("loginSuccess", {
            token: token,
            user: response
        });
        Ti.App.Properties.setString("token", token);
        Ti.App.Properties.setObject("user", response);
    } else Ti.App.fireEvent("loginFailed", {
        message: "User info not found"
    });
}

function getExpenseFormPDFError() {
    Ti.API.info("GetEmployee Error " + httpClient.connected + " " + httpClient.statusText + " " + httpClient.responseText);
    Ti.App.fireEvent("loginFailed", {
        message: "Failed to retrieve user info."
    });
}

var httpClient = Titanium.Network.createHTTPClient(), baseUrl = "http://kulcapexpenseapp.appspot.com/resources/expenseService/", getProjectCodeSuggestionUrl = "getProjectCodeSuggestion", saveExpenseUrl = "saveExpense", getExpenseFormPDFUrl = "getExpenseFormPDF", isArray = function(arr) {
    return arr && arr.constructor && (arr.constructor === Array || /^function Array/.test(arr.constructor.toString())) ? !0 : !1;
};

exports.getProjectCodeSuggestion = function(keyword) {
    params = {
        keyword: keyword
    };
    Ti.API.info("starting getProjectCodeSuggestion request");
    httpClient.onload = getProjectCodeSuggestionOnload;
    httpClient.onerror = getProjectCodeSuggestionError;
    httpClient.open("POST", baseUrl + getProjectCodeSuggestionUrl);
    httpClient.send(params);
};

exports.saveExpense = function(token, data) {
    params = JSON.stringify(data);
    Ti.API.info("starting saveExpense request");
    httpClient.onload = saveExpenseOnload;
    httpClient.onerror = saveExpenseError;
    httpClient.open("POST", baseUrl + saveExpenseUrl);
    httpClient.send(params);
};

exports.getExpenseFormPDF = function(token, expenseFormId) {
    params = {
        token: token,
        expenseFormId: expenseFormId
    };
    Ti.API.info("starting getExpenseFormPDF request.");
    httpClient.setOnload(getExpenseFormPDFOnload);
    httpClient.setOnerror(getExpenseFormPDFError);
    httpClient.open("POST", baseUrl + getExpenseFormPDFUrl);
    httpClient.send(params);
};