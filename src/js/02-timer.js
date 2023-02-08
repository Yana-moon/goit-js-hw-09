// Завдання 2 - таймер зворотного відліку //

// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

// ------------------------------------------------------

let nowDate = 0;
let selectedDate = 0;
let deltaTime = 0;
let interval = 0;

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    selectedDate = selectedDates[0].getTime();
    nowDate = Date.now();
    timerData();
    dateSelection();
    clearInterval(interval);
  },
};

refs.startBtn.setAttribute('disabled', 'true');
refs.startBtn.addEventListener('click', onStartTimer);

flatpickr(refs.input, options);

function timerData() {
  deltaTime = selectedDate - nowDate;
}

function dateSelection() {
  if (nowDate > selectedDate) {
    return Notiflix.Notify.failure('Please choose a date in the future', {
      position: 'center-top',
      clickToClose: true,
      cssAnimationStyle: 'from-right',
    });
  }
  updateTimer(convertMs(deltaTime));
  refs.startBtn.removeAttribute('disabled');
}

function onStartTimer() {
  nowDate = Date.now();
  timerData();
  interval = setInterval(() => {
    deltaTime -= 1000;
    if (deltaTime <= 0) {
      clearInterval(interval);
      return Notiflix.Report.info('Time is over', 'Your time is over', 'Ok', {
        info: {
          svgColor: '#32c682',
          buttonBackground: '#32c682',
          backOverlayColor: 'rgba(250,250,250,0.1)',
        },
        width: '280px',
        messageFontSize: '14px',
        titleFontSize: '20px',
        backgroundColor: '#e8fbf1',
        cssAnimationStyle: 'zoom',
      });
    }
    updateTimer(convertMs(deltaTime));
    console.log(convertMs(deltaTime));
  }, 1000);
  refs.startBtn.setAttribute('disabled', 'true');
}

function updateTimer({ days, hours, minutes, seconds }) {
  refs.days.textContent = String(days).padStart(2, '0');
  refs.hours.textContent = String(hours).padStart(2, '0');
  refs.minutes.textContent = String(minutes).padStart(2, '0');
  refs.seconds.textContent = String(seconds).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}