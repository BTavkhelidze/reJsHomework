import { expenseType } from '../utils/type.js';
import { readFile, writeFile } from '../utils/utils.js';
import { Request, Response } from 'express';

const getProduct = async (req: Request, res: Response): Promise<void> => {
  const expenses = await readFile('expenses.json', true);

  if (req.query.page || req.query.take) {
    const page = req.query.page || 1;
    const take = Math.min(Number(req.query.take), 10);
    const result = expenses.splice((+page - 1) * take, take);
    res
      .status(200)
      .json({ message: 'Request created successfully', data: result });
    return;
  }

  res.render('pages/expenses.ejs', { expenses });
};

const getUserById = async (req: Request, res: Response) => {
  const expenses: expenseType[] = await readFile('expenses.json', true);

  const id = Number(req.params.id);
  const expense = expenses.find((el) => el.id === id);

  if (!expense) {
    res.status(400).json({ message: 'expense not found whth this id' });
    return;
  }
  res.render('pages/expenseDetails.ejs', { expense });
};

const createUser = async (req: Request, res: Response) => {
  const expenses: expenseType[] = await readFile('expenses.json', true);

  function formatDate() {
    const year = new Date().getFullYear();
    const month = String(new Date().getMonth() + 1).padStart(2, '0');
    const day = String(new Date().getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  const lastIndex = expenses[expenses.length - 1]?.id || 0;

  const {
    title,
    amount,
    category,
  }: { title: string; amount: string; category: string } = req.body;

  const newExpense = {
    id: lastIndex + 1,
    title,
    amount: +amount,
    category,
    date: formatDate(),
  };

  expenses.push(newExpense);
  await writeFile('expenses.json', JSON.stringify(expenses), true);
  res.status(200).json({ newExpense });
};

const deleteExpenses = async (req: Request, res: Response) => {
  const expenses: expenseType[] = await readFile('expenses.json', true);
  const id = Number(req.params.id);
  const expenseIndex = expenses.findIndex((element) => element.id === id);

  const deletedExpense = expenses.splice(expenseIndex, 1);
  await writeFile('expenses.json', JSON.stringify(expenses), true);
  res
    .status(200)
    .json({ message: 'delated successfully', data: deletedExpense });
};

const updateExpenseById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { title, amount, category } = req.body;
  const expenses: expenseType[] = await readFile('expenses.json', true);
  const index = expenses.findIndex((el) => el.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'expenses not found' });
    return;
  }
  if (category) expenses[index].category = category;
  if (title) expenses[index].title = title;
  if (amount) expenses[index].amount = amount;
  await writeFile('expenses.json', JSON.stringify(expenses), true);
  res.json(expenses[index]);
};

export {
  getProduct,
  getUserById,
  createUser,
  deleteExpenses,
  updateExpenseById,
};
