const mongo = require('../shared/helper')

const postService = {

  getPosts () {
    return mongo.db.collection('posts').find().toArray()
  },
  createPost (data) {
    return mongo.db.collection('posts').insertMany(data)
  },
  updatePost (id, data) {
    return mongo.db.collection('posts').updateOne({ id: +id }, { $set: data })
  },
  deletePost (id) {
    return mongo.db.collection('posts').deleteOne({ id: +id })
  }

}

module.exports = postService
