import log from './helpers/log';

// Write an Identity function that takes an argument and returns that argument
export const identity = (id: unknown): typeof id => id;
log(identity(3), identity.name);

// Write an add function that adds two numbers
export const add = (a: number, b: number): number => a + b;

// Write a sub function that subs two numbers
export const sub = (a: number, b: number): number => a - b;

// Write a mul function that muls two numbers
export const mul = (a: number, b: number): number => a * b;

// Write a function identityF that takes an argument and returns a function that returns that argument
type Identity = () => unknown;
export const identityF = (a: unknown): Identity => () => a;

// Write a function addF that adds from two invocations
// addF(2)(3); //=> 5
type Add = (value: number) => number;
export const addF = (a: number): Add => (b: number): number => a + b;

// Write a function liftF that takes a binary function and makes it callable with two invocations
// const liftedAdd = liftF(add);
// liftedAdd(3)(4) //=> 7
// liftedMul(2)(4) // => 8
