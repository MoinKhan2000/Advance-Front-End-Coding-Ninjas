In JavaScript, a **pure function** is a function that, for the same input values, always produces the same output and has no side effects. This means that it doesn’t modify any external state or data, only relies on its input parameters, and doesn’t interact with things like global variables, file systems, or external APIs.

### Characteristics of Pure Functions:
1. **Deterministic**: The same inputs always result in the same outputs.
2. **No Side Effects**: They do not modify any external state or data.

### Example of a Pure Function:

```javascript
// Pure function: adds two numbers and returns the result
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Always returns 5 for these inputs
console.log(add(2, 3)); // Still returns 5 for the same inputs
```

In this example:
- The `add` function is pure because it will always return `5` when called with `2` and `3` as inputs, regardless of any other external factors.
- It has no side effects because it doesn’t modify any variables outside of its scope.

### Example of an Impure Function:

```javascript
let number = 10;

function addToNumber(value) {
    number += value; // Modifies an external variable (side effect)
    return number;
}

console.log(addToNumber(5)); // 15
console.log(addToNumber(5)); // 20 (result changes due to the external variable being modified)
```

In this example:
- `addToNumber` is **not a pure function** because it modifies an external variable (`number`) and produces different results for the same input if called multiple times.
- This side effect (modifying `number`) makes it impure, as it doesn’t rely solely on its inputs.

### Why Pure Functions are Useful:
- **Predictability**: Pure functions are easier to understand and test because they behave consistently.
- **Immutability**: Pure functions encourage immutable data handling, which is a common practice in functional programming and helps avoid unintended data changes.
- **Reusability**: Pure functions can be reused easily across different parts of an application since they don’t depend on or alter any external state. 

In Redux, for instance, reducers are designed to be pure functions to ensure consistent and predictable state updates.