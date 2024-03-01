const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
//  Connection 
async function connectMongoDb(url) {
  return mongoose.connect(url);

}

module.exports = {
   connectMongoDb,

};


