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
    return knex.schema.createTable('products', (table) => {
      table.uuid('id').primary();
      table.string('name').notNullable();
      table.decimal('price').notNullable();
      table.text('description');
      table.uuid('created_by').references('id').inTable('users').onDelete('CASCADE');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('products');
  };
  