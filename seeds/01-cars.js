
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: 1234556, make: 'Honda', model: 'Civic', mileage: 55000, transmission: 'automatic', title: 'clean' },
        { vin: 2745857, make: 'Honda', model: 'Accord', mileage: 150000, transmission: 'manual', title: 'salvage' },
        { vin: 2852578, make: 'Acura', model: 'Integra', mileage: 10000, transmission: 'automatic', title: 'clean' },
        { vin: 1752874, make: 'Mitsubishi', model: 'Evolution 9 MR', mileage: 65000, transmission: 'manual', title: 'rebuilt' },
        { vin: 1568872, make: 'Nissan', model: '350Z', mileage: 200000, transmission: 'automatic', title: 'clean' }
      ]);
    });
};
