/* eslint-disable no-unused-expressions */
/* eslint-disable max-classes-per-file, no-console */
class Sportsman {
  constructor(firstName) {
    console.log(this);

    this.firstName = firstName;

    console.log(this);
  }

  // get name() {
  //   if (this.name.length < 3) {
  //     throw new Error('Invalid name');
  //   }

  //   return this.name;
  // }

  run() {
    console.log(`${this.name} is running`);
  }
}

class Swimmer extends Sportsman {
  constructor(firstName, style) {
    // lose context - example 1
    super(firstName);
    this.style = style;
  }

  swim() {
    console.log(`${this.firstName} is swimming ${this.style}`);
  }

  // swim = () => {
  //   console.log(`${this.firstName} is swimming ${this.style}`);
  // };

  testFunc() {
    // const binded = this.swim.bind(this);
    // setTimeout(binded, 3000);
    setTimeout(this.swim, 3000);
  }
}

// function setTimeout(func, ms) {
//   // ......
//   // ......
//   // ......

//   const window = new Window();
//   window.func();
// }

// testing
// lose context - example 2
// console.log('STATIC CALL');
// Swimmer.swim();

const sportsman = new Sportsman('Denis');
const swimmer = new Swimmer('User', 'Some style');
swimmer.firstName;
swimmer.swim();

// lose context - example 3
// const swimFunc = swimmer.swim();
// swimFunc();

// lose context - example 4
// swimmer.testFunc();

const obj = {
  name: 'Test',
  run() {
    console.log();
  },
};

console.log(obj);
