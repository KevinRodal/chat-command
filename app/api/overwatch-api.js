const rp = require('request-promise');
const config = global.config;

export default function(platform, region, tag, cb) {
	const port = global.config.overwatch_api_port;
	const url =  global.config.overwatch_api_url;
 	var fullPath = url;
 	if(port != null) {
 		fullPath += ':' + port;
 	}
 	fullPath += `/stats/${platform}/${region}/${tag}/json`;

  	const options = {
    	uri: encodeURI(fullPath),
    	json: true
 	};

	rp(options).then((data) => {
	    cb(data);
	}).catch(err => {
	    cb(err);
  	});
}