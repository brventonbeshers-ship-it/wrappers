'use strict';
const sdk = require('coin-flip-sdk');
function describe() {
  return { wrapper: 'coin-flip-helpers', wraps: 'coin-flip-sdk', exports: Object.keys(sdk) };
}
module.exports = Object.assign({}, sdk, { describe });
