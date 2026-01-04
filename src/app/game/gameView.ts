import { initialGameRound } from './gameData';
import type { GameWord } from './gameData';

export function renderWords(container: HTMLElement): void {
  container.innerHTML = '';

  initialGameRound.words.forEach((word: GameWord) => {
    const wordButton = document.createElement('button');
    wordButton.textContent = word.text;
    wordButton.dataset.id = String(word.id);

    container.append(wordButton);
  });
}