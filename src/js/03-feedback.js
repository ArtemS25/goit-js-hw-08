import throttle from 'lodash.throttle';

const KEY_LOCAL = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('.feedback-form input'),
  textArea: document.querySelector('.feedback-form textarea'),
};
let dataUser = localStorage.getItem(KEY_LOCAL);
dataUser = dataUser ? JSON.parse(dataUser) : {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputFocus, 500));

autoComplite();

function onFormSubmit(event) {
  event.preventDefault();
  localStorage.clear();
  refs.form.reset();
  console.log(dataUser);
  return dataUser;
}

function onInputFocus(event) {
  if (event.target.name === 'email') {
    dataUser.email = event.target.value;
  }
  if (event.target.name === 'message') {
    dataUser.message = event.target.value;
  }
  localStorage.setItem(KEY_LOCAL, JSON.stringify(dataUser));
}

function autoComplite() {
  const { email, message } = dataUser;
  if (email) {
    refs.inputEmail.value = email;
  }
  if (message) {
    refs.textArea.value = message;
  }
}
