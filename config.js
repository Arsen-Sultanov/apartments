module.exports = {
  server: {
    port: 8000,
    db: {
      baseUrl: 'mongodb://localhost',
      port: 27017,
      dbName: 'apartments',
      username: '',
      password: '',
      fullUrl() { return `${this.baseUrl}:${this.port}/${this.dbName}`; }
    },
    session: {
      secret: 'aec1289a0d8c38197a880dd46a24ba60',
      cokieMaxAge: 45600000000
    }
  }

};
