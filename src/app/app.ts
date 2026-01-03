import { store } from './state/store';


const root = document.getElementById('app') as HTMLElement;


function render(): void {
  const { currentPage, userName } = store.getState();

  root.innerHTML = '';

  if (currentPage === 'login') {
    const title = document.createElement('h1');
    title.textContent = 'RSS Puzzle — Login';

    const subtitle = document.createElement('p');
    subtitle.textContent = 'Введите имя, чтобы начать игру :';

    // add input
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Введите имя';
    input.value = userName ?? '';



    const button = document.createElement('button');
    button.textContent = 'Start';

    button.addEventListener('click', () => {
      store.setState({
        userName: input.value.trim(),
        currentPage: 'start'
      });
    });

    root.append(title, subtitle, input, button);
  }
  if (currentPage === 'start') {
    const title = document.createElement('h1');
    title.textContent = 'Start screen';

    const text = document.createElement('p');
    text.textContent = `Привет, ${userName ?? 'игрок'}!`;

    // кнопка для запуска игры
    const playButton = document.createElement('button');
    playButton.textContent = 'Play';

    playButton.addEventListener('click', () => {
      store.setState({ currentPage: 'game' });
    });

    root.append(title, text, playButton);
  }
  //поле игры
  if (currentPage === 'game') {
    const title = document.createElement('h1');
    title.textContent = 'Game screen';

    const text = document.createElement('p');
    text.textContent = 'здесь будет игровое поле';

    root.append(title, text);
  }
}
store.subscribe(render);

// первый рендер при старте приложения
render();



store.subscribe(() => {
  // eslint-disable-next-line no-console
  console.log('STATE UPDATED:', store.getState());
});
// eslint-disable-next-line no-console
console.log('APP STARTED Ha-Ha');



