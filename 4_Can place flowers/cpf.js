/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    if (n === 0) {
        return true
    }
    if (flowerbed.length === 1) {
        if (flowerbed[0] === 0 && n === 1) {
            return true
        }
        return false
    }

    let copy = flowerbed
    let replacedSuccessfuly = 0

    for (let i = 0; i < flowerbed.length; i++) {

        if (i === 0 && copy[i] === 0 && copy[i + 1] === 0) {
            copy[i] = 1
            replacedSuccessfuly++
        }

        if (i === flowerbed.length - 1 && copy[i] === 0 && copy[i - 1] === 0) {
            copy[i] = 1
            replacedSuccessfuly++
        }

        if (copy[i - 1] === 0 && copy[i] === 0 && copy[i + 1] === 0) {
            copy[i] = 1
            replacedSuccessfuly++
        }

        if (replacedSuccessfuly === n) {
            return true
        }
    }
    return false

};

