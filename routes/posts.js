const express = require('express')
const router = express.Router()

const postData = require('../services/postsData')

// read posts
router.get('/', async (req, res) => {
  const posts = await postData.getPosts()
  res.send(posts)
})
// create post
router.post('/', async (req, res) => {
  const post = req.body
  const posts = await postData.createPost(post)
  res.send(posts)
})
// update post
router.put('/:id', async (req, res) => {
  const id = req.params.id
  const post = req.body
  const posts = await postData.updatePost(id, post)
  res.send(posts)
})
// delete post
router.delete('/:id', async (req, res) => {
  const id = req.params.id
  const posts = await postData.deletePost(id)
  res.send(posts)
})

module.exports = router
