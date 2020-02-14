const mongoose = require('mongoose');
const URL = "mongodbURL"

mongoose.Promise = global.Promise;

module.exports = ()=> {

    return mongoose.connect(URL, {
        useNewUrlParser: true
    }).then(() => {
        console.log("database connection instablished");    
    }).catch(err => {
        console.log('Database connection error', err);
        process.exit();
    });
}