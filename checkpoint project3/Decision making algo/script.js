function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

console.log(isLeapYear(2024)); // Output: 2024 is a leap year.
console.log(isLeapYear(1900)); // Output: 1900 is not a leap year.
console.log(isLeapYear(2000)); // Output: 2000 is a leap year.


function ticketPrice(age) {
    if (age <= 12) {
        return `Ticket Price: $10 (Child)`;
    } else if (age >= 13 && age <= 17) {
        return `Ticket Price: $15 (Teenager)`;
    } else if (age >= 18) {
        return `Ticket Price: $20 (Adult)`;
    } else {
        return `Invalid age.`;
    }
}

console.log(ticketPrice(10));  // Output: Ticket Price: $10 (Child)
console.log(ticketPrice(16));  // Output: Ticket Price: $15 (Teenager)
console.log(ticketPrice(25));  // Output: Ticket Price: $20 (Adult)


function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(6)); // Output: 8
console.log(fibonacci(10)); // Output: 55



function isPalindrome(str) {
    // Remove spaces, punctuation, and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    if (str.length <= 1) {
        return true;
    }
    
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    
    return isPalindrome(str.slice(1, str.length - 1));
}

console.log(isPalindrome("A man a plan a canal Panama")); // Output: true
console.log(isPalindrome("hello")); // Output: falseg



