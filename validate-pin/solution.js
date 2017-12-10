
'use strict';
function validatePIN (pin) {
  if(pin = /^\d{4}$|^\d{6}$/.test(pin)){
    return true;
  }
  else return false;
}
