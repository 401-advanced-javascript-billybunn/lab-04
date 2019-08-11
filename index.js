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
let loopJsContent = Buffer.from(`'use strict';

(() => {
  let names = ['Billy', 'Jon', 'Cory'];
  names.forEach(name => console.log(name));
})();
`);

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
  // Creates buffers for HTML tags
  let articleTags = [Buffer.from('<article>'), Buffer.from('</article>')];
  let h2Tags = [Buffer.from('<h2>'), Buffer.from('</h2>')];
  let ulTags = [Buffer.from('<ul>'), Buffer.from('</ul>')];
  let liTags = [Buffer.from('<li>'), Buffer.from('</li>')];
  let h3Tags = [Buffer.from('<h3>'), Buffer.from('</h3>')];


  // Adds article tags to the beginning and end of my buffer
  let result = Buffer.concat([articleTags[0], buffer, articleTags[1]]);

  // Find places to add h2 tags
  for (let i = 0; i < result.length; i++) {
    let beginning = Buffer.from(`

`);
    let end = Buffer.from(`
`);
    if (result[i] === beginning) {
      let firstIndex = Buffer.indexOf(result[i]);
      let secondIndex;
      for (let i = 0; i < result.length; i++) {
        if (result[i] === end) {
          secondIndex = Buffer.indexOf(result[i]);
          break;
        }
      }
      let firstPart = result.slice(0, firstIndex);
      let partToh2Wrap = result.slice(firstIndex, secondIndex);
      let secondPart = result.slice(secondIndex, result.length);
      partToh2Wrap = Buffer.concat([h2Tags[0], partToh2Wrap, h2Tags[1]]);
      result = Buffer.concat([firstPart, partToh2Wrap, secondPart]);
    }

  }

  // Wrap each section title in an h2 tag
  //   let firsth2Index = result.indexOf(`How does pair programming work?`); //?
  //   let secondh2Index = result.indexOf(`
  // While`); //?
  //   let firstPart = result.slice(0, firsth2Index); //?
  //   let partToh2Wrap = result.slice(firsth2Index, secondh2Index); //?
  //   let secondPart = result.slice(secondh2Index, result.length); //?

  //   partToh2Wrap = Buffer.concat([h2Tags[0], partToh2Wrap, h2Tags[1]]); //?
  //   result = Buffer.concat([firstPart, partToh2Wrap, secondPart]); //?

  return result;
}

let testBuffer = Buffer.from(`ls.

How does pair programming work?
While`);
let beginning = Buffer.from(`

`);
console.log(beginning);
for (let i = 0; i < testBuffer.length; i++) {
  // beginning = Buffer.from(`ls`);
  if (testBuffer[i] === beginning) {
    // console.log(beginning.toString());
    console.log('found it');
  }
  console.log(testBuffer[i]);
}

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
