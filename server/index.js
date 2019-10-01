const express = require('express')
const routes = require('./routes.js')
const parser = require('body-parser')
const db = require('../db/')
const app = express()
const PORT = process.env.PORT || 3000

app.use(parser.json())
app.use(express.static('./client/dist'))

app.use('/cows', routes)

app.listen(port, () => console.log(`Cows are listening on port ${PORT}!`))