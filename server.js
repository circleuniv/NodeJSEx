var http=require('http');
var server=http.createServer(function(request,response){
		//handle imcoming request here...
});

server.listen(5000);
console.log("Node.js web server at port 5000 is running.");