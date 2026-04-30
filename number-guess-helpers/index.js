'use strict';
const sdk = require('number-guess-sdk');
function describe() {
  return { wrapper: 'number-guess-helpers', wraps: 'number-guess-sdk', exports: Object.keys(sdk) };
}
module.exports = Object.assign({}, sdk, { describe });
