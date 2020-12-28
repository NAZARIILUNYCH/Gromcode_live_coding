/* eslint-disable no-use-before-define */
// option 1
// const items = document.querySelectorAll('.list-item');

// console.log(items);

// items.forEach(item => {
//   item.addEventListener('click', handleItemClick);
// });

// function handleItemClick() {
//   console.log('clicked');
// }

// option 2
const list = document.querySelector('.list');
list.addEventListener('click', handleListClick);

function handleListClick(event) {
  if (event.target.className !== 'list-item') {
    return;
  }

  console.log(event.target.textContent);
}

// WEB FLOW
// 1. get data from server => [{ ... }, { ... }, { ... }]
// 2. render (!!!)
// 3. handle event - UPDATE [{ ... }, { ... }, { ... }], don't touch DOM
// 4. re render
