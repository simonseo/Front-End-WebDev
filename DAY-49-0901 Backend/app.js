var http = require("http");
var router = require("./router");


var app = http.createServer(function(req, res){
	console.log(req.url); //url of request}

	router.home(req, res);
	router.detail(req, res);

}).listen(3030, function() {
console.log("server is running at localhost:3030");
});
