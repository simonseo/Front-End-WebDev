var http = require("http");
http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write("hellow world");
	response.end();

}).listen(3030);


console.log("server is running at 3030");
