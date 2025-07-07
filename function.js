// Function to check if a number is even or odd
function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
// Function to calculate the factorial of a number
function factorial(number) {
    if (number === 0) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}
// Function to take a name and return a greeting message
function greet(name) {
    return "Hello, " + name + "!";
}
// Test the functions
console.log(isEvenOrOdd(10));  // Expected output: "Even"
console.log(isEvenOrOdd(7));   // Expected output: "Odd"
console.log(factorial(5));     // Expected output: 120
console.log(greet("Talha"));  // Expected output: "Hello, Talha!"