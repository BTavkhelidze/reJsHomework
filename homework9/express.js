import express from 'express';
import { readFile, writeFile } from './utils/utils.js';

import useExpensesRouter from './expenses/expenses.router.js';
import randomRouter from './random/random.router.js';

const app = express();

app.use(express.json());

app.use('/expenses', useExpensesRouter);
app.use('/random', randomRouter);

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
