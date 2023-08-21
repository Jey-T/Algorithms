/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const max = Math.max(...candies)
    return candies.map(e => {
        return e + extraCandies >= max
    })
};