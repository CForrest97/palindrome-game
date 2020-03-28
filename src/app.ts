import express from 'express';
import { join } from 'path';

import Logger from './utils/Logger';
import { port } from './config';

const app = express();
const logger = new Logger(__filename);
app.use(express.static(join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index.html'));
app.get('/api', (req, res) => res.sendStatus(200));

app.listen(port, () => logger.debug(`Server: ${process.pid}, listening on port: ${port}`));
