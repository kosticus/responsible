exports.seed = function (knex) {
  return knex('riders').insert([
    {
      foreign_rider: 1,
      location: JSON.stringify({ lat: 30.2687464, lng: -97.741185 }),
    },
    {
      foreign_rider: 6,
      location: JSON.stringify({ lat: 30.267701, lng: -97.736303 }),
    },
    {
      foreign_rider: 5,
      location: JSON.stringify({ lat: 30.271188, lng: -97.7469099 }),
    },
    {
      foreign_rider: 2,
      location: JSON.stringify({ lat: 31.271188, lng: -97.7469099 }),
    },
    {
      foreign_rider: 9,
      location: JSON.stringify({ lat: 31.271188, lng: -97.7469099 }),
    },
  ])
    .catch(function (error) {
      console.error('error seeding users', error);
    });
};
