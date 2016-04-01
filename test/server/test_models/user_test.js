require('../../test-helper');
const db = require('../../../lib/db');
const request = require('supertest');
const routes = require(__server + '/index.js');
const dbCleaner = require('knex-cleaner');
const User = require(__models + '/user');
const Seed = require('../../lib/seed_test');

var SeedObj = null;

describe('User Models', function () {

  beforeEach_(function * () {
    yield Seed.cleaner();
    SeedObj = yield* Seed.runner();
  });

  it_('Should get all users', function * () {
    var users = yield User.getUsers();
    expect(users[0].user_id).to.equal(SeedObj.user1Id.user_id);
    expect(users).to.be.an.instanceOf(Array);
    expect(users).to.have.length(4);
  });

  it_('Should find user by something', function * () {
    var user = yield User.findUserBy('username', 'GregB');
    expect(user.user_id).to.equal(SeedObj.user2Id.user_id);
    expect(user).to.be.an.instanceOf(Object);
  });

  it_('Should find user by ID', function * () {
    var user = yield User.findUserById(SeedObj.user3Id.user_id);
    expect(user.username).to.equal('CharlieBrizzown');
    expect(user).to.be.an.instanceOf(Object);
  });

});
