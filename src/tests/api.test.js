'use strict';
process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let config = require('../config');

process.env.PORT = config.server.port || 80;

let should = chai.should();
chai.use(chaiHttp);


describe('GET /', function () {
  it('it should failed with not found', function (done) {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});

describe('GET /v1', function () {
  it('it should failed with not found', function (done) {
    chai.request(app)
      .get('/v1')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

});

describe('GET /v1/fizzbuzz', function () {
  it('it should success and return answer n°1', function (done) {
    chai.request(app)
      .get('/v1/fizzbuzz')
      .query({ int1: 2, int2: 3, limit: 14, str1: 'salut', str2: 'yes' })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.have.property('body');
        res.body.should.have.property('answer');
        res.body.answer.should.equals('1,salut,yes,salut,5,salutyes,7,salut,yes,salut,11,salutyes,13,salut');
        done();
      });
  });

  it('it should failed because missing all parameters', function (done) {
    chai.request(app)
      .get('/v1/fizzbuzz')
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('message');
        res.body.should.have.property('errors');
        res.body.errors.should.be.a('array');
        res.body.errors.length.should.be.equals(5);
        done();
      });
  });

  it('it should success and return answer n°2', function (done) {
    chai.request(app)
      .get('/v1/fizzbuzz')
      .query({ int1: 2, int2: 5, limit: 8, str1: 'na', str2: 'ok' })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('answer');
        res.body.answer.should.equals('1,na,3,na,ok,na,7,na');
        done();
      });
  });

  it('it should failed because missing one parameter', function (done) {
    chai.request(app)
      .get('/v1/fizzbuzz')
      .query({ int1: 2, int2: 5, str1: 'na', str2: 'ok' })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('message');
        res.body.message.should.be.equals(`request.query should have required property 'limit'`);
        res.body.should.have.property('errors');
        res.body.errors.should.be.a('array');
        res.body.errors.length.should.be.equals(1);
        done();
      });
  });
});


describe('GET /v1/metrics', function () {
  it('it should success and return metrics', function (done) {
    chai.request(app)
      .get('/metrics')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});