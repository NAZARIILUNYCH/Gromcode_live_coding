'use strict';

function printMessage(country, city) {
  console.log(this);

  console.log(`Hello, ${this.name}. My age is ${this.age}. I am from ${country}, ${city}`);
}

const user = {
  name: 'Andrey',
  age: 111,
};

// printMessage('Ukraine', 'Kyiv');

// input: context, args
// output: func

// 1
// const printMessageBinded = printMessage.bind(user, 'Germany', 'Berlin');
// printMessageBinded();

// 2
// printMessage.bind(user, 'Germany', 'Berlin')();

// 3
// const printMessageBinded = printMessage.bind(user, 'Germany');
// printMessageBinded('Berlin');

// 4
// const printMessageBinded = printMessage.bind(user);
// printMessageBinded('Germany', 'Berlin');

// 5
// printMessage.bind(user)('Germany', 'Berlin');

// option 1 - using bind
// input: func, obj, args
// output: func
// function myBind(func, context, ...args) {
//   return func.bind(context, ...args);
// }

// myBind(printMessage, user)('Germany', 'Berlin');

// option 2 - using apply

// function myBind(func, context, ...args) {
//   return function (...params) {
//     return func.call(context, ...args, ...params);
//   };
// }

//

// option 3 - using custom JS
function myBind(func, context, ...args) {
  return function (...params) {
    const contextCopy = { ...context };
    context.tempFunc = func;
    context.tempFunc(...args, ...params);
  };
}

myBind(printMessage, user)('Germany', 'Berlin');
