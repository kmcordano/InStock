/*
 * spa.actions.js
 * Actions feature module for SPA
 */ 

spa.actions = (function() {
   'use strict';
   // -------- BEGIN MODULE SCOPE VARIABLES -------- //
   var
      configMap = {
         main_html : String()
            + '<div class="spa-actions">'
               + '<div class="spa-actions-list>'
                  + '<div class="spa-actions-list-button">'
                     + 'New Transaction'
                  + '</div>'
                  + '<div class="spa-actions-list-button">'
                     + 'View Inventory Levels'
                  + '</div>'
                  + '<div class="spa-actions-list-button">'
                     + 'View Logs'
                  + '</div>'
                  + '<div class="spa-actions-list-button"></div>'
                  + '<div class="spa-actions-list-button"></div>'
                  + '<div class="spa-actions-list-button"></div>'
               + '</div>'
            + '</div>'
            
      },
      stateMap = {
         $append_target : null,
      },
      jqueryMap = {},
      setJqueryMap,
      configModule,
      initModule;
   // -------- END MODULE SCOPE VARIABLES -------- //

   // -------- BEGIN UTILITY METHODS -------- //
   // -------- END UTILITY METHODS --------//

   // -------- BEGIN DOM METHODS -------- //
   setJqueryMap = () => {

   };
   // -------- END DOM METHODS -------- //

   // -------- BEGIN EVENT HANDLERS --------//
   // -------- END EVENT HANDLERS --------//

   // -------- BEGIN PUBLIC METHODS -------- //
   configModule = (configMap) => {};

   initModule = ($append_target) => {
      $append_target.append(configMap.main_html);
      stateMap.$append_target = $append_target;
      setJqueryMap();

      return true;
   };
   // -------- END PUBLIC METHODS -------- //

   return {
      configModule : configModule,
      initModule : initModule
   };
}());