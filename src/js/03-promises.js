// Завдання 3 - генератор промісів

import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', OnClickBtn);

function OnClickBtn(e) {
  e.preventDefault();

  const { delay, step, amount } = e.currentTarget.elements;
  if (delay.value <= 0 || step.value < 0 || amount.value < 0) {
    return Notiflix.Notify.failure('Please enter a value greater than zero', {
      width: '300px',
    });
  }

  for (let i = 0; i < amount.value; i += 1) {
    const currentDelay = i * Number(step.value) + Number(delay.value);
    startPromise(i + 1, currentDelay);
  }
}

function startPromise(number, delay) {
  createPromise(number, delay)
    .then(({ position, delay }) => {
      success(position, delay);
    })
    .catch(({ position, delay }) => {
      error(position, delay);
    });
}

// -------------------------------------------------------------

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function error(position, delay) {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}

function success(position, delay) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}
