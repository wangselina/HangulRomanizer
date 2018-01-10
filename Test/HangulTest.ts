import {expect} from 'chai';
import Romanizer from "../src/Romanizer";
var chai = require('chai');

describe("HangulTest", function () {
    let romanizer = new Romanizer();

    it("simple test for romanization", function () {

        let result = romanizer.romanize("뇽안");
        expect(result).to.deep.eq("nyongan");

    });
});