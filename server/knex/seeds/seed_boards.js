
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Boards').del()
    .then(function () {
      // Inserts seed entries
      return knex('Boards').insert([
        {id: 1, board: 'Arduino Uno', description: 'Arduino Uno microcontroller', quantity: 1},
        {id: 2, board: 'Arduino Uno Mega', description: 'Arduino Uno Mega microcontroller, more GPIO pins than Arduino Uno', quantity: 1},
        {id: 3, board: 'Raspberry Pi 3B+', description: 'Raspberry Pi 3B+, 2GB RAM, 16GB microsd card boot drive, in case', quantity: 1}
      ]);
    });
};
