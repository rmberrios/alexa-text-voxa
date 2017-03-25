'use strict';

const _ = require('lodash');
const skill = require('../skill/MainStateMachine');
const expect = require('chai').expect;
const views = require('../skill/views');

describe('Skill', () => {
  it('should reply with Intent.Launch', () => {
    const event = {
      session: {
        application: {
          applicationId: '',
        },
        user: {
          accessToken: '',
        },
      },
      request: {
        type: 'LaunchRequest',
      },
    };

    return skill.execute(event)
      .then((reply) => {
        expect(reply.toJSON().response.outputSpeech.ssml).to.contain(_.get(views, 'Intent.Hello.tell'));
      });
  });
});
