'use strict';
const sdk = require('vote-battle-sdk');
function describe() {
  return { wrapper: 'vote-battle-utils', wraps: 'vote-battle-sdk', exports: Object.keys(sdk) };
}
module.exports = Object.assign({}, sdk, { describe });
