/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.split(" ").reduceRight((p, c) => {
        if (p === "") {
            return `${p}${c}`
        }

        if (c === "") {
            return p
        }

        return `${p} ${c}`
    }, "")
};

