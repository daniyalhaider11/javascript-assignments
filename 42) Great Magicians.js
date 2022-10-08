// QUESTION: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.

// ANWSER:

const magician = ["john", "joe", "wick"];
const show_magicians = (arr) => {
arr.map((idx) => console.log(idx));
};

show_magicians(magician);
const make_great = (arr) => {
    let magician1 = [];
    for (let i = 0; i < arr.length; i++) {
    magician1.push("The Great " + arr[i]);
    }
    show_magicians(magician1);
};

make_great(magician);