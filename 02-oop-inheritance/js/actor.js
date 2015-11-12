function Actor(name){
	this.name = name;
}

//Mixin
var MovieActors = function(){
	this.actors = [];
	this.addActor = function(actor){
		if(actor instanceof Actor){
			this.actors.push(actor);
		} else if(typeof actor == 'string'){
			this.actors.push(new Actor(actor));
		} else {
			console.log('Incorrect parameter!');
		}
	};
	this.removeActor = function(actorToDelete){
		this.actors.forEach(function(actor, index, array){
			if(actor == actorToDelete){
				array.splice(index, 1);
			}
		});
	};
};

MovieActors.call(Movie.prototype);