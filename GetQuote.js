var request = require('request');

function GetQuote() {
	request({url: 'http://<ip aadress or web url>:<port of the server>', json: true}, function(err, res, json) {
		if (err) {
			throw err;
			};
		console.log(json);
	});
	return request;
};

GetQuote();