import { readFile, writeFile } from '../utils/utils.js';

const getProduct = async (req, res) => {
  const expenses = await readFile('expenses.json', true);

  if (req.query.page || req.query.take) {
    const page = req.query.page || 1;
    const take = Math.min(req.query.take, 10);
    const result = expenses.splice((page - 1) * take, take);
    return res
      .status(200)
      .json({ message: 'request created succesfully', data: result });
  }

  res
    .status(200)
    .json({ message: 'request created succesfully', data: expenses });
};

const getUserById = async (req, res) => {
  const expenses = await readFile('expenses.json', true);

  const id = Number(req.params.id);
  const expense = expenses.find((el) => el.id === id);
  console.log(expense);
  if (!expense)
    return res.status(400).json({ message: 'expense not found whth this id' });
  res
    .status(200)
    .json({ message: 'request created succesfully', data: expense });
};

const createUser = async (req, res) => {
  const expenses = await readFile('expenses.json', true);

  console.log(req.body);

  function formatDate() {
    const year = new Date().getFullYear();
    const month = String(new Date().getMonth() + 1).padStart(2, '0');
    const day = String(new Date().getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  const lastIndex = expenses[expenses.length - 1]?.id || 0;
  console.log(lastIndex);

  const { title, amount, category } = req.body;

  const newExpense = {
    id: lastIndex + 1,
    title: 'Internet',
    amount: 54,
    category: 'network',
    date: formatDate(),
  };

  expenses.push(newExpense);
  await writeFile('expenses.json', expenses, true);
  res.status(200).json({ newExpense });
};

const deleteExpenses = async (req, res) => {
  const expenses = await readFile('expenses.json', true);
  const id = Number(req.params.id);
  const expenseIndex = expenses.findIndex((element) => element.id === id);

  const deletedExpense = expenses.splice(expenseIndex, 1);
  await writeFile('expenses.json', expenses, true);
  res
    .status(200)
    .json({ message: 'delated successfully', data: deletedExpense });
};

export { getProduct, getUserById, createUser, deleteExpenses };
