// 1) Create a Car class with properties make, model, and year, then make instance of electric car which have battery level

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, batteryLevel) {
    super(make, model, year);
    this.batteryLevel = batteryLevel;
  }
}

// 2) Create a Library class that stores a list of books (as an array)
// which have following methods addBook(), removeBook(), listBooks().
// listBooks should have array of objects with following properties: [
//     {
//     author: 'George Orwell',
//     book: 'Nineteen Eighty-Four',
//     year: 1948,
//     }

class Library {
  #books = [];

  addBook(author, book, year) {
    const newBook = {
      author,
      book,
      year,
    };
    console.log(author, book, year, newBook);
    this.#books.push(newBook);
    return this;
  }
  removeBook(book) {
    const indexOf = this.#books.findIndex((el) => el.book === book);

    if (indexOf === -1) return console.log('book does not exist');
    this.#books.splice(indexOf, 1);
    console.log('delete book');
    return this;
  }
  listBooks() {
    console.log('listBooks: ', this.#books);
  }
}

const myLibrary = new Library();

myLibrary
  .addBook('George Orwell', 'Nineteen Eighty-Four', '1948')
  .addBook('tolstoy', 'anna karenina', '1980')
  .removeBook('Nineteen Eighty-Four')
  .listBooks();

//   3) Create a class Employee with a method calculateSalary() that calculates salary based on hours worked and hourly rate.

class Employee {
  constructor(hoursWorked, hourlyRate) {
    this.hoursWorked = hoursWorked;
    this.hourlyRate = hourlyRate;
  }
  calculateSalaty() {
    console.log('employee salary is:', this.hoursWorked * this.hourlyRate, '$');
  }
}

const employee = new Employee(50, 5);
employee.calculateSalaty();

// 4) Create a class ShoppingCart that holds a list of items. methods, addItem(), deleteItem(), updateItem(), calculateTotal()

class ShoppingCart {
  #items = [];

  addItem(name, price, qty) {
    const newItem = {
      name,
      price,
      qty: qty || 1,
    };

    this.#items.push(newItem);
    console.log('item added', newItem);
    return this;
  }
  deleteItem(name) {
    const index = this.#items.findIndex((item) => item.name === name);
    if (index === -1) return console.log('item does not exist');
    this.#items.splice(index, 1);
    console.log('item deleted', this.#items[index]);
    return this;
  }
  updateItem(name, qty) {
    const index = this.#items.findIndex((item) => item.name === name);
    if (index === -1) return console.log('item does not exist');
    this.#items[index].qty = qty;
    return this;
  }
  calculateTotal() {
    const itemsPrice = this.#items.reduce(
      (acc, cur) => acc + cur.price * cur.qty,
      0
    );
    console.log(itemsPrice, 'total price');
    return this;
  }
  showCart() {
    console.log(this.#items);
  }
}

const myShopping = new ShoppingCart();

myShopping
  .addItem('car', 2400, 1)
  .addItem('phone', 1200, 1)
  .updateItem('phone', 2)
  .calculateTotal()
  .deleteItem('phone')
  .calculateTotal()
  .showCart();

// 5)  Create a CarFactory class that have following methods, addCar, deleteCar, updateCar, getAllCars. getAllCars should be array of objects with following properties: [
//   {
//   year: 2010 // use random year from 2010 to 2024 using math.random
//   model: 'Ferrari',
//   price: 350000
//   }
//   ]

class CarFactory {
  #allCars = [];

  addCar(model, price) {
    let year = Math.floor(Math.random() * (2024 - 2010) + 2010);
    const newCar = {
      year,
      model,
      price,
    };
    this.#allCars.push(newCar);
    console.log('add successfully', newCar);
    return this;
  }

  deleteCar(model) {
    const carIndex = this.#allCars.findIndex((car) => car.model === model);
    if (carIndex === -1) console.log('car not found');
    const deleteCar = this.#allCars.splice(carIndex, 1);
    console.log('deleted successfully', deleteCar);
    return this;
  }

  updateCar(model, price) {
    const carIndex = this.#allCars.findIndex((car) => car.model === model);
    if (carIndex === -1) console.log('car not found');
    this.#allCars[carIndex].price = price;
    return this;
  }

  getAllCars() {
    console.log(this.#allCars);
  }
}

const myCars = new CarFactory();

myCars
  .addCar('mercedes', 12000)
  .updateCar('mercedes', 15000)
  .addCar('bmw', 5000)
  .deleteCar('mercedes')
  .getAllCars();
