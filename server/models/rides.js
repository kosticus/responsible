require('../server-helpers');
var db      = require('../../lib/db.js');
const first = require('ramda').head;

var Ride = {};
module.exports = Ride;

/*
* THESE ARE RIDES MODELS
*/

// Get all rides

// Create A ride
Ride.createRide = function (attrs) {
  return db('rides').insert(attrs, ['ride_id', 'ride_driver', 'ride_rider'])
    .catch(reportError('error creating ride in db'))
    .then(first)
    .then(function (ride) {
      return Ride.deleteRiderAndDriver(attrs.ride_rider, attrs.ride_driver)
        .then(() => ride);
    });
};

Ride.getRides = function () {
  return db('rides').select('*')
    .catch(reportError('error getting all rides'));
};

// Delete A Ride
Ride.deleteRide = function (rideId) {
  return db('rides').where({ ride_id: rideId }).del()
    .catch(reportError('error deleting ride by id'));
};

Ride.getRideById = function (id) {
  return db('rides').where({ ride_id: id })
    .catch(reportError('error getting ride by id'));
};

/*
* THESE ARE RIDER MODELS
*/

// Get all riders ids. returns array
Ride.getRiders = function () {
  return db.select('*').from('riders')
    .catch(reportError('error getting all riders'))
    .then(function (riders) {
      return riders.map(function (rider) {
        return {
          user_id: rider.foreign_rider,
          location: JSON.parse(rider.location),
        };
      });
    });
};

// Get a rider by ID
Ride.getRiderById = function (userId) {
  return db.select('*').from('riders').where({ foreign_rider: userId })
    .catch(reportError('error retrieving rider by userId'))
    .then(first);
};

// Create a rider
Ride.createRider = function (attrs) {
  return db('riders').insert(attrs, ['rider_id', 'foreign_rider', 'location'])
    .then(first)
    .catch(reportError('error creating rider in db'));
};

/*
  Delete a rider row by the foreign_rider userId that it represents
*/
Ride.deleteRider = function (user_id) {
  return db('riders').where({ foreign_rider: user_id }).del()
    .catch(reportError('error deleting rider by id'));
};

/*
* THESE ARE DRIVER MODELS
*/

// Get all drivers, returns array of their ids
Ride.getDrivers = function () {
  return db.select('*').from('drivers')
    .catch(reportError('error getting all drivers'))
    .then(function (drivers) {
      return drivers.map(driver => driver.foreign_driver);
    });
};

// Get driver by ID
Ride.getDriverById = function (userId) {
  return db.select('*').from('drivers').where({ foreign_driver: userId })
    .catch(reportError('error retrieving driver by userId'))
    .then(first);
};

/* Create a new driver
Attrs are userId and location. Location is stringified to put in DB
Location will probably need parsing upon retrieval
*/
Ride.createDriver = function (attrs) {
  foreign_driver = attrs.userId;
  location = JSON.stringify(attrs.location);
  return db('drivers')
    .insert({ foreign_driver, location }, ['driver_id', 'foreign_driver', 'location'])
    .then(first)
    .catch(reportError('error creating driver in db'));
};

// Deletes driver
Ride.deleteDriver = function (id) {
  return db('drivers').where({ foreign_driver: id }).del()
    .catch(reportError('error deleting driver by id'));
};


/*
* THESE ARE OTHER MODELS
*/

Ride.deleteRiderAndDriver = function (riderId, driverId) {
  return Promise.all([
    Ride.deleteRider(riderId),
    Ride.deleteDriver(driverId),
  ]);
};
