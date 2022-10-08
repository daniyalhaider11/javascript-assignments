// QUESTION: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
// using a different number of arguments each time.

// ANWSER:

const sandwich = (...args) => {
    console.log("Ingreidents you want are: ");
    args.map((idx) => console.log(idx));
};
sandwich("tikka", "masala");