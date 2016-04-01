require('../../test-helper');
const db = require('../../../lib/db');
const request = require('supertest');
const routes = require(__server + '/index.js');
const dbCleaner = require('knex-cleaner');
const Friend = require(__models + '/friends');
const Seed = require('../../lib/seed_test');

var SeedObj = null;

describe('Friends Models', function () {

  beforeEach_(function * () {
    yield Seed.cleaner();
    SeedObj = yield* Seed.runner();
  });

  it_('Should get friend IDs', function * () {
    var friends = yield Friend.getFriendIds(SeedObj.user1Id.user_id);
    expect(friends[0]).to.equal(SeedObj.user3Id.user_id);
    expect(friends).to.be.an.instanceOf(Array);
  });

  it_('Should get drivers who are friends', function * () {
    var drivers = yield Friend.getFriendDrivers(SeedObj.user1Id.user_id);
    expect(drivers[0]).to.equal(SeedObj.user3Id.user_id);
    expect(drivers).to.be.an.instanceOf(Array);
  });

  xit_('Should get riders who are friends', function * () {
    var riders = yield Friend.getFriendRiders(SeedObj.user3Id.user_id);
    expect(riders).to.have.length(1);
    expect(riders).to.be.an.instanceOf(Array);
  });
});
