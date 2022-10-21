const { Schema } = require('mongoose')

const foodSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    brand: { type: Schema.Types.ObjectId, ref: 'Country' }
  },
  { timestamps: true }
)
