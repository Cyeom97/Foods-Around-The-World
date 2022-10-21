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

// create country
app.post('/foods', async (req, res) => {
  let createdCountry = await Country.create(req.body)
  res.send(createdCountry)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`)
})
