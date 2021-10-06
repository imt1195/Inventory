
exports.up = function(knex) {
    return knex.schema.createTable('IO', function(table){
        table.bigIncrements('id')
        table.string('name')
        table.string('type')
        table.string('description')
        table.integer('quantity')
    })
};

exports.down = function(knex) {
    return knex.schema.droptable('IO')
};
