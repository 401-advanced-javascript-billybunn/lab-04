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

// Content I want to pass into my writeFile function
let loopJsContent = new Int8Array([39, 117, 115, 101, 32, 115, 116, 114, 105, 99, 116, 39, 59, 10, 10, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 108, 101, 116, 32, 110, 97, 109, 101, 115, 32, 61, 32, 91, 39, 66, 105, 108, 108, 121, 39, 44, 32, 39, 74, 111, 110, 39, 44, 32, 39, 67, 111, 114, 121, 39, 93, 59, 10, 32, 32, 110, 97, 109, 101, 115, 46, 102, 111, 114, 69, 97, 99, 104, 40, 110, 97, 109, 101, 32, 61, 62, 32, 99, 111, 110, 115, 111, 108, 101, 46, 108, 111, 103, 40, 110, 97, 109, 101, 41, 41, 59, 10, 125, 41, 40, 41, 59, 10]);

makeLoopJS(loopJsContent);

// ----------------------------------------------------------------------
// Assignment 2: Create an <article>

const readFile = util.promisify(fs.readFile);

function createArticle() {
  // Read the file (get the buffer data)
  readFile(`${__dirname}/files/pair-programming.txt`)
    .then(content => {
      console.log('56 read content:', content);
      // Write a new file with the changed buffer (pair-programming.html)
      return writeFile(`${__dirname}/files/pair-programming.html`, insertHTMLTags(content));
    })
    .then((editedContent) => {
      console.log('wrote the edited content to pair-programming.js');
    })
    .catch(err => {
      console.log(err);
    });
}


function insertHTMLTags(buffer) {

  // Adds article tags to the beginning and end of my buffer
  let articleTags = [Buffer.from('<article>'), Buffer.from('</article>')];
  let result = Buffer.concat([articleTags[0], buffer, articleTags[1]]);

  // Wrap each section title in an h2 tag
  let h2Tags = [Buffer.from('<h2>'), Buffer.from('</h2>')];
  let firsth2Index = result.indexOf(`How does pair programming work?`); //?
  let secondh2Index = result.indexOf(`
While`); //?
  let firstPart = result.slice(0, firsth2Index); //?
  let partToh2Wrap = result.slice(firsth2Index, secondh2Index); //?
  let secondPart = result.slice(secondh2Index, result.length); //?

  partToh2Wrap = Buffer.concat([h2Tags[0], partToh2Wrap, h2Tags[1]]); //?
  result = Buffer.concat([firstPart, partToh2Wrap, secondPart]); //?

  return result;
}

// let testBuffer = Buffer.from(`ls.

// How does pair programming work?
// While`); //?
// testBuffer.length; //?
// console.log(testBuffer); //?
// let resultsBuf = insertHTMLTags(testBuffer); //?

// resultsBuf.indexOf(`
// cool
// `); //?



// let tester = `.

// How does pair programming work?
// W`;

// let testBuf = Buffer.from(tester); //?
// console.log(testBuf);

createArticle();
