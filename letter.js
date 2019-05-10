/* Contains a constructor, letter 
This constructor should be able to either display an underlying character or 
a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. 
That means the constructor should define:
    A boolean value that stores whether that letter has been guessed yet
    A function that returns the underlying character if the letter has been guessed, or a placeholder 
    (like an underscore) if the letter has not been guessed
    A function that takes a character as an argument and checks it against the underlying character, 
    updating the stored boolean value to true if it was guessed correctly 
    --Letter.js should not require any other files.
    */

var testLetter = new Letter('a');

function Letter(character) {
    // A string value to store the underlying character for the letter
    this.character = character;
    // display character
    // display underScore
    console.log('gucci');
};
console.log(testLetter.character);