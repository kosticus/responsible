require('../server-helpers');
var UserAPI = require('express').Router();

var Ride = require(__models + '/ride');
var User = require(__models + '/user');
console.log('WELCOME TO USER-API!');
module.exports = UserAPI;

//Get all users
UserAPI.get('/', function (req, res) {
  User.getUsers()
    .then(users => res.send(users))
    .catch(err => console.log(err));
});

//Get User by ID
UserAPI.get('/:id', function (req, res) {
  User.findUserById(req.params.id)
    .then(user => res.send(user, 200))
    .catch(err => console.log('no such user', err));
});

//Create a user
UserAPI.post('/', function (req, res) {
  var user = req.body;
  User.createUser(user)
    .then(sendStatusAndData(res, 201))
    .catch(sendStatusAndError(res, 500, ('error creating user')));
});

UserAPI.put('/:id', function (req, res) {
  var id = req.params.id;
  User.updateById(id, request.body)
    .then(() => User.findByID(id))
    .then(user => res.send(user));
});

UserAPI.post('/*', function (req, res) {
  console.log('request:', req);
  console.log(req.url);
  res.send(200);
});
