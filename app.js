var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json({ type: 'applictaion/json' }))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.json({msg: 'Hello World'})
})

app.post('/', function (req, res) {
  if (req.body.name) {
    res.json({msg: 'Hi! ' + req.body.name + '.'})
  } else res.json({msg: 'error'})
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
