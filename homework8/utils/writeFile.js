import fs from 'fs/promises';

export async function writeFile(filePath, data, isParsed) {
  if (!filePath || !data) return;
  await fs.writeFile(filePath, isParsed ? JSON.stringify(data) : data);
}
