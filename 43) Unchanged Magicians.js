// QUESTION: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// ANWSER:

const magician = ["john", "joe", "jim"];
const show_magicians = (arr) => {
arr.map((idx) => console.log(idx));
};
console.log("Original Array");
show_magicians(magician);