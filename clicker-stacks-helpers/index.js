'use strict';
const sdk = require('clicker-stacks-sdk');
function describe() {
  return { wrapper: 'clicker-stacks-helpers', wraps: 'clicker-stacks-sdk', exports: Object.keys(sdk) };
}
module.exports = Object.assign({}, sdk, { describe });
