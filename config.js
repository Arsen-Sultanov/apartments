module.exports = {
  server: {
    port: 8000,
    db: {
      baseUrl: 'mongodb://localhost',
      port: 27017,

      dbName: 'apartments',
      username: '',
      password: '',
      fullUrl: `${this.server.db.baseUrl}:${this.server.db.port}/${this.server.db.dbName}`
    }
  }

};
