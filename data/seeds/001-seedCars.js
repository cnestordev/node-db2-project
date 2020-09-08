
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: '8300', Make: 'Jeep', Model: 'Wrangler', Milage: 15000 },
        { VIN: '2100', Make: 'Jeep', Model: 'Compass', Milage: 234 },
        { VIN: '1233', Make: 'Jeep', Model: 'Cherokee', Milage: 2344 }
      ]);
    });
};
