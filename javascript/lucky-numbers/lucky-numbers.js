// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  var sumArr1 = "",
    sumArr2 = "";

  for (var i = 0; i < 9; i++) {
    if (array1[i] || array1[i] === 0) sumArr1 += array1[i];

    if (array2[i] || array2[i] === 0) sumArr2 += array2[i];
  }

  return Number(sumArr1) + Number(sumArr2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  var strVal = value + "";
  return strVal.split("").reverse().join("") == strVal;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) return "Required field";
  else if (!Number(input)) return "Must be a number besides 0";
  return "";
}
