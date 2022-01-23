/* eslint-disable no-undef */
/* eslint-disable node/no-unpublished-require */

const supertest = require('supertest')
const app = require('./app')

const request = supertest(app)

test('retrieve user json', async () => {
  const result = await request.get('/users/15').accept('application/json')
  console.log(result.body)

  expect(result.body).toMatchObject({
    nickname: expect.any(String),
  })
})

test('retrieve user page', async () => {
  const result = await request.get('/users/15').accept('text/html')

  expect(result.text).toMatch(/^<html>.*<\/html>$/)

  console.log(result.text)
})

test('update nicknmae', async () => {
  const newNickname = 'newNickname'

  const result = await request
    .post('/users/15/nickname')
    .send({ nickname: newNickname })
  expect(result.status).toBe(200)

  const userResult = await request.get('/users/15').accept('application/json')
  expect(userResult.status).toBe(200)
  expect(userResult.body).toMatchObject({
    nickname: newNickname,
  })

  console.log(result)
})
