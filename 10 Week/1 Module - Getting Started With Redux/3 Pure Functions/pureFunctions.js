//? Impure Function
let number = 10;

function addToNumber(value) {
  number += value; // Modifies an external variable (side effect)
  return number;
}

console.log(addToNumber(5)); // 15
console.log(addToNumber(5)); // 20 (result changes due to the external variable being modified)

//? Pure Function
// Pure function: adds two numbers and returns the result
/**
 * A pure function that adds two numbers together.
 *
 * @function add
 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @returns {number} The sum of the two input numbers.
 *
 * @example
 * // Example usage:
 * console.log(add(2, 3)); // Outputs: 5
 * console.log(add(2, 3)); // Outputs: 5 (always returns the same result for the same inputs)
 */
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Always returns 5 for these inputs
console.log(add(2, 3)); // Still returns 5 for the same inputs