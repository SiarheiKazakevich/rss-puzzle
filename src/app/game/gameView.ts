import { initialGameRound } from './gameData';
import type { GameWord } from './gameData';
/*
export function renderWords(container: HTMLElement): void {
  container.innerHTML = '';

  initialGameRound.words.forEach((word: GameWord) => {
    const wordButton = document.createElement('button');
    wordButton.textContent = word.text;
    wordButton.dataset.id = String(word.id);

    container.append(wordButton);
  });
}*/

export function renderGame(
  wordsContainer: HTMLElement,
  sentenceContainer: HTMLElement
): void {
  wordsContainer.innerHTML = ' ';
  sentenceContainer.innerHTML = ' ';

  initialGameRound.words.forEach((word: GameWord) => {
    if (word.used) return;

    const wordButton = document.createElement('button');
    wordButton.textContent = word.text;
    wordButton.dataset.id = String(word.id);

    wordButton.addEventListener('click', () => {
      word.used = true;
      renderGame(wordsContainer, sentenceContainer);
    });
    wordsContainer.append(wordButton);
  });
  initialGameRound.words
    .filter((word) => word.used)
    .forEach((word) => {
      const placedWord = document.createElement('span');
      placedWord.textContent = word.text;
      placedWord.style.cursor = 'pointer';

      placedWord.addEventListener('click', () => {
        word.used = false;
        renderGame(wordsContainer, sentenceContainer);
      });



      sentenceContainer.append(placedWord);
    });
}