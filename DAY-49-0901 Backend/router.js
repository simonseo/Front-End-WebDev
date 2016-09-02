var fs = require("fs");
var renderer = require("./renderer");

function home(req, res) {
	console.log('insdie home');
	if (req.url == "/") {
		//async function. don't care what other files do
		fs.readFile("./layout/home.html", function(err, data){
			res.write(data);
			res.end();
		}); 
	}
}

function contact(req, res) {
	console.log('insdie contact');
	if (req.res == "/contact.html") {
		return renderer(req, res, 'contact', {});
	}
}

function detail(req, res) {
	console.log('insdie detail');
	var detailId = req.url.replace("/","");
	if (detailId.length > 0) {
		renderer(req, res, detailId);
		// res.write(detailId);
		// res.end();
	}
	
}

module.exports.home = home;
module.exports.contact = contact;
module.exports.detail = detail;
