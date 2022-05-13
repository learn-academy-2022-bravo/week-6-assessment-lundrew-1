// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest














// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


describe('Upperoccup', () => {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  it('takes in an array of objects and returns an array with a sentence about each person with their name capitalized.', () => {
      expect(Upperoccup(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]);
  });
});

// b) Create the function that makes the test pass.


//Pseudo Code: 
// create a function named "Upperoccup"
// create a param named "arr"
// use the map() method
// create a new param named "sentence"
// create a variable named "upper" and make it equal to using the split() method on the  name
// use the map()method on the name 
// use the uppercase() method to uppercase each name but only the first letter
// use the join() method to bring together the substrings
// return the new upper variable with the occupation



const Upperoccup = (arr) => {
  return arr.map(sentence =>{
   let upper = sentence.name.split(" ").map(name =>{
      return name[0].toUpperCase() + name.substring(1)
    }).join(" ")
      return (upper + " is " + sentence.occupation + ".")
  })
}




















// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


describe('remainders', () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  it('takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3', () => {
      expect(remainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ]);
      expect(remainders(hodgepodge2)).toEqual([ 2, 1, -1 ]);
  });
});


// b) Create the function that makes the test pass.

//Pseudo Code: 
// create a function named "remainders"
// create a param named "arr"
// create a variable named "output"
// use forEach() method and typeof to determine whether the  data type is an integer 
// create an if else statement so if it is a number it will output
// map over the array and use modulo to return the remainder of each number 
// return the array 



const remainders = (arr) => {
  let output = [];
  arr.forEach(e => { if (typeof (e) === 'number') { output.push(e) } })
  return output.map(number => number % 3) 
}
 






















// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


describe('sumCubed', () => {
  const cubeAndSum1 = [2, 3, 4]
  const cubeAndSum2 = [0, 5, 10]
  it('takes in an array of numbers and returns the sum of all the numbers cubed.', () => {
      expect(sumCubed(cubeAndSum1)).toEqual(99);
      expect(sumCubed(cubeAndSum2)).toEqual(1125);
  });
});




// b) Create the function that makes the test pass.

// Pseudo Code: 
// create a function named "sumCubed"
// create a param named "arr"
// create a variable that maps the param
// use math.pow to input a base and exponent number 
// use sum() and reduce() to add up the whole Array
// return the new array

const sumCubed = (arr) => {
  let sum = arr.map(function (x) {
    return Math.pow(x, 3) 
  });
  return sum.reduce(function (a, b) {
    return a + b;
  }, 0);
}