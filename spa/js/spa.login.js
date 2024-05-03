/*
 * spa.login.js
 * Login feature module for SPA
 */ 

spa.login = (function() {
   // -------- BEGIN MODULE SCOPE VARIABLES -------- //
   var
      configMap = {
         main_html : String()
            + '<div class="spa-login">'
               + '<div class="spa-login-welcome">'
                  + '<p>Welcome to InStock!</p>'
               + '</div>'
               + '<div class="spa-login-keypad">'
                  + '<div class="spa-login-keypad-button back">back</div>'
                  + '<div class="spa-login-keypad-button zero">0</div>'
                  + '<div class="spa-login-keypad-button enter">enter</div>'
                  + '<div class="spa-login-keypad-button one">1</div>'
                  + '<div class="spa-login-keypad-button two">2</div>'
                  + '<div class="spa-login-keypad-button three">3</div>'
                  + '<div class="spa-login-keypad-button four">4</div>'
                  + '<div class="spa-login-keypad-button five">5</div>'
                  + '<div class="spa-login-keypad-button six">6</div>'
                  + '<div class="spa-login-keypad-button seven">7</div>'
                  + '<div class="spa-login-keypad-button eight">8</div>'
                  + '<div class="spa-login-keypad-button nine">9</div>'
                  + '<div class="spa-login-keypad-box">'
                     + '<input type="text"/>'
                  + '</div>'
               + '</div>'
               + '<div class="spa-login-instr">'
                  + '<p>Swipe Employee Card <br/> or <br/>Enter Employee Number</p>'
               + '</div>'
            + '</div>'
      },
      stateMap = {
         $append_target : null,
         empNumber : ''
      },
      jqueryMap = {},
      setJqueryMap,
      onClickEnter,
      onClickKey,
      clearEmpNumber,
      appendEmpNumber,
      updateEmpNumber,
      enterEmpNumber,
      configModule,
      initModule;
   // -------- END MODULE SCOPE VARIABLES -------- //

   // -------- BEGIN UTILITY METHODS -------- //
   clearEmpNumber = () => {
      updateEmpNumber('');
   };

   appendEmpNumber = (number) => {
      updateEmpNumber(stateMap.empNumber.concat(number));
   };

   updateEmpNumber = (newValue) => {
      stateMap.empNumber = newValue;
      jqueryMap.$input[0].value = stateMap.empNumber;
   };

   enterEmpNumber = () => {};
   // -------- END UTILITY METHODS --------//

   // -------- BEGIN DOM METHODS -------- //
   setJqueryMap = () => {
      var 
         $append_target = stateMap.$append_target,
         $keypad = $append_target.find('.spa-login-keypad');

      jqueryMap = {
         $keypad    : $keypad,
         $backspace : $keypad.find('.back'),
         $enter     : $keypad.find('.enter'),
         $zero      : $keypad.find('.zero'),
         $one       : $keypad.find('.one'),
         $two       : $keypad.find('.two'),
         $three     : $keypad.find('.three'),
         $four      : $keypad.find('.four'),
         $five      : $keypad.find('.five'),
         $six       : $keypad.find('.six'),
         $seven     : $keypad.find('.seven'),
         $eight     : $keypad.find('.eight'),
         $nine      : $keypad.find('.nine'),
         $input     : $keypad.find('.spa-login-keypad-box input[type=text]')
      };
   };
   // -------- END DOM METHODS -------- //

   // -------- BEGIN EVENT HANDLERS --------//
   onClickKey = (event) => {
      var $tapped = $(event.target);

      if($tapped[0].textContent === "back") {
         clearEmpNumber();
      }
      else if($tapped[0].textContent === "enter") {

      }
      else {
         appendEmpNumber($tapped[0].textContent);
      }

      return false;
   };
   // -------- ENDD EVENT HANDLERS --------//

   // -------- BEGIN PUBLIC METHODS -------- //
   configModule = (configMap) => {};

   initModule = ($append_target) => {
      $append_target.append(configMap.main_html);
      stateMap.$append_target = $append_target;
      setJqueryMap();

      jqueryMap.$backspace.click(onClickKey);
      jqueryMap.$enter.click(onClickKey);
      jqueryMap.$zero.click(onClickKey);
      jqueryMap.$one.click(onClickKey);
      jqueryMap.$two.click(onClickKey);
      jqueryMap.$three.click(onClickKey);
      jqueryMap.$four.click(onClickKey);
      jqueryMap.$five.click(onClickKey);
      jqueryMap.$six.click(onClickKey);
      jqueryMap.$seven.click(onClickKey);
      jqueryMap.$eight.click(onClickKey);
      jqueryMap.$nine.click(onClickKey);

      return true;
   };
   // -------- END PUBLIC METHODS -------- //

   return {
      configModule : configModule,
      initModule : initModule
   };
}());