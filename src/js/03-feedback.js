import throttle from 'lodash.throttle';

const KEY_LOCAL = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

let dataUser = localStorage.getItem(KEY_LOCAL);
dataUser = dataUser ? JSON.parse(dataUser) : {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputFocus, 500));

autoComplite();

function onFormSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(KEY_LOCAL);
  form.reset();
  console.log(dataUser);
  dataUser = {};
}

function onInputFocus(event) {
  if (event.target.name === 'email') {
    dataUser[event.target.name] = event.target.value;
  }
  if (event.target.name === 'message') {
    dataUser[event.target.name] = event.target.value;
  }
  localStorage.setItem(KEY_LOCAL, JSON.stringify(dataUser));
}

function autoComplite() {
  const { email, message } = dataUser;
  if (email) {
    form.elements.email.value = email;
  }
  if (message) {
    form.elements.message.value = message;
  }
}
