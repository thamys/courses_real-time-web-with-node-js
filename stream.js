var http = require('http');

http.createServer.on('request', function(request, response){
    response.writeHead(200);
    request.on('readdable', function(){
        var chunk = null;
        while(null !== (chunk == request.read())) {
            response.write(chunk.toString());
        }
    });

    request.on('end', function(){
        response.end();
    });
}).listen(8080);

console.log('Listening on port 8080..');