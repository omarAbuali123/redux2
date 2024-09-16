const knex = require('knex')(require('../knexfile').development);

exports.create = (cartItem) => {
  return knex('cart').insert(cartItem).returning('*');
};

exports.findByUserId = (userId) => {
  return knex('cart')
    .join('products', 'cart.product_id', 'products.id')
    .where('cart.user_id', userId)
    .select('cart.id', 'products.name', 'products.price', 'cart.quantity');
};
