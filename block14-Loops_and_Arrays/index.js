// 1: create an array with the numbers given
// 2: create a for loop to iterate through each number
// 3: loop should stop when it reaches an odd number and should print it to the console
// 4: it should repeat these steps until it reaches the end of the array

// [2, 4, 6, 8, 11, 20, 15, 22]
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// [70, 42, 55, 81, 21, 91, 34]
// [2, 4, 6, 8, 10, 11, 12] 

// ONLY ODDS

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odd_numbers = [];

for (let i = 0; i < numbers.length; i++) {
//    console.log(numbers[i]);
   if (numbers[i] % 2 !== 0) {
    odd_numbers.push(numbers[i]);
   }
}

console.log(odd_numbers);

// VOWEL VS CONSONANT

// 1: create a variable for given string
// 2: create 1  counter variable for consonants and 1 counter variable for vowels
// 3: create a for loop to iterate through string for consonants and vowels
// 4: at the end of loop it should print how many consonants and vowels are in a given string

const string = "onomonopia";
let vowel_counter = 0;
let consonants_counter = 0;

for (let i = 0; i < string.length; i++) {
    if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
        vowel_counter++;
    } else {
        consonants_counter++;
    }
}
console.log(`${string} has ${consonants_counter} consonants and ${vowel_counter} vowels.`);

// REVERSE ARRAY

// create a variable for given array
// create a variable for empty array
// create a for loop that shifts each first number to the end of the array

const num_array = [1, 2, 3];
const reverse_array = [];

for (let i = num_array.length - 1; i >= 0; i--) {
    
    reverse_array.push(num_array[i]);
    
}

console.log(reverse_array);

// FIZZBUZZ

// 1: create a for loop that prints the numbers 1 to 100
// 2: change the code to print fizz for multiples of 3
// 3: print buzz for multiples of 5
// print fizzbuzz for numbers that are multiples of both 3 and 5

for (let i = 0; i <=100; i++) {
    if ( i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz")
    }
    else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}