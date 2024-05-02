/*
 * spa.js
 * Root namespace module
 */

var spa = (function() {
   var initModule = ($container) => {
      spa.shell.initModule($container);
   };

   return { initModule : initModule };
}());