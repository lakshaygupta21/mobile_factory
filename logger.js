var logger = require('logger').createLogger('development.log');
logger.format = function(level, date, message) {
    return date.getTime().toString() + "; " + level + "; " + message;
};

module.exports = {logger}