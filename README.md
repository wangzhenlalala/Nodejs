first , you have to install node.js on your PC.
then change to the directory.
and run :
		node index.js
HU, now the server is running on your PC  ,you can play with it by visit http://localhost:8080




what makes me mad is : when i visit my own server  from a html page  at localhost,
chrome forbiddens it . ajax will fail every time . 
i've tried many solutions:

1.append  
		'--enable-webgl --ignore-gpu-blacklist --allow-file-access-from-files' 
  after chrome.exe 
  
2. communicate with server by JSONP, and change server with 
		writeHead({
			'Allow-Origin-Access-Control':'*'
		})
	and enclose the response content with 'callback(responseContent)'

do you know how to solve it ???  please tell me ,many thanks !!!!
