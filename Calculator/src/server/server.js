var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/' , (req,res) => {
		
		var first = parseInt(req.body.first);
		var second = parseInt(req.body.second);
		console.log("f/s",first,second);
		if(req.body.op == "ADD"){

			var ans = first + second;
			res.send({"ans":ans});			
		}
		else if(req.body.op == "MIN"){
			
			var ans = first - second;
			res.send({"ans":ans});			
		}
		else if(req.body.op == "MUL"){
			
			var ans = first * second;
			res.send({"ans":ans});			
		}
		else if(req.body.op == "DIV"){
			
			var ans = first / second;
			res.send({"ans":ans});			
		}

	res.send();

});

app.listen(4000, () => {
	console.log('Started on port 4000');
});
