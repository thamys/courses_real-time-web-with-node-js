var http = require('http');

var server = http.createServer();

server.on('request', function(request, response){
    response.writeHead(200);
    response.write("Dog is running.");
    setTimeout(function(){
        response.write("Dog is done");
        response.end();
    }, 5000)
});


server.listen(8080);
console.log('Listening on port 8080..');