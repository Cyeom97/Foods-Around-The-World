const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb+srv://shuGolf19:DpzOEA2IVeE5UQrc@cluster0.mscbbu1.mongodb.net/foodsDatabase'
  )
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.log('Connection error', e.messages)
  })

const db = mongoose.connection

module.exports = db
