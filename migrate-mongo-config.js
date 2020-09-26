const { server: { db } } = require('./config');

module.exports = {
  mongodb: {
    url: db.fullUrl(),
    databaseName: db.name,
    options: {
      useUnifiedTopology: true
    }
  },
  migrationsDir: 'migrations',
  changelogCollectionName: 'changelog',

  // The mongodb collection where the applied changes are stored. Only edit this when really necessary.
  // The file extension to create migrations and search for in migration dir
  migrationFileExtension: '.js'
};
