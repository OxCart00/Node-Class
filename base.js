const http = require('http');
const port = 3000;
const server = http.createServer(function (req, res){
  res.write('hello node JS');
  res.end();
})

server.listen(port, function(error){
  if (error) {
    console.log('Algo trono!');
  }else{
    console.log(`Server running on port  http://localhost:${port}`);
  }
})