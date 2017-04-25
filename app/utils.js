module.exports = {

	loadConfigIntoGlobal: function(){
		var args = process.argv;
		var configFile = './config/production.config';
		for(var i = 0; i < args.length; ++i) {
			if(args[i].includes('--conf') && i != (args.length - 1)) {
				configFile = args[i+1];
				break;
			}
		}
		var jsonfile = require('jsonfile'); // We probably don't need jsonfile now that I know about require('./file.json');
		jsonfile.readFile(configFile, function(err, obj) {
			global.config = obj;
		});
	},
	
	getRandomInt: function(min, max) {
		min = Math.floor(min);
	  	max = Math.floor(max);
	  	return Math.floor(Math.random() * (max - min)) + min;
	},

	getPlurlUsernameFromUser: function(user) {
		var username = user.username;
		var lastLetter = username[username.length - 1];
		var plurl = "'s";
		if(lastLetter.toLowerCase() == 's') {
			plurl = "'";
		}
		return username + plurl;
	},

	stackTrace: function() {
	    var err = new Error();
	    console.log(err.stack);
	},

	parseHeaderValues: function(headerValues) {
		var params = headerValues.split('&');
		var headerParams = {};
		for(var i = 0; i < params.length; ++i) {
			var parts = params[i].split('=');
			headerParams[parts[0]] = parts[1];
		}

		return headerParams;
	}

}