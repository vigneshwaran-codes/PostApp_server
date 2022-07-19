const mongo = require('../shared/helper')

const userService = {

  getUsers () {
    return mongo.db.collection('users').find().toArray()
  },
  createUser (data) {
    return mongo.db.collection('users').insertMany(data)
  },
  updateUser (id, data) {
    return mongo.db.collection('users').updateOne({ id: +id }, { $set: data })
  },
  deleteUser (id) {
    return mongo.db.collection('users').deleteOne({ id: +id })
  }

}

module.exports = userService
