Simple Alexa Skill using voxa framework
=====

### Development Setup

* `git clone` this repository
* Install and use Node v0.10.36
* Run `npm install`
* Edit `config/local.json` with all of the requisite fields.

`npm run watch` will start the server and watch for changes.


### Directory Structure

	`config/` -> Environment variables or configuration
	`services/` -> API clients, Authentications and Extras
	`skill/` -> Amazon Echo Skill login, the state machine and flow
	`speechAssets/` -> Amazon Echo Utterances, Intent Schema and Custom Slots.
	`tests/` -> Unit Tests
	`www/` -> Public site, expose for authentication.
	`gulpfile.js` -> Gulp tasks
	`package.json` -> Dependencies
	`README.md`
