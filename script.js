const subjectElement = document.querySelector('.text-subject');
const intervalElement = document.querySelector('.show-interval');
const inputDiv = document.querySelector('.input-div');
const subjectInput = document.querySelector('#name-subject');
const button = document.querySelector('#interval-btn');
const error = document.querySelector('.error');

const checkInput = () => {
  if (subjectInput.value === '') {
    error.classList.remove('none');
  } else {
    error.classList.add('none');
    showInterval();
  }
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
  intervalElement.classList.add('none');
  inputDiv.classList.remove('none');
  button.textContent = 'Gerar Intervalo';
}

button.addEventListener('click', () => {
  if (subjectElement.textContent === '') {
    checkInput();
  }

  else if (subjectElement.textContent !== '') {
    reset();
  }
})