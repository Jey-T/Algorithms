/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {

  const array1 = Array.from(word1);
  const array2 = Array.from(word2);

  let result = '';

  for (let index = 0;  index < word1.length + word2.length; index++) {
    if (index % 2 === 0 && array1.length > 0 || array2.length === 0) {
      result += array1.shift();
    } else {
      result += array2.shift();
    }
  }

  return result;
};