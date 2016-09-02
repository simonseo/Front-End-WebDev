var express = require("express");

console.log("so that you don't have to write express every time. You don't have to name this as server.js, but it's the default");
var app = express();


app.set("port", process.env.PORT || 3030);

app.get("/", function(req,res) {
	res.type("text/plain");
	res.send("My first Express Server");
});

app.use(function(req, res) {
	res.type("text/plain");
	res.status("404");
	res.send("404 - bad request. Cannot find whatever you asked for. Sorry peeps.");
});

app.get(function(req, res) {
	rest.type("text/plain");
	res.status("500");
	res.send("Server Error. Please tell (no, really) the person who made this website to get up and do his work.");
});

app.listen(app.get("port"), function() {
	console.log("Express server is running at localhost:" + app.get("port"));
});
