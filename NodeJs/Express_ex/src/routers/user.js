// @ts-check
/* eslint-disable no-console */

const express = require('express')

const multer = require('multer')

const upload = multer({ dest: 'uploads/' })

const { routes } = require('../../test/api')

const userRouter = express.Router()

const USERS = {
  15: {
    nickname: 'foo',
    profileImage: undefined,
  },
  16: {
    nickname: 'bar',
    profileImage: undefined,
  },
}

userRouter.get('/', (req, res) => {
  res.send('User list')
})

userRouter.param('id', (req, res, next, value) => {
  // @ts-ignore
  const user = USERS[value]

  if (!user) {
    const err = new Error('User not found.')
    err.statusCode = 404
    throw err
  }
  // @ts-ignore
  req.user = user
  next()
})

userRouter.get('/:id', (req, res) => {
  const resMimetype = req.accepts(['json', 'html'])
  if (resMimetype === 'json') {
    // @ts-ignore
    res.send(req.user)
  } else if (resMimetype === 'html') {
    res.render('user-profile', {
      // @ts-ignore
      nickname: req.user.nickname,
      userID: req.params.id,
      profileImageURL: `/uploads/${req.user.profileImage}`,
    })
  }
})

userRouter.post('/', (req, res) => {
  // Register user
  res.send('User registered')
})

userRouter.post('/:id/nickname', (req, res) => {
  // req.body : {"nickname": bar}
  // @ts-ignore
  const { user } = req
  const { nickname } = req.body

  user.nickname = nickname
  res.send(`User nickname update: ${nickname}`)
})

userRouter.post('/:id/profile', upload.single('profile'), (req, res, next) => {
  const { user } = req

  const { filename } = req.file

  user.profileImage = filename

  res.send(` User profile image uploaded. ${filename}`)
})

module.exports = userRouter
