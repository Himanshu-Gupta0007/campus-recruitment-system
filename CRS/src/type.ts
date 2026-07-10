



let age: number = 22;
let numbers: number[] = [1, 2, 3, 4];


interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Himanshu",
  age: 22,
};

console.log(user);


// ===============================
// TypeScript Basics - Part 1
// ===============================

// 1. Hello World
console.log("Welcome to TypeScript");

// 2. Variables
let firstName: string = "Himanshu";
let age: number = 22;
let isDeveloper: boolean = true;

console.log(firstName);
console.log(age);
console.log(isDeveloper);

// 3. Type Inference
let city = "Delhi";
let salary = 25000;
let active = true;

console.log(city);
console.log(salary);
console.log(active);

// 4. Arrays
let numbers: number[] = [10, 20, 30, 40];
let names: string[] = ["A", "B", "C"];

console.log(numbers);
console.log(names);

// 5. Array using Generic
let marks: Array<number> = [80, 90, 95];
console.log(marks);

// 6. Tuple
let employee: [number, string] = [101, "Himanshu"];
console.log(employee);

// 7. Enum
enum Role {
  Admin,
  User,
  Guest,
}

let myRole: Role = Role.Admin;
console.log(myRole);

// 8. Any
let value: any = "Hello";
console.log(value);

value = 100;
console.log(value);

value = true;
console.log(value);

// 9. Unknown
let input: unknown = "TypeScript";

if (typeof input === "string") {
  console.log(input.toUpperCase());
}

// 10. Void
function printMessage(): void {
  console.log("Learning TypeScript");
}

printMessage();

// 11. Never
function throwError(message: string): never {
  throw new Error(message);
}

// 12. Null
let data: null = null;
console.log(data);

// 13. Undefined
let test: undefined = undefined;
console.log(test);

// 14. Union Type
let id: number | string;

id = 100;
console.log(id);

id = "EMP101";
console.log(id);

// 15. Literal Type
let direction: "left" | "right";

direction = "left";
console.log(direction);

// 16. Object
let student: {
  name: string;
  age: number;
} = {
  name: "Rahul",
  age: 21,
};

console.log(student);

// 17. Type Alias
type User = {
  id: number;
  name: string;
};

const user1: User = {
    id: 1,
  name: "Himanshu",
};

console.log(user1);

// 18. Optional Property
type Employee = {
  id: number;
  name: string;
  salary?: number;
};

const emp1: Employee = {
  id: 101,
  name: "Rohit",
};

console.log(emp1);

// 19. Readonly Property
type Car = {
  readonly brand: string;
  model: string;
};

const car: Car = {
  brand: "BMW",
  model: "X5",
};

console.log(car);

// 20. Functions
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20));

// 21. Arrow Function
const multiply = (a: number, b: number): number => {
  return a * b;
};

console.log(multiply(5, 6));

// 22. Default Parameter
function greet(name: string = "Guest"): void {
  console.log("Hello " + name);
}

greet();
greet("Himanshu");

// 23. Optional Parameter
function display(name: string, age?: number): void {
  console.log(name, age);
}

display("Rahul");
display("Himanshu", 22);

// 24. Rest Parameter
function total(...nums: number[]): number {
  return nums.reduce((sum, n) => sum + n, 0);
}

console.log(total(10, 20, 30));

// 25. Type Assertion
let userInput: unknown = "TypeScript";

let strLength: number = (userInput as string).length;
console.log(strLength);

// 26. Type Casting
let randomValue: any = "123";

let convertedNumber = Number(randomValue);
console.log(convertedNumber);

// 27. Boolean Example
let isLogin: boolean = false;

if (!isLogin) {
  console.log("Please Login");
}

// 28. String Methods
let language: string = "typescript";

console.log(language.toUpperCase());
console.log(language.length);

// 29. Number Methods
let price: number = 999.99;

console.log(price.toFixed(2));

// 30. Simple Loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// ===============================
// End of Part 1
// ===============================