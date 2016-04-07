require('../../test-helper');
const db = require('../../../lib/db');
const assert = require('chai').assert;
const routes = require(__server + '/index.js');
const dbCleaner = require('knex-cleaner');
const Message = require(__models + '/message');
const Seed = require('../../lib/seed_test');
var SeedObj = null;
