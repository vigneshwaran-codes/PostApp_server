const express = require('express')
const router = express.Router()
const mongo = require('../helper')

// read user
router.get('/', async (req, res) => {
  const users = await mongo.db.collection('users').find().toArray()
  res.send(users)
})
// create user
router.post('/', async (req, res) => {
  const user = req.body
  const users = await mongo.db.collection('users').insertMany(user)
  res.send(users)
})
// update user
router.put('/:id', async (req, res) => {
  const id = req.params.id
  const user = req.body
  const users = await mongo.db.collection('users').updateOne({ id: +id }, { $set: user })
  res.send(users)
})
// delete user
router.delete('/:id', async (req, res) => {
  const id = req.params.id
  const users = await mongo.db.collection('users').deleteOne({ id: +id })
  res.send(users)
})

module.exports = router
