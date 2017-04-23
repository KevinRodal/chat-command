const rp = require('request-promise');
const config = global.config;

export default function(platform, region, tag, cb) {

 	const url =  global.config.overwatch_api_url + `/stats/${platform}/${region}/${tag}/json`;

  	const options = {
    	uri: encodeURI(url),
    	json: true
 	};

	rp(options).then((data) => {
	    cb(data);
	}).catch(err => {
	    cb(err);
  	});
}