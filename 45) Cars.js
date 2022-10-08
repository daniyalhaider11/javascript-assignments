// QUESTION: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, 
// such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.

// ANWSER:

const make_car = (manufacturer, model, args) => {
    let obj = { manufacturer, model };
    //   console.log(Object.entries(args));
    Object.entries(args).map((idx) => (obj[idx[0]] = idx[1]));
    console.log(obj);
  };
  make_car("Royal Roycs", "22", { doors: 4, wheels: 4 });