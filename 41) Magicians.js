// QUESTION: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.

// AWNSER:

const magician = ["zee", "tyler", "halloween" , "john", "joe", "jim"];
const show_magicians = (arr) => {
arr.map((idx) => console.log(idx));
};
show_magicians(magician);