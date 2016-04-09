require('../../test-helper');
const db = require('../../../lib/db');
const assert = require('chai').assert;
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

  it_('Should get friends Ids', function * () {
    var friends = yield Friend.getFriendIds(SeedObj.user1Id.user_id);
    expect(friends).to.be.instanceOf(Array);

    // again, --uncertain, not sure if checking length makes this test too dependent
    // on the seed file. We obviously are dependent but is this more easily effected
    // by changes to the seeds than we'd like?
    expect(friends).to.have.length(1);

    // - if no friends
  });

  it_('Should create friendship', function * () {
    var friend = yield Friend.createFriendship(SeedObj.user1Id.user_id, SeedObj.user2Id.user_id);
    var friends = yield Friend.getFriendIds(SeedObj.user1Id.user_id);
    expect(friends).to.be.instanceOf(Array);

    // I'm probably stuck on it: if we decide to be more picky about length, we can
    // do like to.have.length(originalLength + 1)
    expect(friends).to.have.length(2);

    // - if a user_id does not exist?!
  });

  it_('Should tell if users are friends', function * () {
    var test = yield Friend.usersAreFriends(SeedObj.user1Id.user_id, SeedObj.user3Id.user_id);

    // cool - assert!
    assert.equal(test, true); // chai options: be.true
    assert.typeOf(test, 'boolean'); // chai options: be.a('boolean') or be.an.instanceof(Boolean)

    // - if users aren't friends
  });

  it_('Should find and add friend', function * () {
    var friend = yield Friend.findAndAddFriend(SeedObj.user1Id.user_id, 'GregB');
    expect(friend.name).to.equal('Greg Brady');
    expect(friend.username).to.equal('GregB');

    // - if friend's username does not exist
  });

  it_('Should get drivers who are friends', function * () {
    var drivers = yield Friend.getFriendDrivers(SeedObj.user1Id.user_id);
    expect(drivers[0]).to.equal(SeedObj.user3Id.user_id);
    expect(drivers).to.be.an.instanceOf(Array);

    // - if no friends are driving
  });

  it_('Should get riders who are friends', function * () {
    var riders = yield Friend.getFriendRiders(SeedObj.user3Id.user_id);
    expect(riders).to.have.length(1);
    expect(riders).to.be.an.instanceOf(Array);

    // - if no friends are riding
  });
});
