const fs = require('fs');
const http = require('http');
const port = 3000;
const server = http.createServer(function (req, res){
  res.writeHead(200, {'Content-type': 'text/html'});
  fs.readFile('./index.html', function(error, data) {
    if (error) {
      res.writeHead(404);
      res.write('error: File not found')
    }else{
      res.write(data);
    }
    res.end();
  })

  res.end();
})

server.listen(port, function(error){
  if (error) {
    console.log('Algo trono!');
  }else{
    console.log(`Server running on port  http://localhost:${port}`);
  }
})