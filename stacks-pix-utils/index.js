'use strict';
const sdk = require('stacks-pix-sdk');
function describe() {
  return { wrapper: 'stacks-pix-utils', wraps: 'stacks-pix-sdk', exports: Object.keys(sdk) };
}
module.exports = Object.assign({}, sdk, { describe });
