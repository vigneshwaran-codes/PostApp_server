const express = require('express')
const router = express.Router()
const mongo = require('../helper')

// read posts
router.get('/', async (req, res) => {
  const posts = await mongo.db.collection('posts').find().toArray()
  res.send(posts)
})
// create post
router.post('/', async (req, res) => {
  const post = req.body
  const posts = await mongo.db.collection('posts').insertMany(post)
  res.send(posts)
})
// update post
router.put('/:id', async (req, res) => {
  const id = req.params.id
  const post = req.body
  const posts = await mongo.db.collection('posts').updateOne({ id: +id }, { $set: post })
  res.send(posts)
})
// delete post
router.delete('/:id', async (req, res) => {
  const id = req.params.id
  const posts = await mongo.db.collection('posts').deleteOne({ id: +id })
  res.send(posts)
})

module.exports = router
