// Update with your config settings.

// const knex = require('knex');

// const config = {
//   client: 'sqlite3',
//   connection: {
//     filename: './cars.db3',
//   },
//   useNullAsDefault: true,
// };

// module.exports = knex(config);


module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './cars.db3'
    },
    useNullAsDefault: true
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
