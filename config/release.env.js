'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const i18nDomainLabel = require('./i18nDomainLabel')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  KEEPWORK_API_PREFIX: `"https://release${i18nDomainLabel('-')}.keepwork.com/api/wiki/models"`,
  GITLAB_API_PREFIX: `"https://api-release${i18nDomainLabel('-')}.keepwork.com/git"`,
  ES_GATEWAY_BASE_URL: `"https://api-release${i18nDomainLabel('-')}.keepwork.com/es"`
})
