"use strict";
exports.__esModule = true;
var alts = require("./alts.json");
var fs = require('fs');
var args = process.argv.slice(2);
console.log("args: " + args);
switch (args[0]) {
    case 'add':
        console.log("Adding player");
        if (alts.characters.hasOwnProperty(args[1])) {
            var jsonObj = {
                name: args[2]
            };
            console.log("Player exists: adding alt");
            alts.characters[args[1]].push(jsonObj);
            console.log(alts.characters[args[1]]);
            updateAlts(alts);
        }
        else {
            console.log("Player doesnt exist yet: Adding player");
            var jsonObj = [{
                    name: args[2]
                }];
            alts.characters[args[1]] = jsonObj;
            console.log(args[1]);
            updateAlts(alts);
        }
        break;
    case 'remove':
        if (args[2]) {
            console.log("Removing alt character");
            for (var characterName in alts.characters) {
                if (characterName == args[1]) {
                    console.log(alts.characters[args[1]].length);
                    for (var i = 0; i < alts.characters[args[1]].length; i++) {
                        if (args[2] == alts.characters[args[1]][i].name) {
                            console.log(alts.characters[args[1][i]]);
                            alts.characters[args[1]].splice(i, 1);
                            updateAlts(alts);
                        }
                    }
                }
            }
        }
        else {
            console.log("Removing whole entry");
            delete alts.characters[args[1]];
            updateAlts(alts);
        }
        break;
    default: console.log("Unkown command");
}
function updateAlts(alts) {
    fs.writeFileSync("alts.json", JSON.stringify(alts), function (err, result) {
        if (err) {
            console.log(err);
        }
    });
}
exports.updateAlts = updateAlts;
