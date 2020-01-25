'use strict';


exports.fizzBuzzAnswer = function (int1, int2, limit, str1, str2) {
  return new Promise(function (resolve, reject) {
    try {
      let fizzbuzz = [];
      for (let i = 1; i <= limit; i++) {
        if (i % int1 === 0 && i % int2 === 0) {
          fizzbuzz.push(str1 + str2);
        }
        else if (i % int1 === 0) {
          fizzbuzz.push(str1);
        }
        else if (i % int2 === 0) {
          fizzbuzz.push(str2);
        } else {
          fizzbuzz.push(i);
        }
      }
      resolve(fizzbuzz.toString());
    } catch (error) {
      reject(error);
    }
  });
};