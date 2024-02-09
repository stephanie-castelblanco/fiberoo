function fib() {
  const fibonacci = [0, 1]; // Initialize the array with the first two Fibonacci numbers

  for (let i = 2; i < 50; i++) {
    // Calculate the next Fibonacci number by adding the last two numbers in the array
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }

  return fibonacci;
}

// Test the function
console.log(fib());

const numsToStrings = nums => _.map(nums, num => `${num}`);

// Test the function with fib() array
console.log(numsToStrings(fib()));

const numEvenNums = nums => _.filter(nums, num => num % 2 === 0).length;

// Test the function with fib() array
console.log(numEvenNums(fib())); // Should print 17
