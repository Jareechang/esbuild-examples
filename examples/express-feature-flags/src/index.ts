import * as Express from 'express';
import express from 'express';

const app : Express.Application = express();

const api : Express.Router = express.Router();
app.use('/api', api);

// Endpoint for all users
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


// Endpoint for fetching products
interface Product {
  id: number;
  sku: string;
  name: string;
}

process.env.FEATURE_FLAG_PRODUCT && api.get('/products', (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction,
) => {
  const products : Product[] = [
    { id: 1, sku: 'ASDJ-238-JUEE', name: 'Chair' },
    { id: 2, sku: 'AMEJ-818-TEME', name: 'Sofa' },
    { id: 3, sku: 'VUEI-788-TEME', name: 'Coffee Table' },
  ];
  res.status(200).json(products);
});

app.listen(3001, () => console.log('app listening on port 3001'));
