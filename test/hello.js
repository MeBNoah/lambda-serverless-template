/* global describe it */
const LambdaTester = require('lambda-tester')
const expect = require('chai').expect

const myHandler = require('../src/hello').handler

describe('handler', function () {
  it('test success', function () {
    return LambdaTester(myHandler)
      .event({})
      .expectResult((result) => {
        expect(result.body).to.equal(JSON.stringify({
          'message': 'hello!'
        }))
      })
  })
})
