const express = require('express')
const app = express()
const port = process.env.PORT || 8000

const carsRouter = require('../cars/carsRouter')

app.use(express.json())
app.use('/api/cars', carsRouter);

module.exports = app