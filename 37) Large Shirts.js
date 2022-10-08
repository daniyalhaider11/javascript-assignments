// QUESTION: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. 
// Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.

// AWNSER:

const makeTshirts = (size = 'L', text = 'I love JavaScript') => {
    return `the size of the shirt should be ${size} and the text message printed on it must be ${text}`;
  };
  
  console.log(makeTshirts('L'));
  console.log(makeTshirts('M'));
  console.log(makeTshirts('S', 'Hala Madrid'));