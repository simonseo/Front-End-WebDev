var fs = require("fs");


function home(req, res){
	if (req.url == "/") {
		//async function. don't care what other files do
		fs.readFile("./layout/home.html", function(err, data){
			res.write(data);
			res.end();
		}); 
	}

}

function detail(req, res) {
	var detailId = req.url.replace("/","");
	if (detailId > 0) {
		res.write(detailId);
		res.end();
	}
	
}

module.exports.home = home;
module.exports.detail = detail;
