'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
	ENV_CONFIG: '"dev"',
	BASE_API: '""'//此处不要写
})
