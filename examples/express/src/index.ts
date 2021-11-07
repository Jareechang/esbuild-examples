import * as Express from 'express';
import express from 'express';

const app : Express.Application = express();

const api : Express.Router = express.Router();
app.use('/api', api);

interface User {
  name: string;
}

api.get('/users', (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction,
) => {
  const users : User[] = [
    { name: 'Susan' },
    { name: 'Bill' },
    { name: 'Francis' }
  ];
  res.status(200).json(users);
});

app.listen(3001, () => console.log('app listening on port 3001'));
