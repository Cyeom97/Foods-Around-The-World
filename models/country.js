const { Schema } = require('mongoose')

const countrySchema = new Schema(
  {
    name: { type: String, required: true },
    url: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = countrySchema
