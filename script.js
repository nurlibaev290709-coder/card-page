const jokes = [
  '«Я не прокрастинирую.\nЯ просто даю идеям\nвремя выйти на орбиту.»',
  '«Встреча должна была быть\nписьмом. Но письмо стало\nстартапом.»',
  '«Мой план на выходные:\nпоспать. Ошибка 404:\nплан не найден.»',
  '«Если кнопка мигает —\nэто либо прогресс,\nлибо очень смелый дизайн.»'
];

const jokeText = document.querySelector('.joke-text');
const terminalPrompt = document.querySelector('.prompt');
const jokeButtons = document.querySelectorAll('[data-joke]');
const toggle = document.querySelector('.mode-toggle');

function showJoke() {
  const current = jokeText.textContent;
  const choices = jokes.filter((joke) => joke !== current);
  jokeText.style.opacity = '0';
  terminalPrompt.textContent = '> ищем сигнал иронии…';
  setTimeout(() => {
    jokeText.textContent = choices[Math.floor(Math.random() * choices.length)];
    jokeText.style.opacity = '1';
    terminalPrompt.textContent = '> побочная сторона успешно загружена.';
  }, 180);
}

jokeButtons.forEach((button) => button.addEventListener('click', showJoke));
toggle.addEventListener('click', () => {
  const active = document.body.classList.toggle('mode-fun');
  toggle.setAttribute('aria-pressed', String(active));
  toggle.querySelector('.toggle-label').textContent = active ? 'основная сторона' : 'побочная сторона';
});
