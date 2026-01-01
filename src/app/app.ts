import { store } from './state/store';


const root = document.getElementById('app') as HTMLElement;


function render(): void {
  const { currentPage } = store.getState();

  root.innerHTML = '';

  if (currentPage === 'login') {
    const title = document.createElement('h1');
    title.textContent = 'RSS Puzzle — Login';

    const subtitle = document.createElement('p');
    subtitle.textContent = 'Введите имя, чтобы начать игру';


    const button = document.createElement('button');
    button.textContent = 'Start';

    button.addEventListener('click', () => {
      store.setState({ currentPage: 'start' });
    });

    root.append(title, subtitle, button);
  }
  if (currentPage === 'start') {
    const title = document.createElement('h1');
    title.textContent = 'Start screen';

    const text = document.createElement('p');
    text.textContent = 'Здесь будет стартовый экран игры';

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



