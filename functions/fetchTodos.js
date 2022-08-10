exports.handler = async (event, context, callback) => {

  const mongoose = require('mongoose')
  require('dotenv').config({path: process.cwd() + '/.env'})

  try {
    await mongoose.connect(process.env.MONGODB_URL, { 
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    callback(null, {
      statusCode: 200,
      body: 'No worries, all is working fine!'
    })
  } catch (error) {
    callback(null, {
      statusCode: 200,
      body: `worrry!!!! ${error}`
    })
  }
}