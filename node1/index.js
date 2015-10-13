var express=require('express');
var myjson={id:'123', text:'My json'}
var app=express();
app.get('/', function(req, res){
  res.send(myjson);

});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
