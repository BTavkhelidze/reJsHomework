#! /usr/bin/env node

// 2) Create a budget CLI tool where you can:
// /Add a new expense.
// /Delete an expense.
// /Show all expenses.
// /Use the fs module to save expense information.

import { Command } from 'commander';
import { readFile } from './utils/readFile.js';
import { writeFile } from './utils/writeFile.js';

const program = new Command();

// add

program
  .command('add')
  .argument('<item>')
  .argument('<operation>')
  .argument('<price>')
  .action(async (item, status, price) => {
    const budget = await readFile('budget.json', true);

    const id = budget[budget.length - 1]?.id || 0;
    const newInvoice = {
      id: id + 1,
      item: item,
      operation: status,
      price: price,
    };
    budget.push(newInvoice);
    await writeFile('budget.json', budget, true);
  });

//   show all

program.command('show').action(async () => {
  const budget = await readFile('budget.json', true);
  console.log(budget);
});

// Delete

program
  .command('delete')
  .argument('id')
  .action(async (id) => {
    const budget = await readFile('budget.json', true);
    const index = budget.findIndex((el) => el.id === +id);
    if (index === -1) {
      console.log('cannot find budget');
      return;
    }
    budget.splice(index, 1);
    await writeFile('budget.json', budget, true);
    console.log('deleted successfully');
  });

program.parse();
