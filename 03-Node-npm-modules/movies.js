(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Director(name){
	this.name = name;
}

module.exports = Director;
},{}],2:[function(require,module,exports){
var Director = require('./director.js');
var Movie = require('./movie.js');
var test = new Movie();
test.set('director', new Director('Mr. Helo World'));
console.log(test);
},{"./director.js":1,"./movie.js":3}],3:[function(require,module,exports){
function Movie(){
	this.observers = [];
};

Movie.prototype = {
	play: function(){
		this.fire('Playing ' + this.title);
	},
	stop: function(){
		this.fire('Stopped ' + this.title);
	},
	set: function(attr, value){
		this[attr] = value;
	},
	get: function(attr){
		return this[attr];
	},
	listen: function(listener){
		this.observers.push(listener);
	},
	shutUp: function(listener){
		this.observers.splice(this.observers.indexOf(listener), 1);
	},
	fire: function(status){
		this.observers.forEach(function(listener){
			listener.call(this, status);
		});
	}
};

module.exports = Movie;


},{}]},{},[2]);
