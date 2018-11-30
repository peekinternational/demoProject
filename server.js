const express     = require('express');
const session     = require('express-session');
const bodyParser  = require('body-parser');
const app = express();
const port = 3000;



app.use(express.static('public'));
app.use(session({secret:"demoProject",resave:false,saveUninitialized:true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/saveLoginData',(req,res) => {
	req.session.user = req.body.user;
	res.json(req.session.user);
})
app.get('/getLoginData',(req,res) => {
	console.log(req.session.user);
	res.json(req.session.user);
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))