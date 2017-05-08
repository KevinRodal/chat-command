export default function(action, headers, param) {
	var processRandom = require('../random/processRandom.js');

	return processRandom.process(action, headers, param);
}