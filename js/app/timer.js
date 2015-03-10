require(['jquery'],
	function() {
		var timerValue = 0;

		return {
			timerStart: function timerStart() {
			    timerValue = new Date();
			    $("#timerOutput").text(timerValue.getTime());
			}

			timerStop: function timerStop() {
			    var newTimerValue = new Date();
			    timerValue = (newTimerValue.getTime() - timerValue) / 1000;
			    console.log(Math.round(timerValue));
			    $("#timerOutput").text(timerValue);
			};

		}
});