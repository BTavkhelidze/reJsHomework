import { Router } from 'express';
import {
  createUser,
  deleteExpenses,
  getProduct,
  getUserById,
} from './expenses.service.js';

import {
  isKeyMiddleware,
  areAllRequiredFieldsfilled,
} from '../middleware/expenses.middleware.js';

const useExpensesRouter = Router();

useExpensesRouter.get('/', getProduct);
useExpensesRouter.get('/:id', getUserById);
useExpensesRouter.post('/', areAllRequiredFieldsfilled, createUser);
useExpensesRouter.delete('/:id', isKeyMiddleware, deleteExpenses);

export default useExpensesRouter;
