import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import './App.css';

let name: string;
let age: number;
let isLoading: boolean;
// An array of strings
let hobbies: string[];
// tuple
let role: [number, string];
// objects - two ways
let person_: Object; //not recommended
// interface, good Pascal case naming convention for interfaces
type Person = {
  // This way all properties are compulsory
  name: string;
  // This way the age property is optional because of the question mark in front
  age?: number;
};

let person: Person = {
  name: 'Jeyi',
  age: 20,
};

// Array of objects (person object)
// This assigns a type of Person Object to an array
let lotsOfPeople: Person[];

// Union
// Helps you assign type options to a variable
// This means the month variable can either be a number or a string
let month: number | string;

// Function
let printName_: Function; // Not recommended
let printName: (name: string) => void | never; // Void returns undefined, never never returns anything

// A recommended type for any
let personName: unknown;

// Interface
// This works the same as the type keyword
interface PersonI {
  name: string;
  age: number;
}

// With type, you can copy (extend) variables within types like this:
type X = { a: string };
type Y = X & { b: number };

let z: Y = {
  a: 'Hi',
  b: 42,
};

// With interface, you can copy (extend) variables within types like this:

interface Guy extends Person {
  profession: string;
}

function App() {
  return <div className='App'>Hello World</div>;
}

export default App;
