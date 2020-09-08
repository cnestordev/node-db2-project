const knex = require('knex')

const knexfile = require('../knexfile')

const enviornment = process.env.DATABASE_URL || "development"

const config = knexfile[enviornment]

module.exports = knex(config)