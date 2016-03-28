
exports.seed = function (knex) {
  return knex('users').insert([
    {
      username: 'darkz',
      password: 'A',
      name: 'Zack Ab',
      address: '1904 Guadalupe St Suite C, Austin',
      zipcode: 90210,
      phone_number: '2032409987',
      email: 'arial@fonts.com',
      emergency_contact: 'test1',
      avatar: 'http://www.adweek.com/socialtimes/files/2012/03/twitter-egg-icon.jpg',
    },
    {
      username: 'upiderz',
      password: 'A',
      name: 'Bob Ronnie',
      address: '1101 Baylor St, Austin, TX 78703',
      zipcode: 90210,
      phone_number: '2032409987',
      email: 'timesnewroman@fonts.com',
      emergency_contact: 'test1',
      avatar: 'http://12840-presscdn-0-47.pagely.netdna-cdn.com/wp-content/uploads' +
        '/2013/10/84391D_1000x1000.jpg',
    },
    {
      username: 'livelyz',
      password: 'A',
      name: 'Barry Schnitzel',
      address: '86 Rainey St, Austin, TX 78701',
      zipcode: 90210,
      phone_number: '2032409987',
      email: 'calibri@fonts.com',
      emergency_contact: 'test1',
      avatar: 'http://orig02.deviantart.net/024f/f/2012/155/b/c/insect_' +
        'alien_by_stillenacht-d52akoh.jpg',
    },
    {
      username: 'wambat',
      password: 'A',
      name: 'Zelgar Qwezar',
      address: '708 Brazos, 17th floor, CA',
      zipcode: 78702,
      phone_number: '4235467680',
      email: 'burpy@mcFly.cool',
      emergency_contact: 'Lord Ringle',
      avatar: 'https://wrathofzombie.files.wordpress.com/2015/04/blesh-1.jpg',
    },
    {
      username: 'Francis',
      name: 'Frank Underwood',
      address: '505 E 6th St, Austin, TX 78701',
      avatar: 'http://i.forbesimg.com/media/lists/people/kevin-spacey_416x416.jpg',
    },
    {
      username: 'batman',
      address: '401 Congress Ave, Austin, TX 78701',
      name: 'Bruce Wayne',
      avatar: 'http://images-cdn.moviepilot.com/image/upload/c_fill,h_600,w_600/t_mp_quality'
      + '/1-a-lego-batman-movie-is-coming-jpeg-150184.jpg',
    },
    {
      username: 'thelawyer',
      address: '404 East 6th, Austin, TX 78701',
      name: 'Saul Goodman',
      avatar: 'http://vignette4.wikia.nocookie.net/seinfeld/images/2/23/'
      + 'Odenkirk.jpg/revision/latest?cb=20140104202800',
    },
    {
      username: 'CharlieChap',
      address: '700 Rock ledge, Arcadia Oklahoma',
      name: 'Charlie Chaplin',
      avatar: 'http://images2.fanpop.com/image/photos/14400000/City-Lights-'
        + 'charlie-chaplin-14440701-1600-1213.jpg',
    },
    {
      username: 'Knope',
      address: '14028 N US Highway 183 Bldg F Austin, TX 78717',
      name: 'Leslie Knope',
      avatar: 'http://media.salon.com/2012/11/knope_campaign_rect.jpg',
    },
  ])
    .catch(function (error) {
      console.error('error seeding users', error);
    });
};
