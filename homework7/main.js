import nodeFetch from 'node-fetch';
import { readFile } from './utils/readFile.js';
import { writeFile } from './utils/writeFile.js';
import http from 'http';
import url from 'url';
import queryString from 'querystring';

// 1) წამოიღეთ მონაცემები https://dummyjson.com/users და ჩაწერეთ თქვენთან
// users.json -ში, node-fetch ის გამოყენებით

async function main() {
  const response = await nodeFetch('https://dummyjson.com/users');
  const users = await response.json();

  await writeFile('users.json', users.users, true);
  console.log('users added successfully');
}

// main();

// ================================================================================================================================

// 3) დაამატეთ ფილტრები მაგალითად თუ დავწერ /users?age=30 უნდა წამოიღოს ყველა ის ტიპი ვინც 30 წლისაა.
// /users?gender=male ან /users?gender=female წამოითოს შესაბამისად ინფო ან მხოლოდ მამაკაცები ან მხოლოდ ქალბატონები.

// ================================================================================================================================

const server = http.createServer(async (req, res) => {
  const pathName = url.parse(req.url);

  const queryName = queryString.parse(pathName.query);

  if (pathName.pathname === '/users') {
    const users = await readFile('users.json', true);
    res.setHeader('Content-Type', 'application/json');
    if (queryName.age) {
      const filteredUsers = users.filter((user) => user.age == queryName.age);
      res.write(JSON.stringify(filteredUsers));
      res.end();
    }
    res.write(JSON.stringify(users));
    res.end();
  }

  res.end('navigate to users path ');
});

server.listen(3500, () => {
  console.log('listening on http://localhost:3500');
});
