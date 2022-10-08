// QUESTION: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
// The function should print a sentence summarizing the size of the shirt and the message printed on it. 
// Call the function.

// AWNSER:

const makeTshirts = (size, text) => {
    return `the size of the shirt should be ${size} and the text message printed on it must be ${text}`;
  };
  
  console.log(makeTshirts('M', 'Hala Madrid'));
  