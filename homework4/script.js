//! 1) Create a Promise with a 50/50 Chance of Resolving or Rejecting

// const number = Math.random();
// const flip = (number) =>
//   new Promise((res, rej) => {
//     if (number > 0.5) {
//       res('resolved');
//     }
//     rej('Rejected');
//   });

// flip(number)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });

//! 2) Fetch Data from Two Sources and Return the Faster Response: https://dummyjson.com/users and https://jsonplaceholder.typicode.com/users .

// async function main() {
//   const users2 = fetch('https://jsonplaceholder.typicode.com/users');
//   const users = fetch('https://dummyjson.com/users');
//   const res = await Promise.race([users2, users]);
//   const data = await res.json();
//   console.log(data);
// }

// main();

// ! 3) Write three promises that return arrays after different time intervals:
//! Two should resolve successfully.
//! One should reject.
//! Merge the arrays from only the fulfilled promises.

// const promise1 = new Promise((res, rej) => {
//   return setTimeout(() => {
//     if (true) {
//       res('promise1 resolved successfuly');
//     } else {
//       rej('reject');
//     }
//   }, 1000);
// });

// const promise2 = new Promise((res, rej) => {
//   return setTimeout(() => {
//     if (true) {
//       res('promise2 resolved successfuly');
//     } else {
//       rej('reject');
//     }
//   }, 4000);
// });
// const promise3 = new Promise((res, rej) => {
//   return setTimeout(() => {
//     if (false) {
//       res('promise3 resolved successfuly');
//     } else {
//       rej('reject');
//     }
//   }, 4000);
// });

// async function main() {
//   const res = await Promise.allSettled([promise1, promise2, promise3]);
//   const filteredPromise = res.filter((res) =>
//     res.status.startsWith('fulfilled')
//   );
//   console.log(filteredPromise);
// }

// main();

//! 4) Use these APIs: https://fakestoreapi.com/users  and https://jsonplaceholder.typicode.com/users Fetch data from both endpoints and display the combined data only if both promises are fulfilled successfully.

// const users1 = fetch('https://fakestoreapi.com/users');
// const users2 = fetch('https://jsonplaceholder.typicode.com/users ');

// const main1 = async () => {
//   const res = await Promise.all([users1, users2]);
//   const [data1, data2] = await res;
//   const usersOne = await data1.json();
//   const usersTwo = await data2.json();
//   console.log([...usersOne, ...usersTwo]);
// };

// main1();
