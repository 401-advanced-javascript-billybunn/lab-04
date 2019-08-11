![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

<!-- LINKS -->

<!-- PR (working into submission) -->
[1]: https://github.com/401-advanced-javascript-billybunn/lab-04/pull/2
<!-- travis build -->
[2]: https://www.travis-ci.com/401-advanced-javascript-billybunn/REPO_NAME
<!-- back-end -->
[3]: http://xyz.com
<!-- front-end -->
[4]: http://xyz.com
<!-- swagger -->
[5]: http://xyz.com
<!-- jsdoc-->
 [6]: heroku-link/docs 

## Buffers - File Transformers

### Author: Billy Bunn

### Links and Resources
* [PR][1]
* [travis][2]
<!-- (when applicable) -->
<!-- * [back-end][3] -->
<!-- (when applicable) -->
<!-- * [front-end][4] -->

#### Documentation
<!-- API assignments only -->
<!-- * [swagger][5] -->
* [jsdoc][6] (All assignments)

### Modules
#### `index.js`
##### Exported Values and Methods

##### `createArticle()`
Using only buffers and bit manipulation, reads the file `pair-programming.txt` from the `files` folder and makes the following transformations:
* Wraps all of the content within `<article>` tags
* Wrap each section title in an `<h2>`
* Converts each sentence in each paragraph into a list item.
* Converts each of the numbered sections in the bottom of the document to `<h3>` tags.

##### `makeLoopJS(content)`
Generates a file in the `files` folder called `loop.js` that initiates an array with 3 people's names, iterates them with a forEach loop, and console.log's each value. 

Verify it worked by running `node files/loop.js` and seeing the array items printed out.


### Setup
#### `.env` requirements
* `npm i`
* `PORT` - assign a port number
<!-- * `MONGODB_URI` - URL to the running mongo instance/db -->


#### Running the app
* `node index.js` - runs functions to accomplish 2 tasks described in the lab
* `node files/loop.js` - prints out three names (only works _after_ running `node index.js`)
<!-- * Endpoint: `/` -->
<!-- * Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it. -->
  
#### Tests
* How do you run tests?
  * `npm run test`
  * `npm run lint`
* What assertions were made?
* What assertions need to be / should be made?

#### UML
Link to an image of the UML for the application and response to events
