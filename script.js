// 1) დაითვალეთ დადებითი რიცხვები / შეკრიბეთ უარყოფითი რიცხვები:
// გაქვთ მასივი: const nums = [1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15], უნდა დააბრუნოს: [10, -65]

//! 1

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function filteredArray(nums) {
  const negativeNums = nums.filter((n) => n < 0);
  const positiveNums = nums.filter((n) => n > 0);
  return [positiveNums.length, negativeNums.reduce((acc, n) => acc + n)];
}

console.log(filteredArray(nums));

//! 2
// 2) აიღეთ რიცხვების მასივი, გაამრავლეთ ყველა ელემენტი 2 ზე, და შემდეგ გაფილტეთ ეს მასივი იმ რიცვებზე რომლებიც იყოფა 3ზე.

const numbers = [
  5, 2, 1, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 41, 18, 21, 65, 67,
];

function arraydivisible3(numbers) {
  let res = numbers
    .map((number) => number * 2)
    .filter((number) => number % 3 === 0);

  console.log(res);
}

arraydivisible3(numbers);

//! 3
// შექმენით ფუნცქცია რომელიც დააბრუნებს ბოლო ორი ყველაზე პარატა რიცხვის ჯამს: e.g:[19, 5, 42, 2, 77] => 7

const arr = [19, 5, 42, 2, 77];

function minNumsSum(arr) {
  let res = arr.sort((a, b) => a - b);
  //   return res[0] + res[1];

  return res.slice(0, 2).reduce((acc, cur) => acc + cur);
}

console.log(minNumsSum(arr));

//! 4

// 4)შექმენით ფუნცქია სადაც შეადარებთ ამ ორ მასივს ერთმანეთს და დააბრუნეთ ახალ მასივს ყველაზე დიდი რიცხვებით:
// getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]
let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];

function getLargerNumbers(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) {
      result.push(arr1[i]);
    } else {
      result.push(arr2[i]);
    }
  }
  console.log(result);
}

getLargerNumbers(arr1, arr2);

//! 5

// {
//     5) მოცემულ მასივზე გააკეთეთ შემდეგი ტასკები:
//       * Get an array of all names
//       *  Get an array of all first names
//       * დააჯგუფეთ თვალის ფერის მიხედვით, გამოიყენეთ რედიუსი და უნდა მიიღოთ შემდეგი შედეგი:
//       {blue: 2, brown: 1, yellow: 1}
//       როგორც ხედავთ ლექციაზე რაც ვქენით ოდნავ განსხვავებულია, აქ გვაინტერებსე დავითვალოთ რამდენი განსხვავებული თვალის ფერი აქვთ.
// }

const characters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
  },
];

const allNames = characters.map((el) => el.name);
const allFirstName = allNames.map((el) => el.split(' ').slice(0, 1).join());

const eyeColors = [];

function filter() {
  const groupedEyecolors = characters.reduce((acc, cur) => {
    let num = 0;
    const eyeColor = cur.eye_color;
    if (!acc[eyeColor]) acc[eyeColor] = 0;
    // num++;
    acc[eyeColor] += 1;
    return acc;
  }, {});

  console.log(groupedEyecolors);
}

filter();
