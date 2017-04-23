const rp = require('request-promise');

export default function(platform, region, tag, cb) {

 	const url =  `http://localhost:3000` + `/stats/${platform}/${region}/${tag}/json`;

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