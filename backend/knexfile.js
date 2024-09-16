module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'redux', // اسم قاعدة البيانات
      user: 'postgres', // اسم المستخدم
      password: 'WwEeRr1234567' // كلمة المرور
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'redux',
      user: 'postgres',
      password: 'WwEeRr1234567'
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
      database: 'redux',
      user: 'postgres',
      password: 'WwEeRr1234567'
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








// module.exports = {
//   development: {
//     client: 'pg',
//     connection: {
//       database: 'redux',
//       user: 'postgres',
//       password: 'WwEeRr1234567'
//     },
//     migrations: {
//       directory: './migrations',
//     },
//     seeds: {
//       directory: './seeds',
//     }
//   }
// };
