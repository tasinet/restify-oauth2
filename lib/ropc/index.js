"use strict";

var makeSetup = require("../common/makeSetup");
var grantToken = require("./grantToken");

var grantTypes = "password";
var reqPropertyName = "user";
var requiredHooks = ["validateClient", "grantUserToken", "authenticateToken"];

module.exports = makeSetup(grantTypes, reqPropertyName, requiredHooks, grantToken);
