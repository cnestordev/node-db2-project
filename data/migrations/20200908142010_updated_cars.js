
exports.up = function (knex) {
    return knex.schema.table('cars', tbl => {
        tbl.text('type')
        tbl.text('status')
    })
};

exports.down = function (knex) {
    return knex.schema.table('cars', tbl => {
        tbl.dropColumn('type')
        tbl.dropColumn('status')
    })
};
