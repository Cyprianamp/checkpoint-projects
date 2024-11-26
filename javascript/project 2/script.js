// 1. Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}

// 2. Count Characters
function countCharacters(str) {
    return str.length;
}

// 3. Capitalize Words
function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}



// 1. Find Maximum and Minimum
function findMaximum(arr) {
    return Math.max(...arr);
}

function findMinimum(arr) {
    return Math.min(...arr);
}

// 2. Sum of Array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// 3. Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}


// 1. Factorial
function factorial(n) {
    if (n < 0) return "Invalid input"; // Factorial is undefined for negative numbers
    return n === 0 ? 1 : n * factorial(n - 1);
}

// 2. Prime Number Check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 3. Fibonacci Sequence
function generateFibonacci(n) {
    if (n <= 0) return [];
    const fib = [0, 1];
    while (fib.length < n) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib.slice(0, n);
}


console.log(reverseString("hello")); // "olleh"
console.log(countCharacters("hello world")); // 11
console.log(capitalizeWords("hello world")); // "Hello World"

console.log(findMaximum([1, 2, 3, 4, 5])); // 5
console.log(findMinimum([1, 2, 3, 4, 5])); // 1
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(filterArray([1, 2, 3, 4, 5], num => num > 3)); // [4, 5]

console.log(factorial(5)); // 120
console.log(isPrime(7)); // true
console.log(generateFibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
