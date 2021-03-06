"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var google_spreadsheet_1 = require("google-spreadsheet");
var credentials = require("../Util/client_secret.json");
function DocTest(characterList, date) {
    return __awaiter(this, void 0, void 0, function () {
        var doc, newSheet, i, cellD2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    doc = new google_spreadsheet_1.GoogleSpreadsheet('1SrOnqY4_5DB3sDLsP2VYaQ1Ff32ZRd4ieXt4P2Iy-5A');
                    return [4 /*yield*/, doc.useServiceAccountAuth({
                            client_email: credentials.client_email,
                            private_key: credentials.private_key
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, doc.loadInfo()];
                case 2:
                    _a.sent(); // loads document properties and worksheets
                    return [4 /*yield*/, doc.addSheet({ title: "Gold " + date, headerValues: ['CharacterName', 'Payed', 'GoldAmount', 'PlayerCount'] })];
                case 3:
                    newSheet = _a.sent();
                    i = 0;
                    _a.label = 4;
                case 4:
                    if (!(i < characterList.length)) return [3 /*break*/, 7];
                    console.log(characterList[i]);
                    return [4 /*yield*/, newSheet.addRow({ CharacterName: characterList[i], Payed: "No" })];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    i++;
                    return [3 /*break*/, 4];
                case 7: return [4 /*yield*/, newSheet.addRow({ CharacterName: "Gold per Person: ", Payed: "=C2/D2" })];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, newSheet.loadCells('A1:E10')];
                case 9:
                    _a.sent();
                    cellD2 = newSheet.getCellByA1('D2');
                    cellD2.value = characterList.length;
                    return [4 /*yield*/, newSheet.saveUpdatedCells()];
                case 10:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.DocTest = DocTest;
