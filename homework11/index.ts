// გადავწეროთ მოცემული ფაილი typescript_ზე.

type Ractangle = {
  width: number;
  height: number;
};

function calculateRectangleArea(rectangle: Ractangle): number {
  return rectangle.width * rectangle.height;
}

function calculateRectanglePerimeter(rectangle: Ractangle): number {
  return 2 * (rectangle.width + rectangle.height);
}

type CircleType = {
  radius: number;
};

function calculateCircleArea(circle: CircleType): number {
  return Math.PI * Math.pow(circle.radius, 2);
}

function calculateCirclePerimeter(circle: CircleType): number {
  return 2 * Math.PI * circle.radius;
}

// // Independent Functions

function addNumbers(a: number, b: number): number {
  return a + b;
}

function multiplyNumbers(a: number, b: number): number {
  return a * b;
}

function capitalizeString(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function filterEvenNumbers(numbers: number[]) {
  return numbers.filter((num) => num % 2 === 0);
}

function findMax(numbers: number[]) {
  return Math.max(...numbers);
}

function isPalindrome(str: string) {
  const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}

function calculateFactorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
}

// Test Cases

// const rectangle = { width: 5, height: 8 };
// const circle = { radius: 3 };

// const rectangleArea = calculateRectangleArea(rectangle);
// const rectanglePerimeter = calculateRectanglePerimeter(rectangle);

// const circleArea = calculateCircleArea(circle);
// const circlePerimeter = calculateCirclePerimeter(circle);

// console.log(
//   `Rectangle Area: ${rectangleArea}, Perimeter: ${rectanglePerimeter}`
// );
// console.log(`Circle Area: ${circleArea}, Perimeter: ${circlePerimeter}`);

// const sumResult = addNumbers(5, 3);
// const multiplicationResult = multiplyNumbers(4, 7);
// const capitalizedString = capitalizeString('javascript is fun');
// const evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);

// console.log(`Sum: ${sumResult}`);
// console.log(`Multiplication: ${multiplicationResult}`);
// console.log(`Capitalized String: ${capitalizedString}`);
// console.log(`Even Numbers: ${evenNumbers}`);

// const maxNumber = findMax([23, 56, 12, 89, 43]);
// const isPalindromeResult = isPalindrome('A man, a plan, a canal, Panama');
// const factorialResult = calculateFactorial(5);

// console.log(`Max Number: ${maxNumber}`);
// console.log(`Is Palindrome: ${isPalindromeResult}`);
// console.log(`Factorial: ${factorialResult}`);

/* 

2. შევქმნათ კლასი BankAccount რომელსაც ექნება accountNumber,balance და transactionHistory ფროფერთები.
   კონსტრუქტორში უნდა ვიღებდეთ accountNumber და initialBalance მნიშვნელობებს.
   გარედან არუნდა იყოს შესაძლებელი accountNumber, balance და transactionHistory შეცვლა.
   კლასში უნდა გვქონდეს მეთოდები:
   getAccountInfo
   deposit - თანხის დამატება ანგარიშზე.
   withdraw - თანხის მოკლება ანგარიშიდან.
   transferFunds - გადარიცხვა სხვა BankAccount_ზე
   getTransactionHistory - აბრუნებს transactionHistory_ მასივს
   recordTransaction - transactionHistory_ში ამატებს ჩნაწერს ტრანსფერის შესახებ

   შევქმნათ მინიმუმ 2 BankAccount_ის ინსტანსი.
   გავაკეთოთ სხვადასხვა ოპერაციები.
   დავბეჯდოთ შექმნილი ექაუნთების transactionHistory.

*/

type HistoryType = {
  amount: number;
  type: string;
  id?: string | undefined;
};
class BankAccount {
  private accountNumber: string;
  private initialBalance: number;
  private transactionHistory: HistoryType[] = [];

  constructor(accountNumber: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.initialBalance = initialBalance;
  }

  deposit(amount: number) {
    if (amount < 0) {
      console.log('somthing went wrong');
      return this;
    }
    this.initialBalance += amount;
    this.recordTransaction({
      amount: this.initialBalance,
      type: 'deposit',
      id: this.accountNumber,
    });
    return this;
  }

  withdraw(amount: number) {
    if (amount < 0) {
      console.log('somthing went wrong');
      return this;
    }
    if (amount > this.initialBalance) {
      console.log('not enough funds');
      return this;
    }

    this.initialBalance -= amount;
    this.recordTransaction({
      amount: this.initialBalance,
      type: 'withdraw',
      id: this.accountNumber,
    });
    return this;
  }

  transferFunds(id: string, amount: number) {
    if (this.initialBalance < amount) {
      console.log('not enough funds');
      return this;
    }
    this.initialBalance -= amount;
    this.recordTransaction({
      amount: this.initialBalance,
      type: `transfer`,
      id: id,
    });
    return this;
  }

  getTransactionHistory() {
    console.log(
      'transaction history: ' + JSON.stringify(this.transactionHistory)
    );
    return this;
  }

  recordTransaction({ amount, type, id }: HistoryType) {
    const history = { amount, type, id };

    this.transactionHistory.push(history);
  }
}

const myBank = new BankAccount('1252312313', 2000);
myBank
  .withdraw(100)
  .deposit(100)
  .getTransactionHistory()
  .transferFunds('4021421', 500)
  .getTransactionHistory();
