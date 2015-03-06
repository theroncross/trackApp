define(['underscore', 'jquery'],
	function (underscore, jquery) {

	function Rep(repSpec, defaults) {
		this.trainingType = repSpec.trainingType;
		this.distance = repSpec.distance;
		this.rest = repSpec.rest;
		this.intensity = repSpec.intensity;
		this.totalDistance = repSpec.totalDistance;
		this.timeInSeconds = 0;
		_.defaults(this, defaults);
	}

	Rep.prototype.startTimer = function() {
		this.timeInSeconds = new Date();
		$('#timerOuput').html(0);
	}

	Rep.prototype.stopTimer = function() {
		var startTime = this.timeInSeconds;
		this.timeInSeconds = new Date() - startTime;
		$('#timerOuput').html(this.timeInSeconds);
	}

	function Speed(repSpec) {
		var defaults = {
			intensity: .95,
			distance: 50,
			totalDistance: 500,
			rest: 240
		};
		Rep.call(this, repSpec, defaults);

	}

	Speed.prototype = Object.create(Rep.prototype);
	Speed.prototype.constructor = Speed;

	function Tempo(repSpec) {
		var defaults = {
			intensity: .75,
			distance: 150,
			totalDistance: 2000,
			rest: 60
		};
		
		Rep.call(this, repSpec, defaults);
	}

	Tempo.prototype = Object.create(Rep.prototype);
	Speed.prototype.constructor = Tempo;

	function SpeedEndurance(repSpec) {
		var defaults = {
			intensity: .95,
			distance: 150,
			totalDistance: 750,
			rest: 300
		};
		
		Rep.call(this, repSpec, defaults);
	}

	SpeedEndurance.prototype = Object.create(Rep.prototype);
	Speed.prototype.constructor = SpeedEndurance;

	function RepFactory() {}

	RepFactory.prototype.buildRep = function(repSpec) {
		var parentClass = null;
		switch (repSpec.trainingType) {
			case 'tempo':
				parentClass = Tempo;
				break;
			case 'speed':
				parentClass = Speed;
				break;
			case 'speed endurance':
				parentClass = SpeedEndurance;
				break;
			default: 
				return false;
		}

		return new parentClass(repSpec);
	}

	return new RepFactory();
});