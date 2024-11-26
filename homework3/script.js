//! 1) დაწერეთ ფუნცქია რომელიც დაგვილოგავს მაუსის კორდინატებს მას შემდეგ რაც გავაჩერებთ მაუსს, გამოიყენეთ დიბაუნს ტექნიკა

// function mouseCoordinantes() {}

// document.addEventListener('mouseout', (event) => {
//   console.log(event.clientX, event.clientY);
// });

//! 2) წამოიღეთ ინფორმაცია შემდეგი ეიპიაიდან: https://jsonplaceholder.typicode.com/users , მოსული დატა გაპარსეთ შემდეგნაირად, თითოეულ ობიექტს უნდა ჰქონდეს მხოლოდ 4 ფროფერთი აიდი, სახელი, იუზერნეიმი და იმეილი

// const users1 = [];
// const users = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await res.json();

//   const users = data.map((el) => ({
//     id: el.id,
//     name: el.name,
//     username: el.username,
//     email: el.email,
//   }));
//   console.log(users);
// };

// users();

//! 3) შექმენით ინფუთი რომლის სერჩის დროს რექუესთს გააგზავნით შემდეგ აიპიაიზე: 'https://dummyjson.com/products/search?q=phone' როგორც ხედავთ q არის ქუერი პარამეტრი, დებაუნს ტექნიკით გააკეთეთ ინფუთი რომლის ჩაწერაზეც, დარექუსთდება სწორედ q პარამეტრით. ანუ phone ის ნაცვლად გაატანეთ ის რასაც ჩაწერთ ინფუთში.

// let inputRes = input('Find a product ');

const product = prompt('Finde a product');

const main = async (input) => {
  const res = await fetch(
    `https://dummyjson.com/products/search?q=${input ? input : ''}`
  );
  const data = await res.json();

  console.log(data);
};

main(product);
