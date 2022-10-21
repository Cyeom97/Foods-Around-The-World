const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Country } = require('./models')

const app = express()

// middleware here
app.use(express.json())

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit' })
})

// Country routes

// read all countries --> GET
app.get('/countries', async (req, res) => {
  let allCountries = await Country.find({})
  res.json(allCountries)
})

// create countries --> POST
app.post('/countries', async (req, res) => {
  let createdCountry = await Country.create(req.body)
  res.json(createdCountry)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`)
})
