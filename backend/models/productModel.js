const knex = require('knex')(require('../knexfile').development);

exports.findAll = () => {
  return knex('products').select('*');
};

exports.create = (product) => {
  return knex('products').insert(product).returning('*');
};
