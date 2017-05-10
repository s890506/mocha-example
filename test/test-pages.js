/* global describe it */
var expect = require('chai').expect
var request = require('request')
var url = 'http://localhost:3000/'

describe(url + ' 測試程序', function () {
  describe('GET /', function () {
    it('回傳 200 狀態碼', function (done) {
      statusCode200(done)
    })

    it('回傳值為 Hello World', function (done) {
      request(url, function (error, response, body) {
        if (error) throw error
        var obj = JSON.parse(body)

        expect(obj).to.have.any.keys('msg')
        expect(obj.msg).to.have.string('Hello World')
        done()
      })
    })
  })

  describe('POST /', function () {
    it('回傳 200 狀態碼', function (done) {
      statusCode200(done)
    })

    it('回傳值為 Hi! larry.', function (done) {
      request.post({url: url, form: {name: 'larry'}}, function (error, response, body) {
        if (error) throw error
        var obj = JSON.parse(body)

        expect(obj).to.have.any.keys('msg')
        expect(obj.msg).to.have.string('Hi! larry.')
        done()
      })
    })
  })
})

function statusCode200 (done) {
  request(url, function (error, response, body) {
    if (error) throw error
    expect(response.statusCode).to.equal(200)
    done()
  })
}
