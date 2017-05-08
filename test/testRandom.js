var test = require('tape');
var random = require('../app/random/processRandom.js'); 
const constants = require('../app/constants.js');

test('randomHero', function (t) {
	const expectedHeroes = constants.heroes;
	t.plan(1);
	var message = random.process('heroes', null, null);
	var foundMessage = doesArrayContainString(expectedHeroes, message);
    t.equal(foundMessage, true);
});

test('randomJokeWithNoHeaderAndNoParamReturnsRandomJoke', function(t) {
	const expectedJokes = constants.jokes;
	t.plan(1);
	var message = random.process('joke', {}, null);
	var foundMessage = doesJokeArrayContainString(expectedJokes, message);
	t.equal(foundMessage, true);
});

test('randomJokeWithNightbotUserHeaderAndNoParam', function(t) {
	const expectedJokes = constants.jokes;
	t.plan(1);
	var message = random.process('joke', nightbotUserHeader(), null);
	var foundMessage = doesJokeArrayContainString(expectedJokes, message);
	t.equal(foundMessage, true);
});

test('randomJokeWithHelpParam', function(t) {
	var jokes = constants.jokes;
	var expectedMessage = 'usage: !joke [1-' + jokes.length + ', omit for random]';
	t.plan(1);
	var message = random.process('joke', {}, 'help');
	t.equal(message, expectedMessage);
});

test('randomJokeWithFirstJokeParam', function(t) {
	var jokes = constants.jokes;
	var expectedJoke = jokes[0].question;
	t.plan(1);
	var message = random.process('joke', {}, '1');
	t.equal(message, expectedJoke);
});

test('randomJokeWithIntLessThan0ReturnsRandomJoke', function(t) {
	const expectedJokes = constants.jokes;
	t.plan(1);
	var message = random.process('joke', {}, '-1');
	var foundMessage = doesJokeArrayContainString(expectedJokes, message);
	t.equal(foundMessage, true);
});

test('randomJokeWithIntGreaterThanNumJokesReturnsRandomJoke', function(t) {
	const expectedJokes = constants.jokes;
	const jokeCount = expectedJokes.length;
	t.plan(1);
	var message = random.process('joke', {}, '' + (jokeCount + 1));
	var foundMessage = doesJokeArrayContainString(expectedJokes, message);
	t.equal(foundMessage, true);
});

test('randomJokeWithUnknownParamReturnsRandomJoke', function(t) {
	const expectedJokes = constants.jokes;
	t.plan(1);
	var message = random.process('joke', {}, 'AaBbCc');
	var foundMessage = doesJokeArrayContainString(expectedJokes, message);
	t.equal(foundMessage, true);
});

function doesArrayContainString(arr, str) {
	for(var i = 0; i < arr.length; ++i) {
		if(str.includes(arr[i])) {
			return true;
		}
	}
	return false;
}

function doesJokeArrayContainString(arr, str) {
	for(var i = 0; i < arr.length; ++i) {
		if(str.includes(arr[i].question)) {
			return true;
		}
	}
	return false;
}

function nightbotUserHeader() {
	return {
		'nightbot-user': 'displayName=fuzzycevin'
	};
}