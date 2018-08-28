const mongoose = require('mongoose');
let db_url = "mongodb://luciamsoto:luciamsoto04@ds149353.mlab.com:49353/centrovp";
mongoose.connect(db_url,{useNewUrlParser : true});
console.log(mongoose.connection.readyState);
//2 es OK 