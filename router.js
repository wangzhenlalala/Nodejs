var route = function(handlers,path,response,data,query){
	if(typeof handlers[path] === 'function')
		handlers[path](response,data,query);
	else
		throw new TypeError("no handlers for " + path);
}


exports.route = route;