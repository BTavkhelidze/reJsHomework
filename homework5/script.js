const fs = require('fs/promises');

//  1) Fetch data from this API: https://jsonplaceholder.typicode.com/users.
// Parse the data so that each object contains only
// four properties: id, name, username, and email. Write the resulting array to a file called users.json.

// const url = 'https://jsonplaceholder.typicode.com/users';
// let users = [];
// const fetchApi = async (url) => {
//   const res = await fetch(url);
//   const data = await res.json();
//   for (const user of data) {
//     const { id, name, username, email } = user;
//     let singleUser = {
//       id,
//       name,
//       username,
//       email,
//     };
//     users.push(singleUser);

//     await fs.writeFile('users.json', JSON.stringify(users));
//   }
// };

// fetchApi(url);

// __________________________________________________________________________________________________________

// 2) Run the command node main.js Ferrari 2020 red, retrieve the data from process.argv, and build a car object with the properties id, carModel, carColor, and carReleaseDate.
//  Append this object to cars.json. Each time you run this command, a new object should be added to cars.json, so if you run it five times, you should have five objects in the file.

// const cars = async () => {
//   const [, , brand, year, color] = process.argv;

//   const prevObjCars = await fs.readFile('cars.json', 'utf-8');
//   const prevParseCars = JSON.parse(prevObjCars);

//   const carObj = {
//     id: prevParseCars.length + 1,
//     carModel: brand,
//     carColor: color,
//     carReleaseDate: year,
//   };

//   await fs.writeFile('cars.json', JSON.stringify([...prevParseCars, carObj]));
// };

// cars();

// __________________________________________________________________________________________________________________-

//! 3) Write a random text into a file named text.txt. Then, read this file and count how many vowels are present.

const vowels = ['a', 'e', 'i', 'o', 'u'];

let num = [];
const countVowels = async () => {
  const word = await fs.readFile('text.txt', 'utf-8');
  const splitWord = word.split('');
  for (const letter in splitWord) {
    for (const vowel in vowels) {
      if (splitWord[letter] === vowels[vowel]) {
        num.push(splitWord[letter]);
      }
    }
  }
  console.log(`There are ${num.length} vowels`);
};

countVowels();
