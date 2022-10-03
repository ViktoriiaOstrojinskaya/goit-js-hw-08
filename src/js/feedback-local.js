const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export default {
  save,
  load,
};

// import throttle from 'lodash.throttle';
// // import local from './feedback-local';

// const STORAGE_KEY = 'feedback-form-state';
// const formData = {};

// const form = document.querySelector('.feedback-form');

//form.addEventListener('input', throttle(onFormInput, 500));

// form.addEventListener('input', throttle(onFormInput, 500));
// function onFormInput(event) {
//   event.preventDefault();
//   formData[event.target.name] = event.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

// function outFormData(event) {
//   const saveFormData = localStorage.getItem(STORAGE_KEY);
//   if (saveFormData) {
//     formData.value = saveFormData;
//   }
// }

// form.addEventListener('submit', onSubmit);
// function onSubmit(event) {
//   event.preventDefault();
//   outFormData(event);
//   console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
//   localStorage.removeItem(STORAGE_KEY);
//   event.currentTarger.reset();
// }

// localStorage.setItem('feedback-form-state', JSON.stringify({email: , message: }));
// const saveData = localStorage.getItem('feedback-form-state');
// const parseData = JSON.parse(saveData);
// console.log(parseData);

// if (!event.currentTarger.value) {
//   alert('All fields must be filled!');
// }
