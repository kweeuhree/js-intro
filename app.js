// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

//check if the first number is larger than the last
const firstLargerThanLast = n1> n4;
console.log(`Is first number larger than the last? ${firstLargerThanLast}`);

// subtract the first number from the second number
let arithmeticChain = n2 - n1;
// Multiply the result by the third number
arithmeticChain *= n3;
//Find the remainder of dividing the result by the fourth number
arithmeticChain %= n4;

console.log(`Result of the arithmetic chain: ${arithmeticChain}`);

const isDivisibleby5 = ((n1%5) + (n2%5) + (n3%5) + (n4%5)) === 0;

console.log(`Are all numbers divisible by 5? ${isDivisibleby5}`);


// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
const result1 = `Do all numbers add up to 50: ${isSum50}`;
console.log(result1);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
const result2 = `Are all numbers odd: ${isTwoOdd}`;
console.log(result2);

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
let result3 = `Is any of the numbers larger than 25: ${isOver25}`;

console.log(result3);

// Modify isOver25

const isNotOver25 = n1 > 25 && n2 > 25 && n3 > 25 && n4 > 25;
let result31 = `Is any of the numbers larger than 25: ${isNotOver25}`;

console.log(result31);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
let result4 = `Are all numbers unique? ${isUnique}`;

console.log(result4);

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


//   Math Problems

const totalBudget = 175;
const totalDistance = 1500;
const averageFuelCost = 3;

const totalGallonsAfforded = totalBudget / averageFuelCost;

console.log(`Total gallons afforded: ${totalGallonsAfforded}`);

// 55 miles per hour
const milesPerGallon55 = totalDistance/30;

console.log(`At 55 m/h you will need ${milesPerGallon55} gallons of fuel.`);

// 60 miles per hour
const milesPerGallon60 = totalDistance/28;

console.log(`At 60 m/h you will need ${milesPerGallon60} gallons of fuel.`);

// 75 miles per hour
const milesPerGallon75 = totalDistance/23;

console.log(`At 75 m/h you will need ${milesPerGallon75} gallons of fuel.`);

console.log('You will be able to achieve your destination if you drive between 55 and 60 miles per hour');
console.log('Have a wonderful trip!');