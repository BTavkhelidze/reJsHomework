// 1) Create a function that checks if a received folder name exists in the root directory.

const fs = require('fs/promises');
const path = require('path');
const process = require('process');
const http = require('http');
const url = require('url');

// const [, , name] = process.argv;

// const main = async (name = 'text.txt') => {
//   const fullPath = path.join(__dirname);
//   const dirs = await fs.readdir(fullPath);
//   console.log(dirs);

//   const index = dirs.findIndex((dir) => dir.startsWith(name));
//   if (index === -1) {
//     console.log('No directory for received folder ' + `( ${name} )`);
//     return;
//   } else {
//     console.log('Found directory ' + `( ${name} )`);
//     return;
//   }
// };

// main(name);

// ================================================================================================================================

// 2) Create a simple HTTP GET server that reads user data from data.json and
// returns it to the client. Ensure that data.json is present before reading the data.

// ================================================================================================================================

// 3) Add a new route that returns a random number between 1 and 100 at /random.

// ================================================================================================================================

// 4) Add a new route that returns a simple HTML table at /html.

// ================================================================================================================================

// 5) Add a new route that returns the current time in ISO format at /current-time.

// ================================================================================================================================

// 6) Add a new route that returns an array of objects, such as users, animals, posts, etc., at /api.

const server = http.createServer(async (req, res) => {
  const pathName = req.url;
  console.log(pathName);
  const rawData = await fs.readFile('data.json', 'utf-8');
  if (pathName === '/data' || pathName === '/') {
    res.setHeader('Content-Type', 'application/json');
    res.write(rawData);
    res.end();
  } else if (pathName === '/random') {
    const numbers = [];
    for (let i = 1; i < 101; i++) {
      numbers.push(i);
    }
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(numbers));
    res.end();
    console.log(numbers);
  } else if (pathName === '/html') {
    res.setHeader('Content-Type', 'text/html');
    res.write(
      '<table><tr><th>header</th> <th>header 2</th></tr><tr><td>test1</td><td>test2</td></tr></table>'
    );
    res.end();
  } else if (pathName === '/current-time') {
    const currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    res.write('Current Time is ' + hour + ' : ' + minute);
    res.end();
  } else if (pathName === '/api') {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(users));
    res.end();
  }
});

server.listen(8000, () => {
  console.log('start listening on http://localhost:8000');
});
