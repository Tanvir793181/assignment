// 1. Calculate the difference between two numbers
function calculateDifference(a, b) {
    return a - b;
}

// 2. Check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}

// 3. Find the smallest number in an array
function findMin(numbers) {
    return Math.min(...numbers);
}

// 4. Filter even numbers from an array
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

// 5. Sort an array in descending order
function sortArrayDescending(numbers) {
    return [...numbers].sort((a, b) => b - a);
}

// 6. Lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    if (!str) return str; // Handle empty string or null
    return str[0].toLowerCase() + str.slice(1);
}

// 7. Find the average of an array of numbers
function findAverage(numbers) {
    if (numbers.length === 0) return 0; // Handle empty array
    const total = numbers.reduce((sum, num) => sum + num, 0);
    return total / numbers.length;
}

// 8. Check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Test

console.log(calculateDifference(10, 8));
console.log(isOdd(4));
console.log(findMin([10, 5, -5, 12]));
console.log(filterEvenNumbers([1, 2, 3, 7, 5])); 
console.log(sortArrayDescending([5, 2, 9, 1])); 
console.log(lowercaseFirstLetter("Hello"));
console.log(findAverage([2, 4, 6, 8]));
console.log(isLeapYear(2028));