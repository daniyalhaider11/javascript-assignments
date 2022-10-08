// QUESTION: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

// AWNSER:

let username = ["us1", "us2", "us3", "us4", "admin"];
for (let i = 0; i < username.length; i++) {
if (username[i] === "admin")
    console.log("Hello admin, would you like to see a status report?");
else
    console.log("Greetings, ", username[i], ", thank you for logging in again");
}
username = [];
if (username.length < 1) console.log("We need to find some users!");