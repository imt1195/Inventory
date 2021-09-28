
exports.up = function(knex) {
    return knex.schema.createTable('tools', function(table){
        table.bigIncrements('id')
        table.string('name')
        table.string('description')
        table.string('status')
    })
};

exports.down = function(knex) {
    return knex.schema.droptable('tools')
};
