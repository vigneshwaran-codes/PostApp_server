const express = require('express')
const router = express.Router()

const userData = require('../services/usersData')

// read user
router.get('/', async (req, res) => {
  const users = await userData.getUsers()
  res.send(users)
})
// create user
router.post('/', async (req, res) => {
  const user = req.body
  const users = await userData.createUser(user)
  res.send(users)
})
// update user
router.put('/:id', async (req, res) => {
  const id = req.params.id
  const user = req.body
  const users = await userData.updateUser(id, user)
  res.send(users)
})
// delete user
router.delete('/:id', async (req, res) => {
  const id = req.params.id
  const users = await userData.deleteUser(id)
  res.send(users)
})

module.exports = router
