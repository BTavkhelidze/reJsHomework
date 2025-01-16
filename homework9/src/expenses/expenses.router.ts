import { Router } from 'express';
import {
  createUser,
  deleteExpenses,
  getProduct,
  getUserById,
  updateExpenseById,
} from './expenses.service.js';
import { areAllRequiredFieldsfilled } from '../middleware/expenses.middleware';

const useExpensesRouter = Router();

useExpensesRouter.get('/', getProduct);
useExpensesRouter.get('/:id', getUserById);
useExpensesRouter.post('/', areAllRequiredFieldsfilled, createUser);
useExpensesRouter.delete('/:id', deleteExpenses);
useExpensesRouter.put('/:id', updateExpenseById);

export default useExpensesRouter;
