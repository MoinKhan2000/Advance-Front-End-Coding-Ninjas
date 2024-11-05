function sum(x, y, z) {
  return x + y + z;
}

console.log(sum(10, 20, 30));   // 60

// Using Currying.
function curryingSumX(x) {
  return function curryingSumY(y) {
    return function curryingSumZ(z) {
      return x + y + z;
    }
  }
}

console.log(curryingSumX(10)(20)(30));  // 60

// https://files.codingninjas.in/image28-26575.png 