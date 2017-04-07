var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
//在启动程序当中设置好 路由表，以及启动http服务器。。
var handlers = {};
handlers["/"] = requestHandlers.random;
handlers["/start"] = requestHandlers.start;
handlers["/upload"] = requestHandlers.upload;
handlers["/favicon.ico"] = requestHandlers.favicon;


server.start(router.route,handlers);