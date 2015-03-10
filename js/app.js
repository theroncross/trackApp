requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});

// Start the main app logic.
var setOne = {},
    timerValue = 0;

requirejs(['app/setFactory'],
    function(setFactory) {
        setOne = setFactory.buildSetOfReps({trainingType: 'speed'});
        console.log(setOne.reps);
});

function timerStart() {
    timerValue = new Date();
    $("#timerOutput").text(timerValue.getTime());
}

function timerStop() {
    var newTimerValue = new Date();
    timerValue = (newTimerValue.getTime() - timerValue) / 1000;
    console.log(Math.round(timerValue));
    $("#timerOutput").text(timerValue);
}




