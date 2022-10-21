const mongoose = require('mongoose')
const countrySchema = require('./country')
const foodSchema = require('./food')

const Country = mongoose.model('Country', countrySchema)
const Food = mongoose.model('Food', foodSchema)

module.exports = {
  Country,
  Food
}
