import express from 'express';
import bodyParser from 'body-parser';
import { join } from 'path';

import routes from './routes';

const app = express();
app.use(express.static(join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', (req, res) => res.render('index.html'));
app.use('/api/v1/', routes);

export default app;
