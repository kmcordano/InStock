/*
 * spa.model.js
 * Model module
 */

spa.model = (function() { 
   'use strict';
   var   
      configMap = {},
      stateMap = {
         user : null
      },
      isFakeData = true,
      login,
      initModule;

   login = (empNumber) => {
      if(isFakeData) {
         if(spa.fake.isValidUser(empNumber)) {
            console.log("login accepted");
         }
         else {
            console.log("invalid number");
         }
      }
   };

   initModule = () => {

   };

   return {
      initModule : initModule,
      login : login
   };
 }());