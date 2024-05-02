/*
 * spa.shell.js
 * Shell module for SPA
 */

spa.shell = (function(){
   // -------- BEGIN MODULE SCOPE VARIABLES -------- //
   var configMap = {
      main_html : String()
         + '<div class="spa-shell-header">'
            + '<div class="spa-shell-header-logo">'
               + '<h1>InStock</h1>'
            + '</div>'
            + '<div class="spa-shell-header-actions">'
               + '<a>Settings</a>'
               + '|'
               + '<a>About</a>'
            + '</div>'
         + '</div>'
         + '<div class="spa-shell-main">'
         + '</div>'
         + '<div class="spa-shell-footer">'
            + '<div class="spa-shell-footer-user">'
               + '<h2>Employee Name - 00000000</h2>'
            + '</div>'
            + '<div class="spa-shell-footer-timestamp">'
               + '<h2>Time - Date</h2>'
            + '</div>'
         + '</div>'
      },
      stateMap = {
         $container : null
      },
      jqueryMap = {},
      setJqueryMap,
      initModule;
   // -------- END MODULE SCOPE VARIABLES -------- //

   // -------- BEGIN UTILITY METHODS -------- //
   setJqueryMap = () => {
      var $container = stateMap.$container;
      jqueryMap = {
         $container : $container
      };
   };
   // -------- END UTILITY METHODS --------//

   // -------- BEGIN DOM METHODS -------- //
   // -------- END DOM METHODS -------- //

   // -------- BEGIN EVENT HANDLERS --------//
   // -------- ENDD EVENT HANDLERS --------//

   // -------- BEGIN PUBLIC METHODS -------- //
   initModule = ($container) => {
      stateMap.$container = $container;
      $container.html(configMap.main_html);
      setJqueryMap;
   };
   // -------- END PUBLIC METHODS -------- //

   return {
      initModule : initModule
   };
}());