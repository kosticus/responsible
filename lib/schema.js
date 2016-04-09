/*
	With a running postgres server process (postgres -D)
		> For development:
			'node lib/schema.js'
		> For testing:
			'NODE_ENV=test node lib/schema.js'
*/

var knex = require('./db');

knex.schema.createTableIfNotExists('users', function (table) {
  table.increments('user_id').primary();
  table.string('username').notNullable().unique();
  table.string('password');
  table.string('name').notNullable();
  table.string('address');
  table.integer('zipcode');
  table.string('phone_number');
  table.string('email').unique();
  table.string('emergency_contact');
  table.string('avatar').notNullable();
  table.string('OAuthVerify');
})
.createTableIfNotExists('cars', function (table) {
  table.increments('car_id').primary();
  table.integer('foreign_user').references('user_id').inTable('users').notNullable();
  table.string('make').notNullable();
  table.string('model').notNullable();
  table.string('capacity').notNullable();
  table.string('color').notNullable();
})
.createTableIfNotExists('friends', function (table) {
  table.increments('friendship_id').primary();
  table.integer('foreign_friend1').references('user_id').inTable('users').notNullable();
  table.integer('foreign_friend2').references('user_id').inTable('users').notNullable();
})
.createTableIfNotExists('riders', function (table) {
  table.increments('rider_id').primary().notNullable();
  table.integer('foreign_rider').references('user_id').inTable('users').notNullable().unique();
  table.string('location').notNullable();
  table.timestamp('created_at');
})
.createTableIfNotExists('drivers', function (table) {
  table.increments('driver_id').primary();
  table.integer('foreign_driver').references('user_id').inTable('users').notNullable().unique();
  table.string('location').notNullable();
  table.timestamp('created_at');
})
.createTableIfNotExists('rides', function (table) {
  table.increments('ride_id').primary();
  table.integer('ride_driver').references('user_id').inTable('users').notNullable();
  table.integer('ride_rider').references('user_id').inTable('users').notNullable();
  table.boolean('completed').defaultTo(false);
  table.boolean('canceled').defaultTo(false);
  table.timestamp('created_at');
})
.createTableIfNotExists('messages', function (table) {
  table.increments('messages_id').primary();
  table.string('message').notNullable();

  // foreign_ride integer references rides(ride_id);
  table.integer('author').references('user_id').inTable('users').notNullable();
  table.timestamp('created_at');
})
.then(function () {

  // To easily delete table entries that have dependent tables (e.g. messages depend on rides)
  //  we use ON DELETE CASCADE. enter, raw SQL
  return Promise.all([
    knex.schema.raw
    ('alter table messages ADD foreign_ride INTEGER references rides(ride_id) ON DELETE CASCADE'),
  ]);
})
.then(function (result) {
  console.log('Successfully applied schema.');
  knex.destroy();
})
.catch(function (error) {
  console.log('Warning: Database Error', error);
});
