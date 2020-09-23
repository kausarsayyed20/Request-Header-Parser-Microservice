
var express = require('express');
var app = module.exports=express();


var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  
app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});



app.get('/api/whoami', function (req, res,next) {
    const language=req.header('Accept-Language')
    const software= req.header('User-Agent');
    const ipaddress='127.0.0.1';
    return res.json({
      language,
     software,
     ipaddress,

  }); 
});


app.listen(3000, function () {
 
    console.log("working");

});
