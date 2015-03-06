define(['./repFactory'], 
	function(repFactory) {

		function Workout(workoutSpec) {
			this.reps = this.getReps(workoutSpec);
			this.repsInWorkout = this.reps.length;
			this.trainingType = this.reps[0].trainingType;
		}

		Workout.prototype.getReps = function(workoutSpec) {
			var reps = [],
				howMany = getNumberOfReps();
			
			for (var i = 0; i < howMany; i++)  {
				var myRep = rep.repFactory.buildRep(workoutSpec);
				reps.push(myRep);
			}
			
			return reps;

			function getNumberOfReps() {
				var exampleRep = repFactory.buildRep(workoutSpec);
				return Math.floor(exampleRep.totalDistance / exampleRep.distance);
			}
		}

		function WorkoutFactory() {};

		WorkoutFactory.prototype.buildWorkout = function(workoutSpec){
			return new Workout(workoutSpec);
		}

	return new WorkoutFactory();
});