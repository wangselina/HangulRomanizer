"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hangul = {
    vowels: [
        "a",
        "ae",
        "ya",
        "yae",
        "eo",
        "e",
        "yeo",
        "ye",
        "o",
        "wa",
        "wae",
        "oe",
        "yo",
        "u",
        "wo",
        "we",
        "wi",
        "yu",
        "eu",
        "ui",
        "i"
    ],
    consonants: {
        initial: [
            "g",
            "kk",
            "n",
            "d",
            "tt",
            "r",
            "m",
            "b",
            "pp",
            "s",
            "ss",
            "",
            "j",
            "jj",
            "ch",
            "k",
            "t",
            "p",
            "h"
        ],
        final: [
            "",
            "k",
            "k",
            "gs",
            "n",
            "nj",
            "nh",
            "t",
            "l",
            "lg",
            "lm",
            "lb",
            "ls",
            "lt",
            "lp",
            "lh",
            "m",
            "p",
            "bs",
            "t",
            "ss",
            "ng",
            "t",
            "t",
            "k",
            "t",
            "p",
            "h" // ㅎ
        ]
    }
};
var hangulUnicodeStartIndex = 44032;
var hangulUnicodeEndIndex = 55203;
var Romanizer = (function () {
    function Romanizer() {
    }
    Romanizer.prototype.isHangul = function (charUnicode) {
        return (charUnicode >= hangulUnicodeStartIndex || charUnicode <= hangulUnicodeEndIndex);
    };
    Romanizer.prototype.romanize = function (koreanText) {
        var romanizedText = "";
        for (var i = 0; i < koreanText.length; i++) {
            var charUnicode = koreanText.charCodeAt(i);
            if (this.isHangul(charUnicode)) {
                charUnicode -= hangulUnicodeStartIndex;
                var tail = charUnicode % 28;
                var vowel = ((charUnicode - tail) % 588) / 28;
                var lead = Math.floor(charUnicode / 588);
                romanizedText += hangul.consonants.initial[lead];
                romanizedText += hangul.vowels[vowel];
                romanizedText += hangul.consonants.final[tail];
            }
            else {
                romanizedText += koreanText[i];
            }
        }
        return romanizedText;
    };
    return Romanizer;
}());
exports.default = Romanizer;
