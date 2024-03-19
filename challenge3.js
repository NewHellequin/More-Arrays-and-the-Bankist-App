'use strict';

// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!

// Test data:

// §	Data 1: [5, 2, 4, 1, 15, 8, 3]
// §	Data 2: [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge2 = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const data1 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
const data2 = calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);

console.log(data1, data2);
