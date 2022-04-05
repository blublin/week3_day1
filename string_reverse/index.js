/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
function reverseString(str) {
    // 0.107 
    // make empty str
    newStr = "";
    // reverse iterate  string
    for (let i  = str.length-1; i >= 0;i--)  {
        newStr += str[i];
    }
    return newStr;
}
function reverseString2(str) {
    // split string into array of individual chars
    // reverse the array
    // join all the elements of the array into a string
    return str.split("").reverse().join("");
}

console.log(reverseString2(str1))
console.log(reverseString2(str2))
console.log(reverseString2(str3))
console.log(reverseString2(str4))




// let a = "oh", b = "yeah";
// console.log(a, b)
// b = [a, a = b][0];
// console.log(a, b)
