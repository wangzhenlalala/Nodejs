var exec = require("child_process").exec;
var url = require('url')
var querystring = require("querystring")

// exec("dir g:",function(error,stdout,stderr){
// 	console.log("done before");
// 	console.log(stdout);
// })

var someUrl = "https://www.me.com/heart/fanghua?love=true&yes=en&callback=sendmylove";
var path = url.parse(someUrl).pathname;
var urlquery = url.parse(someUrl).query;
var query = querystring.parse(urlquery);
console.log(path);
console.log(urlquery);
console.log(query);