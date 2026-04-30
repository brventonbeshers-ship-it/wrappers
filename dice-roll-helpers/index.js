'use strict';
const sdk = require('dice-roll-sdk');
function describe() {
  return { wrapper: 'dice-roll-helpers', wraps: 'dice-roll-sdk', exports: Object.keys(sdk) };
}
module.exports = Object.assign({}, sdk, { describe });
