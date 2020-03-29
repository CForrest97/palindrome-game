import { port } from './config';
import app from './app';
import Logger from './utils/Logger';

const logger = new Logger(__filename);

app().listen(port, () => logger.debug(`Server: ${process.pid}, listening on port: ${port}`));
