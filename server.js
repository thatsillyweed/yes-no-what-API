// server.js
const express = require('express')
const app = express()

app.use(express.json())

function SendQuote() {
    var quotes = ["Yes", "No", "Maybe", "Without a doubt", "Cannot answer that", "...what?"];
    var random = Math.floor(Math.random() * quotes.length);
    var content = quotes[random];
    return content;
}

app.get('/', function (req, res) {
    return res.status(200).send({ 'message': SendQuote() });
});

app.listen(3000, '0.0.0.0');
console.log('Listening');