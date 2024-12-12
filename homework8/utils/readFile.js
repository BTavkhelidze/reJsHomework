import fs from 'fs/promises';

export const readFile = async (filePath, isParsed) => {
  const rawData = await fs.readFile(filePath, 'utf8');
  return isParsed ? JSON.parse(rawData) : rawData;
};
