'use strict';

const responses = (function responses() {
  return {
    Intent: {
      Hello: {
        tell: 'Hello world',
      },
    },
  };
}());
module.exports = responses;
