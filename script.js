const subjectElement = document.querySelector('.text-subject');
const timerElement = document.querySelector('.timer');
const timerInput = document.querySelector('#time-interval');
const intervalElement = document.querySelector('.show-interval');
const inputDiv = document.querySelector('.input-div');
const subjectInput = document.querySelector('#name-subject');
const button = document.querySelector('#interval-btn');
const errorName = document.querySelector('.error-name');
const errorTime = document.querySelector('.error-time');
let time, intervalId;

const checkInput = () => {
  subjectInput.value === '' ? errorName.classList.remove('none') : errorName.classList.add('none');
  timerInput.value === '' ? errorTime.classList.remove('none') : errorTime.classList.add('none');

  if (subjectInput.value !== '' && timerInput.value !== '') {
    const init = checkTime();

    if (init) {
      intervalId = setInterval(timer, 1000);
      showInterval();
    }
  }
}

const checkTime = () => {
  try {
    time = parseInt(timerInput.value) * 60;
    errorTime.classList.add('none');
    return true
  } catch (err) {
    errorTime.classList.remove('none');
  }
}

const timer = () => {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;
  timerElement.innerHTML = `${minutes}:${seconds}`

  time--;
  time = time < 0 ? 0 : time
}

const showInterval = () => {
  subjectElement.textContent = subjectInput.value;
  intervalElement.classList.remove('none');
  inputDiv.classList.add('none');
  button.textContent = 'Reiniciar';
}

const reset = () => {
  subjectElement.textContent = '';
  subjectInput.value = '';
  time = 0;
  clearInterval(intervalId);
  intervalElement.classList.add('none');
  inputDiv.classList.remove('none');
  button.textContent = 'Gerar Intervalo';
}

button.addEventListener('click', () => { subjectElement.textContent === '' ? checkInput() : reset() })