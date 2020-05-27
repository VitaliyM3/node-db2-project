
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.integer('VIN')
        .notNullable();
    tbl.text('Make', 25)
        .notNullable();
    tbl.text('Model', 25)
        .notNullable();
    tbl.integer('Mileage')
        .notNullable();
    tbl.text('Transmission', 10);
    tbl.text('Title', 10);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
