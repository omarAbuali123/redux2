// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.up = function(knex) {
  
// };

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.down = function(knex) {
  
// };






exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
      table.uuid('id').primary();
      table.string('name').notNullable();
      table.string('email').unique().notNullable();
      table.string('password').notNullable();
      table.string('role').notNullable(); // admin or customer
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('users');
  };
  