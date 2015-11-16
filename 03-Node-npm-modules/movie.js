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

