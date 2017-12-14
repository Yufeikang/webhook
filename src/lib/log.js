const log4js = require('log4js');

const DEFAULT_LEVEL = process.env.LOGLEVEL || 'DEBUG';
log4js.configure({
  appenders: {
    out: {
      type: 'console',
    },
  },
  categories: {
    default: { appenders: ['out'], level: 'debug' },
  },
});
function getLogger() {
  const logger = log4js.getLogger();
  logger.level = DEFAULT_LEVEL;
  return logger;
}
module.exports = {
  getLogger,
};
