class Config {
  constructor() {
    this.env = 'production';
    this.PORT = process.env.PORT || 3000;
    this.API_BASE = '/api';
    const DB_HOST = process.env.DB_HOST ? process.env.DB_HOST : 'localhost';
    const DB_PORT = process.env.DB_PORT ? process.env.DB_PORT : '27017';
    this.MONGODB_URL = `mongodb://${DB_HOST}':'${DB_PORT}/db_prod`;
    this.MONGO_SERVER = "mongodb://u2jktbnyjtohhofyl3y1:YqECz0KkWTYJ8EApLa1H@bnuwdrer8ngqlf4-mongodb.services.clever-cloud.com:27017/bnuwdrer8ngqlf4";

  }
}

module.exports = new Config();
