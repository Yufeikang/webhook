/* eslint-disable camelcase */
const Express = require('express');
const logger = require('../lib/log').getLogger();
const bodyParser = require('body-parser');
const child_process = require('child_process');
const path = require('path');


const { exec } = child_process;

const aliYunDocker = Express.Router();
aliYunDocker.use(bodyParser.json());
aliYunDocker.use('/', (req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl} from ${req.ip}`);
  next();
});

aliYunDocker.get('logs', (req, res) => {
  res.send('ok');
});

aliYunDocker.post('/pull', (req, res) => {
  try {
    const { push_data, repository } = req.body;
    const { repo_full_name } = repository;
    const { tag } = push_data;
    const cmd = path.join(process.env.SHELL_DIR, `${repo_full_name.split('/').join('_')}_${tag}.sh`);
    logger.debug(`run: ${cmd}`);
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        logger.error(stderr);
      } else {
        logger.info(stdout);
      }
    });
    res.send('success');
  } catch (e) {
    logger.error(e);
    res.status(501).send('内部错误');
  }
});

module.exports = aliYunDocker;
