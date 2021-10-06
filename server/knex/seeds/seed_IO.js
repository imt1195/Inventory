
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('IO').del()
    .then(function () {
      // Inserts seed entries
      return knex('IO').insert([
        {id: 1, name: 'servo', type: 'output', description: 'servo motor, compatible with arduinos and raspberr pi', quantity: 5},
        {id: 2, name: 'Cherry MX Browns', type: 'input', description: 'Cherry MX Brown keyswitches', quantity: 5},
        {id: 3, name: 'BeQuiet 120mm fans', type: 'output', description: 'BeQuite 120mm fans, PWM', quantity: 7}
      ]);
    });
};
