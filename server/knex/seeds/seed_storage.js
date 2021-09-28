
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'WD Blue', manufacturer: 'Western Digital', form_factor: '5.35 inch', capacity_gb: 1028, interface: 'SATA', quantity: 1},
        {id: 2, name: 'WD Black', manufacturer: 'Western Digital', form_factor: '5.35 inch', capacity_gb: 1028, interface: 'SATA', quantity: 1},
        {id: 3, name: 'Seagate BarraCuda', manufacturer: 'Seagate', form_factor: '5.35 inch', capacity_gb: 2056, interface: 'SATA', quantity: 1}
      ]);
    });
};
