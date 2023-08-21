const isVowel = (letter) => {
    return "aeiouAEIOU".includes(letter)
}

/**
* @param {string} s
* @return {string}
*/
var reverseVowels = function (s) {
    let array = [...s]
    let vowels = array.filter(isVowel)
    return array.map((c) => {
        if (isVowel(c)
        ) {
            return vowels.pop()
        }
        return c
    }).join("")
};