const knex = require('knex')(require('../knexfile').development);

exports.create = (user) => {
  return knex('users').insert(user).returning('*');
};

exports.findByEmail = (email) => {
  return knex('users').where({ email }).first();
};
