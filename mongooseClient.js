const mongoose = require('mongoose');
let db_url = "mongodb://admin:mypass123@ds119652.mlab.com:19652/mongodbcintaroja";
mongoose.connect(db_url,{useNewUrlParser : true});
console.log(mongoose.connection.readyState);
//2 es OK 