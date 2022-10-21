const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Country, Food } = require('./models')

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

// FOODS

// read all foods --> GET
app.get('/foods', async (req, res) => {
  const allFoods = await Food.find({})
  res.json(allFoods)
})

// create AMERICA food --> POST
app.post('/foods', async (req, res) => {
  let americaId = '6352b0b96dabb714d7bc6204'
  const requestAmerica = { ...req.body, brand: americaId }
  let createdFood = await Food.create(requestAmerica)
  res.json(createdFood)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`)
})
