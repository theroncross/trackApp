function Set(setSpec) {
	this.reps = this.buildSet(setSpec);
	this.repsInSet = this.reps.length;
	this.trainingType = this.reps[0].trainingType;
}

Set.prototype.buildSet = function(setSpec) {
	var reps = [],
		howMany = getNumberOfReps();
	
	for (var i = 0; i < howMany; i++)  {
		var rep = repFactory.buildRep(setSpec);
		reps.push(rep);
	}
	
	return reps;

	function getNumberOfReps() {
		var exampleRep = repFactory.buildRep(setSpec);
		return Math.floor(exampleRep.totalDistance / exampleRep.distance);
	}
}