'use strict'; 
const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express(); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

const server = app.listen(3000, () => { 
	console.log('Express server   listening on port %d in %s mode', 
		server.address().port,   
		app.settings.env);
});


app.post('/', (req, res) => { 
  let text = req.body.text; 
  // implement your bot here ... 

	if(! /^\d+$/.test(q.text)) { // not a digit 
		res.send('U R DOIN IT WRONG. Enter a status code like 200!');   return; 
	}

});


app.post('/slash/pidor', (req, res) => {
	console.log(req.body)

})

app.post('/slash/luba', (req, res) => {
	console.log(req.body)

})

app.post('/slash/money', (req, res) => {
	console.log(req.body)

})

app.post('/slash/moneyvevo', (req, res) => {
	console.log(req.body)

})





// const recastai = require('recastai')

// const client = new recastai.request('1cb3cd6c2f1c6a616a810458ddb408a4', 'en')

// client.analyseText('hello')
//   .then(function(res) {
//     if (res.intent()) { console.log('Intent: ', res.intent().slug) }
//     if (res.intent().slug === 'YOUR_EXPECTED_INTENT') {
//       // Do your code...
//     }
//   })