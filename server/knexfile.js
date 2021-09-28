// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'Inventory',
      user: 'Ian',
      password: '12335Tob'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'Inventory',
      user: 'Ian',
      password: '12335Tob'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'Inventory',
      user: 'Ian',
      password: '12335Tob'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
