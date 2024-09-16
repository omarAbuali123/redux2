/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};



















exports.up = function (knex) {
    return knex.schema.createTable('cart', (table) => {
      table.uuid('id').primary();
      table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE');
      table.uuid('product_id').references('id').inTable('products').onDelete('CASCADE');
      table.integer('quantity').notNullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('cart');
  };
  