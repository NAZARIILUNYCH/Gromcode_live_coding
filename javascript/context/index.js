/* eslint-disable no-unused-expressions */
/* eslint-disable no-return-assign */
const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  timerId: null,

  // option 1
  // startTimer() {
  //   function handler() {
  //     this.secondsPassed += 1;
  //     console.log(this.secondsPassed);
  //   }

  //   const handlerWithContext = handler.bind(this);

  //   // setInterval(handlerWithContext, 1000);
  // },

  // option 2
  startTimer() {
    const timerId = setInterval(() => {
      if (this.secondsPassed === 60) {
        this.secondsPassed = 0;
        this.minsPassed += 1;
      }

      this.secondsPassed += 1;
    }, 1000);

    this.timerId = timerId;
  },
  stopTimer() {
    clearInterval(this.timerId);
  },
  getTime() {
    return this.secondsPassed < 10
      ? `${this.minsPassed}:0${this.secondsPassed}`
      : `${this.minsPassed}:${this.secondsPassed}`;
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

// input: num - timerID
// output: undefined
// clearInterval();
