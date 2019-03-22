/*
- Using only buffers and bit manipulation, generate a file in the files folder called loop.js that initiates an array with 3 people's names, iterates them with a forEach loop, and console.log's each value.

- You may not use Buffer.from() to simply create a buffer from chunks of your target code. Rather, you will need to work character by character.

- Verify your work by running node loop.js from within the files folder and seeing the array items printed out.
*/

'use strict';

const fs = require('fs');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);

// ----------------------------------------------------------------------
// Assignment 1: Code that writes code ...

// Creates a file called loop.js in the files folder with whatever passed into it
function makeLoopJS(content) {
  writeFile(`${__dirname}/files/loop.js`, content)
    .then(() => {
      console.log('Created loop.js in the files folder');
    })
    .catch(err => {
      console.log(err);
    });
}

// What I want to pass into my writeFile function
let things = new Int8Array([39, 117, 115, 101, 32, 115, 116, 114, 105, 99, 116, 39, 59, 10, 10, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 108, 101, 116, 32, 110, 97, 109, 101, 115, 32, 61, 32, 91, 39, 66, 105, 108, 108, 121, 39, 44, 32, 39, 74, 111, 110, 39, 44, 32, 39, 67, 111, 114, 121, 39, 93, 59, 10, 32, 32, 110, 97, 109, 101, 115, 46, 102, 111, 114, 69, 97, 99, 104, 40, 110, 97, 109, 101, 32, 61, 62, 32, 99, 111, 110, 115, 111, 108, 101, 46, 108, 111, 103, 40, 110, 97, 109, 101, 41, 41, 59, 10, 125, 41, 40, 41, 59, 10]);

// makeLoopJS(things);

// ----------------------------------------------------------------------
// Assignment 2: Create an <article>

/*
- Using only buffers and bit manipulation, read the file pair-programming.txt from the files folder and make the following transformations:
 Wrap all of the content within <article> tags
 Wrap each section title in an <h2>
 Convert each sentence in each paragraph into a list item.
 Convert each of the numbered sections in the bottom of the document to <h3> tags.
  You may not use .toString()
  Save the file as pair-programming.html
*/

const readFile = util.promisify(fs.readFile);


function createArticle() {
  // Read the file (get the buffer data)
  readFile(`${__dirname}/files/pair-programming.txt`)
    .then(content => {
      console.log('56 read content:', content);
      //
      return writeFile(`${__dirname}/files/pair-programming.html`, insertHTMLTags(content));
    })
    .then((editedContent) => {
      console.log('wrote the edited content to pair-programming.js', editedContent);

    })

    // Write a new file with the changed buffer (pair-programming.html)
    .catch(err => {
      console.log(err);
    });
}


// Adds article tags to the beginning and end of my buffer
function insertHTMLTags(buffer) {

  // Wrap all of the content within <article> tags
  // console.log(buffer);
  let openingTag = Buffer.from('<article>');
  // console.log(openingTag);
  let closingTag = Buffer.from('</article>'); 
  // console.log(closingTag);

  let result = Buffer.concat([openingTag, buffer, closingTag]);

  // console.log(result);
  // result.toString(); //?

  


  return result;

}

// let testBuffer = Buffer.from('some cool text'); //?
// console.log(testBuffer); //?
// addArticleTags(testBuffer); //?



createArticle();
