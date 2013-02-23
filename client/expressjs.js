var express = require('express');
var app = express();
//app.engine('jade', require('jade').__express);
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'))

app.get('/', function(req, res){
  res.send('Pomodoro!');
});

app.get('/pomodoro', function(req, res) {
  res.render('pomodoro.ejs');
});

app.listen(3000);
console.log('Listening on port 3000');
