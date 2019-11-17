const Config = require('./src/config/config');
const setupApp = require('./src/app');

const database = require('./src/config/database');

setupApp.listen(Config.PORT, () =>{
  console.log("connect api");
  database()
})
