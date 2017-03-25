'use strict';

exports.register = function register(skill) {
  skill.onIntent('HelloIntent', () => ({ reply: 'Intent.Hello', to: 'die' }));
  skill.onIntent('LaunchIntent', () => ({ to: 'HelloIntent' }));
};
