/*
  DATABASE CONFIGURATION

    Postico is a fantastic postgresql database visualizer!
    'psql db/' is a great tool for command-line db access!

    Hi! To get a brand-new development database up and running:
      > navigate to project directory

      > ensure PostGreSql is installed
        > run 'postgres' in your terminal and see if you have anything
          > if not, 'brew install postgres'

      > 'initdb db/' to initialize a database system
        > This creates a file structure with a root folder of 'db/' in your
          project directory. This is where postgres stores a whole load of
          information that represents a database. We have not created a
          database yet - only a place to put one.

      > To use a postgres database, there are two entities involved: a Server
        and a Client. Just like HTTP, a server responds to requests from some
        client. A server processes requests to determine what information to
        send back. We need to start a database-server for our app-server to
        interact with.
        > open a new terminal, make sure you're in the project root directory
        > 'postgres -D db/' to start the database server

      > Now we have a running database-server, we need to tell it to create
        the actual database.
        > In a new terminal window, 'createdb development' to create a
          database named development.
        > This is processed and stored in the db/ folder we made just a couple
          steps ago.

      The database should be up, empty, and grump-ily accepting connections.
      If you want to run tests, this should be sufficient. If you want to
      use it with sample data for development, read the next section.

  ************************************

  DATABASE SEEDING for development

    To seed the database with data so that model operations can be tested
    run the ^^above^^ database setup steps with the following additions:
      > 'npm install -g knex' to access knex on the command line
      > Now we need to build the database structure we've defined onto the database.
        We run a schema file that to do so. Once it's done, you can ctrl-C out.
        > 'node lib/schema.js'
      > 'knex --env development seed:run' to seed the development database
        with data monsters!

    To verify that you've been successful we should check the database.
      > 'psql development' to open a command-line database explorer
      > '\d' to look at the tables in our database.
        > if 'no relations exist', you've done something wrong!
      > You can run postgreSQL commands here (don't forget semi-colons!)
        > 'SELECT * FROM message;'

  ***********************************

  DATABASE CONFIGURATION for test

    With a running postgres server process (postgres -D)
      > 'NODE_ENV=test node lib/schema.js'
      Do not seed database for tests

    Before running tests, make sure to enter 'creatdb test'
*/

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'development',
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './lib/seeds',
    },
    debug: false, // set true for verbose database operations
  },
  test: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'test',
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations',
    },
    debug: false, // set true for verbose database operations
  },
};
