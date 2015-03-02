function Set() {
	this.repetitions = [];
	this.repetitionsInSet = this.repetitions.length;
	this.trainingType;
}

Set.prototype.buildSet = function(spec) {
	var howMany = 5;//_.max(Math.floor(spec.totalDistance / spec.distance), 1);
	for(var i = 0; i < howMany; i++) {
		var individualRepetition = repetitionFactory.buildRepetition(spec);
		this.repetitions.push(individualRepetition);
		console.log(individualRepetition.distance)
	}
}

