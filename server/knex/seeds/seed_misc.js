
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'm2m Jumper', type: 'wire', description: 'Male-to-male jumper calbes', quantity: 20},
        {id: 2, name: 'm2f Jumper', type: 'wire', description: 'Male-to-female jumper calbes', quantity: 20},
        {id: 3, name: 'f2f Jumper', type: 'wire', description: 'Female-to-female jumper calbes', quantity: 20}
      ]);
    });
};
