console.clear();

const animalStrings = [
  "cat",
  "dog",
  "elephant",
  "rabbit",
  "lion",
  "tiger",
  "horse",
  "giraffe",
  "zebra",
  "penguin",
  "polar bear",
  "panda",
  "koala",
  "kangoroo",
  "monkey",
  "sloth",
  "hippo",
  "rhino",
];

const hippoExists = animalStrings.includes("hippo");
console.log("hippo exists: ", hippoExists);

// Hint: You can pass the starting index as second parameter.
const catStartingFromIndexFiveExists = animalStrings.includes("cat", 5);
console.log("cat after index 5 exists: ", catStartingFromIndexFiveExists);

// Hint: Besides the array method, check out the string method `startsWith()`.
const firstAnimalStartingWithLetterP = animalStrings.find((animal) =>
  animal.startsWith("p")
);
console.log("frist animal with p: ", firstAnimalStartingWithLetterP);

const indexOfGiraffe = animalStrings.findIndex((animal) =>
  animal.match("giraffe")
);
// alternative:
// const indexOfGiraffe = animalStrings.indexOf("giraffe");

console.log("index of giraffe: ", indexOfGiraffe);

// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// -> Use animals.slice().sort(...) to make a copy.

const animalsSortedAlphabetically = animalStrings.slice().sort((a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
});
console.log(
  "sorted alphabetically: ",
  animalsSortedAlphabetically,
  "\noriginal array: ",
  animalStrings
);

// Hint: Guess what? There is a string method called `endsWith()`.

const anyAnimalEndsWithLetterZ = animalStrings.filter((animal) =>
  animal.endsWith("z")
);
console.log("array of animals that end with z: ", anyAnimalEndsWithLetterZ);

//Option 1:
const everyAnimalHasMoreThanTwoLetters = animalStrings.every(
  (animal) => animal.length > 2
);

console.log(
  "every animal has more then two letters: ",
  everyAnimalHasMoreThanTwoLetters
);
// Hint: There are several ways to go here. Let's focus on two options:
// Option 1: Concatenate all characters with `reduce()` and check for the `length` property of the result.
// Option 2: Use `map()` to create an array with the length values of all strings,
// 				then sum them up with `reduce()` (keyword: method chaining)

const sumOfAllAnimalCharacters = animalStrings.reduce((a, b) => {
  return a + b;
}).length;
console.log("sum of all animal characters: ", sumOfAllAnimalCharacters);

export {
  hippoExists,
  catStartingFromIndexFiveExists,
  firstAnimalStartingWithLetterP,
  indexOfGiraffe,
  animalsSortedAlphabetically,
  anyAnimalEndsWithLetterZ,
  everyAnimalHasMoreThanTwoLetters,
  sumOfAllAnimalCharacters,
};
