const { MongoClient } = require('mongodb')
const dotenv = require('dotenv')

dotenv.config()

// Mongo Config
const MONGO_URL = process.env.MONGO_URI
const dbName = process.env.DB_NAME

// Mongo client
const client = new MongoClient(MONGO_URL)

// connecting DB
const mongo = {
  // initial stage
  db: null,

  async connect () {
    await client.connect()
    console.log('Successfully connected to Mongodb')

    this.db = client.db(dbName)
    console.log(`${dbName} Database is selected`)
  }
}

module.exports = mongo
