var Director = require('./director.js');
var Movie = require('./movie.js');
var test = new Movie();
test.set('director', new Director('Mr. Hello World'));
console.log(test);