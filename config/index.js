var configValues = require('./config');

module.exports = {
    getDBConnectionString: function() {
        return `mongodb+srv://${configValues.uname}:${configValues.pwd}@cluster0.xpqna.mongodb.net/test`;
    }
}