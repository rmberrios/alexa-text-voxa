'use strict';

exports.register = function register(skill) {
  skill.onIntent('HelloIntent', (alexaEvent) => {
    console.log('hello intent');
    return { reply: 'Intent.Hello', to: 'die' };
  });
};
