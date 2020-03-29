import { getLogger, Logger as Logger4JS, configure } from 'log4js';
import { logLevel } from '../config';

export default class Logger {
  private logger: Logger4JS;

  constructor(context: string) {
    this.logger = getLogger();

    const contextName = 'context';
    const config = {
      appenders: {
        out: {
          type: 'stdout',
          layout: {
            type: 'pattern',
            pattern: `%[[%d{dd/MM/yy hh:mm:ss} %X{${contextName}}] [%p]%] %m`,
          },
        },
      },
      categories: { default: { appenders: ['out'], level: logLevel } },
    };
    this.logger.addContext(contextName, context);
    configure(config);
  }

  trace(msg: string) { this.logger.trace(msg); }

  debug(msg: string) { this.logger.debug(msg); }

  info(msg: string) { this.logger.info(msg); }

  warn(msg: string) { this.logger.warn(msg); }

  error(msg: string) { this.logger.error(msg); }
}
