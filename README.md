# responsible
A safe driving app for friends 

## Development setup and usage

  Hello! So, you'd like to run Fleet in your local environment? Just a few easy steps!

* Make sure you've got postgres installed. If the 'postgres' terminal command is not recognized, ask Google how to install PostgreSQL.

* Clone or fork this repository.
* Install dependencies
```sh
  npm install && npm install -g knex
```
* Start up a PostgreSQL server process. In a terminal on the project directory,
```sh
  initdb db/ && postgres -D db/
```
* Create a database, apply a schema, and seed some data (adds interactivity)
```sh
  createdb development && node lib/schema.js && knex seed:run
```
* Run the server
```sh
  npm run dev-server
```
* Open your browser to [localhost:1337](localhost:1337)


## Primary technologies
  * Clientside
    * __React__ | __Redux__ | __Immutable__ | __Socket.io__
  * Serverside
    * __Node__ | __PostgreSQL__ | __Express__ | __Socket.io__
