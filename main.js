"use strict";
exports.__esModule = true;
var GoogleDocs = require("./GoogleDocsAPI/CreateNewGoldSheet");
var warcraftLogs = require("./WarcraftLogsAPI/GetCharacters");
var dateInfo = require("./WarcraftLogsAPI/getDate");
var Discord = require("./Discord/notEnvy");
var args = process.argv.slice(2);
var logDate;
dateInfo.getDate("https://www.warcraftlogs.com/v1/report/fights/" + args[0] + "?api_key=93e3627c72a14d3cb365219e30036eeb").then((function (date) {
    logDate = date;
    warcraftLogs.getCharacters("https://www.warcraftlogs.com/v1/report/fights/" + args[0] + "?api_key=93e3627c72a14d3cb365219e30036eeb").then(function (characters) {
        console.log(characters[1]);
        console.log(logDate);
        GoogleDocs.DocTest(characters, logDate).then(function (result) {
            Discord.newBoost();
        });
    });
}));
