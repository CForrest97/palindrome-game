import express from 'express';
import bodyParser from 'body-parser';
import { join } from 'path';
import swaggerUi from 'swagger-ui-express';

import routes from './routes';
import PalindromeGame from './services/PalindromeGame.service';
import { setGame } from './state';

const swaggerDocument = require('./swagger.json');

export default () => {
  const app = express();
  app.use(express.static(join(__dirname, 'public')));
  app.use(bodyParser.json());

  app.get('/', (req, res) => res.render('index.html'));
  app.use('/api/v1/', routes);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  setGame(new PalindromeGame());
  return app;
};
