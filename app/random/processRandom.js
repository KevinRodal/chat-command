var utils = require('../utils.js');
var constants = require('../constants.js');
var request = require('request');

var getJoke = function(headers, param) {
	var jokes = constants.jokes;

	if(isParamHelp(param)) {
		var helpMsg = getHelpMessage('joke', jokes);
		return helpMsg;
	}

	var jokeIndex = getIndexForAction(jokes, param);
	var joke = jokes[jokeIndex];

	var callerParamString = headers['nightbot-user'];

	var callerParams = null;
	if(callerParamString != null) {
		callerParams = utils.parseHeaderValues(callerParamString);
	}

	var message = joke.question;
	var answer = joke.answer;
	
	if(callerParams != null) {
		var displayName = callerParams.displayName;
		if(displayName != null) {
			message = '@' + displayName + ' ' + message;
			answer = '@' + displayName + ' ' + answer;
		}
	}	

	var nightbotPostBack = headers['nightbot-response-url'];
	if(nightbotPostBack != null) {
		var nightbotMessage = {
			message: answer
		}

		setTimeout(function() {				
			request({
				url: nightbotPostBack,
				method: 'POST',
				json: nightbotMessage
			}, function (error, response, body) {
				// console.log(response);
			});
			
		}, constants.jokeDelayTime);
	}		

	return message;
}

var getSeagullMessages = function() {
	return constants.seagullMessages;
}

var getSlothFacts = function() {
	return constants.slothFacts;
}

var getMagic8Ball = function() {
	return constants.magic8Ball;
}

var getHeroes = function() {
	return constants.heroes;
}

var convertActionForDisplay = function(action) {
	var displayAction = action;
	if(action == 'magic8ball') {
		displayAction = '8ball';
	}
	return displayAction;
}

var isParamHelp = function(param) {
	if(param == null || param == undefined) {
		return false;
	}
	var trimmed = param.trim();
	var lower = trimmed.toLowerCase();
	return lower == 'help';
}

var getHelpMessage = function(action, messages) {
	if(!Array.isArray(messages)) {
		return 'Whoops! >.>';
	}

	var length = messages.length;
	var message = 'usage: !' + action + ' [1-' + length + ', omit for random]';
	return message;
}

var getIndexForAction = function(messages, param) {
	var jokeIndex = utils.getRandomInt(0, messages.length);
	var paramInt = parseInt(param, 10);
	if(paramInt != NaN) {
		if(paramInt > 0 && paramInt <= messages.length) {
			jokeIndex = paramInt - 1;
			// break;
		}			
	}
	return jokeIndex;
}

module.exports = {

	process: function(action, headers, param) {
		// TODO: Add ability to not allow random/help
		// TODO: Add wrapper function that can put 'slothfact #1' or '@FuzzyCevin Magic 8 Ball says -> ((( {message} )))'
		var actions = {
			seagull: getSeagullMessages,
			heroes: getHeroes,
			slothfact: getSlothFacts,
			magic8ball: getMagic8Ball
		};

		var lowerAction = action.toLowerCase();
		if(lowerAction == 'joke') {
			return getJoke(headers, param);
		}

		var getMessageList = actions[lowerAction];
		if(getMessageList == null) {
			return 'The action "' + action + '" was not recognized';
		}

		var messages = getMessageList();
		if(isParamHelp(param)) {
			var displayAction = convertActionForDisplay(action);
			var help = getHelpMessage(displayAction, messages);
			return help;
		}

		var messageIndex = getIndexForAction(messages, param);
		return messages[messageIndex];
	}

}