"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Romanizer_1 = require("../src/Romanizer");
var chai = require('chai');
describe("HangulTest", function () {
    var romanizer = new Romanizer_1.default();
    it("simple test for romanization", function () {
        var result = romanizer.romanize("뇽안");
        chai_1.expect(result).to.deep.eq("nyongan");
    });
});
