import express, { Express, Request, Response } from 'express';
import { readFile, writeFile } from '../src/utils/utils';

import useExpensesRouter from './expenses/expenses.router';
import randomRouter from '../src/random/random.router';
import { expenseType } from './utils/type.js';

const app: Express = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.json());

app.use('/expenses-list', useExpensesRouter);
app.use('/random', randomRouter);

app.get('/create-expense', (req: Request, res: Response) => {
  res.render('pages/createExpnese.ejs');
});

app.get('/expense-update/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const expenses: expenseType[] = await readFile('expenses.json', true);
  const expense = expenses.find((el) => el.id === id);
  res.render('pages/updateExpense.ejs', { expense });
});

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
