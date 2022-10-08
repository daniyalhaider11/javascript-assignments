// QUESTION: Think of your favorite mode of transportation, such as a motorcycle or a car, 
// and make a list that stores several examples. 
// Use your list to print a series of statements about these items, 
// such as “I would like to own a Honda motorcycle.”

// AWNSER:

let vehicle = ["Lexus 570", "Vigo", "Prado", "Civic"];
let comments = ["Insha Allah one day I will buy a new", "I saw a", "My friend buy a", "My cousin sold his"];
for (let i = 0; i < vehicle.length; i++) {
    console.log(`${comments[i]} ${vehicle[i]}`)
}