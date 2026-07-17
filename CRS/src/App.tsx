import { useState } from "react";

const App = () => {
  const name: string = "Himanshu";
  const age: number = 22;
  const [count , setCount] = useState<string>("0");
  

  interface User {
  name: string;
  age: number;
  city: string;
}

const user: User = {
  name: "Himanshu",
  age: 22,
  city: "Delhi",
};

console.log(user);


interface Student {
  id: number;
  name: string;
}


const students: Student[] = [
  {
    id: 1,
    name: "Himanshu",
  },
  {
    id: 2,
    name: "Rahul",
  },
];


let numbers: number[] = [10, 20, 30, 40];

console.log(numbers);


let fruits: string[] = ["Apple", "Banana", "Mango"];

console.log(fruits);

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up);    // 0
console.log(Direction.Down);  // 1
console.log(Direction.Left);  // 2
console.log(Direction.Right); // 3



enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

console.log(StatusCode.Success);    // 200
console.log(StatusCode.NotFound);   // 404
console.log(StatusCode.ServerError); // 500




enum Role {
  Admin = "ADMIN",
  User = "USER",
}

function checkRole(role: Role) {
  if (role === Role.Admin) {
    console.log("Welcome Admin");
  } else {
    console.log("Welcome User");
  }
}

checkRole(Role.Admin);
checkRole(Role.User);

enum UserRole {
  Admin = "ADMIN",
  Manager = "MANAGER",
  Employee = "EMPLOYEE",
}

function accessDashboard(role: UserRole) {
  if (role === UserRole.Admin) {
    console.log("Full Access");
  } else if (role === UserRole.Manager) {
    console.log("Manager Access");
  } else {
    console.log("Employee Access");
  }
}

accessDashboard(UserRole.Admin);


let users: [number, string][] = [
  [1, "Rahul"],
  [2, "Aman"],
  [3, "Himanshu"],
];

console.log(users);

type Name = string;

let firstName: Name = "Himanshu";
console.log(firstName);



type Add = (a: number, b: number) => number;

const sum: Add = (a, b) => a + b;

console.log(sum(10, 20));

  interface Login {
  (username: string, password: string): boolean;
}

const login: Login = (user, pass) => {
  return user === "admin" && pass === "1234";
};

console.log(login("admin", "1234"));


function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

print("Himanshu");
print(99);


class Dog {
  bark() {
    console.log("Bark");
  }
}

class Cat {
  meow() {
    console.log("Meow");
  }
}

function animalSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

animalSound(new Dog());
animalSound(new Cat());


interface Bird {
  fly(): void;
}

interface Fish {
  swim(): void;
}

function move(animal: Bird | Fish) {
  if ("fly" in animal) {
    animal.fly();
  } else {
    animal.swim();
  }
}

const bird: Bird = {
  fly() {
    console.log("Flying");
  },
};

const fish: Fish = {
  swim() {
    console.log("Swimming");
  },
};

move(bird);
move(fish); 

let value: unknown = "Himanshu";

let username = value as string;

console.log(username.toUpperCase());


let data: unknown = 50;

if(typeof data==="number"){
    console.log(data+100);
}

let value1: string | number = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}


function addnumber <t>(a: number, b: number): number{
  return a+b;
} 


addnumber(10,20);

interface Box<T> {
  value: T;
}

const box4: Box<string> = {
  value: "Hello TypeScript",
};

console.log(box4.value);

interface Box<T> {
  value: T;
}

const box5: Box<boolean> = {
  value: true,
};

console.log(box5.value);


  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg" onClick={() => setCount((parseInt(count) + 1).toString())}>+</button>
      <h1 className="text-2xl font-bold">{count}</h1>
      <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg  " onClick={() => setCount((parseInt(count) - 1).toString())}>-</button>


     

    </div>
  );
};

export default App;