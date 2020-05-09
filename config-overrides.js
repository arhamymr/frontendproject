/* eslint-disable import/no-extraneous-dependencies */
const {
  override, addWebpackAlias,
} = require('customize-cra');
const aliases = require('./aliases');

module.exports = override(
  addWebpackAlias(aliases),
);
