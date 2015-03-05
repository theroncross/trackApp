function Workout(workoutSpec) { //workout spec should be an array of objects
	this.sets = this.buildWorkout(workoutSpec);
	this.setsInWorkout = sets.length;
}

Workout.prototype.buildWorkout = function(workoutSpec) {
	var sets = [];
	for(var i = 0; i < workoutSpec.length; i++) {
		var set = setFactory.buildSet(workoutSpec[i]);
		sets.push(set);
	}

	return sets;
}