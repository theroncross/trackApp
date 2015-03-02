var mySpec = {
	trainingType: 'speed',
	distance: 50
};

var mySet = new Set();
mySet.buildSet(mySpec);
console.log(mySet.repetitions);

var rep1 = repetitionFactory.buildRepetition(mySpec);
console.log(rep1);
