import fs from 'fs/promises';
import type { Express } from 'express';
import { expenseType } from './type';

export async function readFile(filePath: string, isParsed: boolean) {
  const data = await fs.readFile(filePath, 'utf-8');
  return isParsed ? JSON.parse(data) : data;
}

export async function writeFile(
  filePath: string,
  data: string,
  isParsed: boolean
) {
  if (!filePath || !data) return;
  await fs.writeFile(filePath, isParsed ? JSON.stringify(data) : data);
}
