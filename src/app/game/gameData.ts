// слово в игровом раунде
export interface GameWord {
  id: number;
  text: string;
  used: boolean;
}

// игровой раунд (упрощённо)
export interface GameRound {
  sentence: string;
  words: GameWord[];
}

// временные тестовые данные
export const initialGameRound: GameRound = {
  sentence: 'The students agree they have too much homework',
  words: [
    { id: 1, text: 'The ', used: false },
    { id: 2, text: ' students', used: false },
    { id: 3, text: ' agree', used: false },
    { id: 4, text: ' they', used: false },
    { id: 5, text: ' have', used: false },
    { id: 6, text: ' too', used: false },
    { id: 7, text: ' much', used: false },
    { id: 8, text: ' homework', used: false },
  ],
};