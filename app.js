// 1. (_completed below_) Define a function, as a function declaration, `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression -  the Math.max method is not allowed.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
        return x;
    } else {
        return y;
    }

    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));
// 2. Define a function as a function expression, `maxOfThree`, that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
const maxOfThree = (...nums) => {
    let maxLength = 3;
    let length = nums.length;
    let max = 0;
    let valid = true;

    length > maxLength ? valid = false : null
    length < maxLength ? valid = false : null
    if (!valid) return `Please enter valid search params (3 numbers)`

    for (let num of nums) {
        if (num > max) max = num
    }

    return max
}

console.log(maxOfThree(20, 88, 9));
// 3. Define a function, as a function declaration, `isCharAVowel` that takes a character as an argument and returns true if it is a vowel, false otherwise.
const isCharAVowel = (str) => {
    const vowel = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
        y: true,
    }
    for (let char of str) {
        if (vowel[char.toLowerCase()]) return true
    }
    return false
}

console.log(isCharAVowel('a'))
// 4. Define a function, as a function expression, `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.
const sumArray = function (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i]
        sum += curr
    }
    return sum
}

console.log(sumArray([3, 11, 18]));
// 5. Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product of those numbers. For example, `multiplyArray([2, 4, 5]);` would return `40`.
function multiplyArray(arr) {
    let product;
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i]
        !product ? product = curr : product *= curr
    }
    return product
}

console.log(multiplyArray([3, 5, -1, -15]));
// 6. Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called.
const numArgs = (...args) => {
    return args.length
}

console.log(numArgs(9, '9', true, {}, [], null, undefined));
// 7. Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters and returns it. For example, `reverseString('rockstar');` would return the string "ratskcor".
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        let curr = str[i]
        reversed += curr
    }
    return reversed;
}

console.log(reverseString('shirt'));
// 8. Define a function, as a function expression, `longestStringInArray` that takes an array of strings as an argument and returns the longest string's length.
const longestStringInArray = (arr) => {
    let max = 0;
    for (let str of arr) {
        str.length > max ? max = str.length : null
    }
    return max;
}

console.log(longestStringInArray(['hello', 'hi', 'hellooooooo', 'bye']));
// 9. Define a function, as a function declaration, `stringsLongerThan` that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, `stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);` would return `["hello", "morning"]`.
function stringsLongerThan(arr, num) {
    const output = [];
    for (let str of arr) {
        str.length > num ? output.push(str) : null
    }
    return output
}

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));
//End of lab
