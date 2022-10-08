// QUESTION: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. 
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.

// AWNSER:

let guests = ["Hammad", "Muneeb", "Tehreem", "Ghazal"];
guests.push("Hammad");
guests.push("Muneeb");
guests.push("Tehreem");
guests.push("Ghazal");
guests.map((name) =>
console.log(
    `Dear ${name}, I would to inform you that we have a bigger dinner table now.`
)
);

guests.unshift("Ahmed");
guests.push("Shanzay");
guests.splice(3, 0, "Maria");

guests.map((name) =>
console.log(`Dear ${name}, I would love to have you on dinner with me.`)
);

let count = guests.length;
