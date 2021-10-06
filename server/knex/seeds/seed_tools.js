
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'Soldering Iron', description: 'Hakko 850W Soldering iron', status: 'Available'},
        {id: 2, name: 'Digital Caliper', description: 'Digital Caliper', status: 'Available'},
        {id: 3, name: 'Multimeter', description: 'Handheld Multimeter', status: 'Broken/Needs Maintenance'},
        {id: 4, name: 'Ender 3 Pro', description: 'Ender 3 Pro 3D printer', status: 'Available'}
      ]);
    });
};
