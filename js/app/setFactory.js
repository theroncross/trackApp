define(['app/repFactory'], 
	function(repFactory) {

		function SetOfReps(setOfRepsSpec) {
			this.reps = this.getReps(setOfRepsSpec);
			this.howManyRepsInSet = this.reps.length;
			this.trainingType = this.reps[0].trainingType;
		}

		SetOfReps.prototype.getReps = function(setOfRepsSpec) {
			var reps = [],
				howMany = getNumberOfReps();
			
			for (var i = 0; i < howMany; i++)  {
				var myRep = repFactory.buildRep(setOfRepsSpec);
				reps.push(myRep);
			}
			
			return reps;

			function getNumberOfReps() {
				var exampleRep = repFactory.buildRep(setOfRepsSpec);
				return Math.floor(exampleRep.totalDistance / exampleRep.distance);
			}
		}

		var buildSetOfReps = function(setOfRepsSpec) {
			return new SetOfReps(setOfRepsSpec);
		}

		return {
			buildSetOfReps: buildSetOfReps
		};
});