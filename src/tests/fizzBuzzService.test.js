'use strict';
process.env.NODE_ENV = 'test';

let chai = require('chai');
let fizzBuzzService = require('./../services/fizzBuzzService');

let should = chai.should();


describe('test of fizz buzz answer function n°1', function () {
    it('return is valid string', async function () {
        var isValid = await fizzBuzzService.fizzBuzzAnswer(2, 3, 14, 'salut', 'yes');
        isValid.should.equal('1,salut,yes,salut,5,salutyes,7,salut,yes,salut,11,salutyes,13,salut');
    });
});


describe('test of fizz buzz answer function n°2', function () {
    it('return is valid string', async function () {
        var isValid = await fizzBuzzService.fizzBuzzAnswer(3, 6, 10, 'fizz', 'buzz');
        isValid.should.equal('1,2,fizz,4,5,fizzbuzz,7,8,fizz,10');
    });
});