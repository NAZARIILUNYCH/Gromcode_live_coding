/* eslint-disable no-return-assign */
const battonElem = document.querySelector('.submit-button');
const errorElem = document.querySelector('.error-text');
const loginForm = document.querySelector('.login-form');

const onInputValid = () =>
  loginForm.reportValidity() ? (battonElem.disabled = false) : (battonElem.disabled = true);

const submitHandler = event => {
  event.preventDefault();

  const user = [...new FormData(loginForm)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {},
  );

  fetch('https://5ff2e7d128c3980017b18ca3.mockapi.io/api/v1/form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
  })
    .then(response => {
      if (response.ok) {
        return response.text();
      }

      errorElem.textContent = 'Failed to create user';
      throw new Error('Failed to create user');
    })
    .then(userData => {
      loginForm.reset();

      alert(userData);
    });

  // .then(() => loginForm.reset())
  // .then(() => getUserForm())
  // .catch(() => ())
  // .finally(() => loginForm.addEventListener('input', textError));
};

const getUserForm = () =>
  fetch(baseUrl)
    .then(response => response.json())
    .then(value => alert(JSON.stringify(value)));

const textError = event => {
  if (event.type === 'input') {
    errorElem.textContent = '';
  }
};

loginForm.addEventListener('submit', submitHandler);
loginForm.addEventListener('input', onInputValid);
