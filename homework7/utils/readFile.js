import fs from 'fs/promises';

export const readFile = async (fileName, isParsed) => {
  if (!fileName) return;
  const rawData = await fs.readFile(fileName, 'utf8');
  const data = isParsed ? JSON.parse(rawData) : rawData;
  return data;
};
