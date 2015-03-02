function Repetition(spec, defaults) {
	this.trainingType = spec.trainingType;
	this.distance = spec.distance;
	this.rest = spec.rest;
	this.intensity = spec.intensity;
	this.totalDistance = spec.totalDistance;

	assignDefaults.call(this, defaults);
}

function Speed(spec) {
	var defaults = {
		intensity: .95,
		distance: 50,
		totalDistance: 500,
		rest: 240
	};

	Repetition.call(this, spec, defaults);
}

Speed.prototype = Object.create(Repetition.prototype);
Speed.prototype.constructor = Speed;

function Tempo(spec) {
	var defaults = {
		intensity: .75,
		distance: 150,
		totalDistance: 2000,
		rest: 60
	};
	
	Repetition.call(this, spec, defaults);
}

Tempo.prototype = Object.create(Repetition.prototype);
Speed.prototype.constructor = Tempo;

function SpeedEndurance(spec) {
	var defaults = {
		intensity: .95,
		distance: 150,
		totalDistance: 750,
		rest: 300
	};
	
	Repetition.call(this, spec, defaults);
}

SpeedEndurance.prototype = Object.create(Repetition.prototype);
Speed.prototype.constructor = SpeedEndurance;

function RepetitionFactory() {}

RepetitionFactory.prototype.buildRepetition	= function(spec) {
	var parentClass = null;

	if (spec.trainingType === 'tempo'){
		parentClass = Tempo;
	} else if (spec.trainingType === 'speed'){
		parentClass = Speed;
	} else if (spec.trainingType === 'speed endurance'){
		parentClass = SpeedEndurance;
	} else {
		return false;
	}

	return new parentClass(spec);
}

var repetitionFactory = new RepetitionFactory();