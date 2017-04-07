var exec = require("child_process").exec;

var random = function(response,data,query){
	//返回一个100-300之间的整数
	var result = parseInt(Math.random()*100) + 200 ;
	var backData = result +'\nthis is a random number for you \nand you can refresh the browser to get another one' + 
	'\nyou can also  go to localhost/start';
	// if(query['callback'])
	// 	backData = query['callback'] + '(' + backData + ')';
	response.writeHead(200,{"Content-Type":'text/plain'});
	
	response.write(backData); //这里返回的数据必须是文本，而不能是数值型。这样是不行的response.write(result + '');
	response.end();
};

var start = function(response){
	exec("dir .",function(error,stdout,stderr){

		var body = '<html>'+
					'<head>'+
					'<meta http-equiv="Content-Type" content="text/html; '+
					'charset=UTF-8" />'+
					'</head>'+
					'<body>'+
					'<form action="/upload" method="post">'+
					'<textarea name="text" rows="20" cols="60"></textarea>'+
					'<input type="submit" value="Submit text" />'+
					'</form>'+
					'</body>'+
					'</html>';

		response.writeHead(200,{"Content-Type":"text/html"});
		//{"Content-Type":"text/plain"} 这里要告诉brower，我们发送的是有个网页，而不是一段文字
		//否则，浏览器会把他当成文字渲染，而不是渲染出网页
		response.write(body);
		response.end();
	})
}
var upload = function(response,data){
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write(data.slice(5).replace(/\++/g," "));
		console.log(data);
		response.end();
}
var favicon = function(response){
	console.log("Request handler *favicon.ico* was called! ")
}

exports.random = random;
exports.start = start;
exports.upload = upload;
exports.favicon = favicon;


