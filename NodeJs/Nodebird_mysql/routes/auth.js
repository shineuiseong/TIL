const express = require('express')
const passport = require('passport')
const bcrypt = require('bcrypt')
const { isLoggedIn, isNotLoggedIn } = require('./middlewares')
const User = require('../models/user')

const router = express.Router()

//auth 접두사 => /auth/join ,/auth/login, /auth/logout
//로컬 회원가입
router.post('/join', isNotLoggedIn, async (req, res, next) => {
  const { email, nick, password } = req.body
  try {
    //같은 이메일로 가입한 사용자가 있는지 조회
    const exUser = await User.findOne({ where: { email } })
    if (exUser) {
      //회원가입페이지로 되돌림, 에러 쿼리스트링 표시
      return res.redirect('/join?error=exist')
    }
    const hash = await bcrypt.hash(password, 12)
    await User.create({
      email,
      nick,
      password: hash,
    })
    return res.redirect('/')
  } catch (error) {
    console.error(error)
    return next(error)
  }
})

// 로그인

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError)
      return next(authError)
    }
    if (!user) {
      return res.redirect(`/loginError=${info.message}`)
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError)
        return next(loginError)
      }
      return res.redirect('/')
    })
    // 미들웨어 내의 미들웨어에는 (req,res,next) 붙임
  })(req, res, next)
})

// 로그아웃

router.get('/logout', isLoggedIn, (req, res) => {
  req.logOut()
  req.session.destroy()
  res.redirect('/')
})

// kakao
router.get('/kakao', passport.authenticate('kakao'))

router.get(
  '/kakao/callback',
  passport.authenticate('kakao', {
    failureRedirect: '/',
  }),
  (req, res) => {
    res.redirect('/')
  }
)

//구글
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/',
  }),
  (req, res) => {
    res.redirect('/')
  }
)

module.exports = router
