// QUESTION: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests.
// Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// AWNSER:

let x0 ="6"
console.log(" Is x < '6'? I say True.")
console.log(x0== "6")

let x1 = "8"
console.log(" Is x > '8'? I say True.")
console.log(x1>= "8")


let x2 = 'one'
console.log(" Is x < one? I say True.")
console.log(x2 == 'one')


let morning1 = 'nine'
console.log(" Is morning > nine? I say False.")
console.log(morning1!= 'nine')


let morning2 ='nine'
console.log(" Is morning >= nine? I say False.")
console.log(morning2 != 'nine')

let morning3 ='nine'
console.log(" Is morning <= nine? I say False.")
console.log(morning3 != 'nine')



let character = '5';
if (character == character.toUpperCase()) {
alert ('upper case true');
}

let character2 = 'u';
if (character2 == character2.toLowerCase()){
alert ('lower case true');
}

const A = true, B = false;
const C = 4;

// logical AND
console.log(A && A); // true
console.log(A && B);  // false

console.log((C > 2) && (C < 2)); // false


const a = true, b = false, c = 4;


// logical OR
console.log(a || b); // true
console.log(b || b); // false
console.log((c>2) || (c<2)); // true



const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Mango"));



const arr = ['a', 'b', 'c'];

if (!arr.includes('z')) {
console.log('value is not in array');
} else {
console.log('value is in array');
}
