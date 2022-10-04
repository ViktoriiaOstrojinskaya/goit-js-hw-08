import throttle from 'lodash.throttle';
import local from './local-storage';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

saveValue();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onSubmit);

function onFormInput() {
  const formData = { email: input.value, message: textarea.value };
  local.save(STORAGE_KEY, formData);
}

function saveValue() {
  const saveFormData = local.load(STORAGE_KEY);
  if (saveFormData) {
    input.value = saveFormData.email;
    textarea.value = saveFormData.message;
  } else {
    input.value = '';
    textarea.value = '';
  }
}

function onSubmit(event) {
  event.preventDefault();
  if (!input.value || !textarea.value) {
    alert('All fields must be filled!');
  } else {
    console.log(local.load(STORAGE_KEY));
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
  }
}
