interface HangulConfig {
    vowels: string[];
    consonants: {
        initial: string[];
        final: string[];
    }
}

const hangul: HangulConfig = {
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
            "k",  // ㄱ
            "k",  // ㄲ
            "gs", // ㄳ
            "n",  // ㄴ
            "nj", // ㄵ
            "nh", // ㄶ
            "t",  // ㄷ
            "l",  // ㄹ
            "lg", // ㄺ
            "lm", // ㄻ
            "lb", // ㄼ
            "ls", // ㄽ
            "lt", // ㄾ
            "lp", // ㄿ
            "lh", // ㅀ
            "m",  // ㅁ
            "p",  // ㅂ
            "bs", // ㅄ
            "t",  // ㅅ
            "ss", // ㅆ
            "ng", // ㅇ
            "t",  // ㅈ
            "t",  // ㅊ
            "k",  // ㅋ
            "t",  // ㅌ
            "p",  // ㅍ
            "h"   // ㅎ
        ]
    }
};

const hangulUnicodeStartIndex = 44032;
const hangulUnicodeEndIndex = 55203;

export default class Romanizer {

    isHangul(charUnicode: number): boolean {
        return (charUnicode >= hangulUnicodeStartIndex || charUnicode <= hangulUnicodeEndIndex)
    }

    romanize(koreanText: string): string {
        let romanizedText = "";
        for (let i = 0; i < koreanText.length; i++) {
            let charUnicode = koreanText.charCodeAt(i);
            if (this.isHangul(charUnicode)) {
                charUnicode -= hangulUnicodeStartIndex;
                let tail = charUnicode%28;
                let vowel = ((charUnicode - tail)%588)/28;
                let lead = Math.floor(charUnicode/588);
                romanizedText += hangul.consonants.initial[lead];
                romanizedText += hangul.vowels[vowel];
                romanizedText += hangul.consonants.final[tail];
            } else {
                romanizedText += koreanText[i];
            }
        }
        return romanizedText;
    }
}