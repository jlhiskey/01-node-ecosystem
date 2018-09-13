'use strict';

const arithmetic = module.exports = {};

arithmetic.addition = (a, b) => {
  //! Vinicio - Error checking is important in EVERY function

  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
   
  return null;
};

arithmetic.subtraction = (a, b) => {
  //! Vinicio - Error checking is important in EVERY function

  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }
    
  return null;
};
