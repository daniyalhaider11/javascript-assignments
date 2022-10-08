// QUESTION: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// AWNSER:

let name = "Daniyal Haider";
console.log(name.toUpperCase());
console.log(name.toLowerCase());


function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }
  titleCase("My name is Daniyal Haider, I'm Full Stack Developer currently i'm studying Web 3.O or Metaverse Development");
console.log(titleCase("My name is Daniyal Haider, I'm Full Stack Developer currently i'm studying Web 3.O or Metaverse Development"));

