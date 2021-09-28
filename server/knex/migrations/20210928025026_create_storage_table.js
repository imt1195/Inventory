
exports.up = function(knex) {
  return knex.schema.createTable('storage_devices', function(table){
      table.bigIncrements('id')
      table.string('name')
      table.string('manufacturer')
      table.string('formfactor')
      table.integer('capacity_gb')
      table.string('interface')
      table.integer('quantity')
  })
};

exports.down = function(knex) {
  return knex.schema.droptable('storage_devices')
};
