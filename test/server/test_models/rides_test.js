require('../../test-helper');
const db = require('../../../lib/db');
const assert = require('chai').assert;
const routes = require(__server + '/index.js');
const dbCleaner = require('knex-cleaner');
const Ride = require(__models + '/rides');
const Seed = require('../../lib/seed_test');
var SeedObj = null;

describe('Rides Models', function () {

  beforeEach_(function * () {
    yield Seed.cleaner();
    SeedObj = yield* Seed.runner();
  });

  it_('Create a ride in rides table', function * () {
    var attrs = {
      ride_driver: SeedObj.driver1.foreign_driver,
      ride_rider: SeedObj.rider1.foreign_rider,
    };

    var rides = yield Ride.createRide(attrs);
    assert.typeOf(rides, 'object');
    assert.typeOf(rides.ride_id, 'number');
    assert.typeOf(rides.ride_driver, 'number');
    assert.typeOf(rides.ride_rider, 'number');
  });

  it_('get all rides in ride table', function * () {
    var attrs = {
      ride_driver: SeedObj.driver1.foreign_driver,
      ride_rider: SeedObj.rider1.foreign_rider,
    };

    yield Ride.createRide(attrs);
    var rides = yield Ride.getRides();
    var ride = rides[0];
    assert.typeOf(rides, 'array');
    assert.lengthOf(rides, 1);
    assert.typeOf(ride, 'object');
    assert.typeOf(ride.ride_id, 'number');
    assert.typeOf(ride.ride_driver, 'number');
    assert.typeOf(ride.completed, 'boolean');
    assert.typeOf(ride.canceled, 'boolean');
  });


});
