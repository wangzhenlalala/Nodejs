var http = require("http");
var url = require("url");
var querystring = require("querystring")

function start(route,handlers){
	function onRequest(request,response){
		var path = url.parse(request.url).pathname;
		var urlquery = url.parse(request.url).query;
		var query = querystring.parse(urlquery);
		var postData = "";

		console.log("requests for " + path + " received!");
		request.setEncoding("utf8");
		request.addListener("data",function(chunkData){
			postData+=chunkData;
			console.log("Received : " + postData);
		});
		request.addListener("end",function(){
			route(handlers,path,response,postData,query);
		});

		
	}
	http.createServer(onRequest).listen(8080);

	console.log("listening at port 8080");
}

exports.start = start;

