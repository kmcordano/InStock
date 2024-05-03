/*
 * spa.fake.js
 * Fake data module
 */

spa.fake = (function() {
   'use strict';
   var 
      validUserList,
      isValidUser;

   validUserList = [
      "12345",
      "11111",
      "22222"
   ];

   isValidUser = (empNumber) => {
      console.log(empNumber);
      console.log(validUserList);
      return validUserList.includes(empNumber);
   };

   return {
      isValidUser : isValidUser
   };
}());