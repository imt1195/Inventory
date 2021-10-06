
exports.up = function(knex) {
    return knex.schema.createTable('Boards', function(table){
        table.bigIncrements('id')
        table.string('board')
        table.string('description')
        table.integer('quantity')
    })
};

exports.down = function(knex) {
    return knex.schema.droptable('Boards')
};
