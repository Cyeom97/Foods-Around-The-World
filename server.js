const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Country, Food } = require('./models')

const app = express()

// middleware here
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit' })
})

// Country routes

// read all countries --> GET
app.get('/countries', async (req, res) => {
  let allCountries = await Country.find({})
  res.json(allCountries)
})

// read all foods by country --> GET
app.get('/country/:id', async (req, res) => {
  console.log('Params', req.params)
  const foodsCountry = await Food.find({ country: req.params.id })
  res.json(foodsCountry)
})

// read one country --> GET
// app.get('/countries/:id', async (req, res) => {
//   let foundCountry = await Country.findById(req.params.id)
//   res.json(foundCountry)
// })

// create countries --> POST
app.post('/countries', async (req, res) => {
  let createdCountry = await Country.create(req.body)
  res.json(createdCountry)
})

// update one country --> PUT
// app.put('/countries/:id', async (req, res) => {
//   let updatedCountry = await Country.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     {
//       new: true
//     }
//   )

//   res.json(updatedCountry)
// })

// FOODS

// read all foods --> GET
app.get('/foods', async (req, res) => {
  const allFoods = await Food.find({})
  res.json(allFoods)
})

// create AMERICA food --> POST
app.post('/foods', async (req, res) => {
  let createdFood = await Food.create(req.body)
  res.json(createdFood)
})

// read one food --> GET
app.get('/foods/:id', async (req, res) => {
  let foundFood = await Food.findById(req.params.id).populate('country')

  res.json(foundFood)
})

// update one food --> PUT
app.put('/foods/:id', async (req, res) => {
  let updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })

  res.json(updatedFood)
})

// delete one food --> DELETE
app.delete('/foods/:id', async (req, res) => {
  let deletedFood = await Food.findByIdAndDelete(req.params.id)
  res.json(deletedFood)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`)
})
