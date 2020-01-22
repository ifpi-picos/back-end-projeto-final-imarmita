class Config {
  constructor() {
    this.env = 'development';
    this.PORT = 3000;
    this.API_BASE = '/api';
    const DB_HOST = process.env.DB_HOST ? process.env.DB_HOST : 'localhost';
    const DB_PORT = process.env.DB_PORT ? process.env.DB_PORT : '27017';
    this.MONGODB_URL = `mongodb://${DB_HOST}':'${DB_PORT}/db_dev`;
    this.MONGO_SERVER = "mongodb://u2jktbnyjtohhofyl3y1:YqECz0KkWTYJ8EApLa1H@bnuwdrer8ngqlf4-mongodb.services.clever-cloud.com:27017/bnuwdrer8ngqlf4";
    this.MONGO_LOCAL = "mongodb://localhost:27017/iMarmita";
  }
}

module.exports = new Config();
