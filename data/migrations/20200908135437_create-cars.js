exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments()
        tbl.string('VIN', 50).unique().notNullable()
        tbl.string('Make', 50).notNullable()
        tbl.string('Model', 50).notNullable()
        tbl.integer('Milage').notNullable()
    })
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars')
}