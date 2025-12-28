import type { Page } from '../../types/appState';

type Listener = () => void;

interface StoreState {
  userName: string | null;
  currentPage: Page;
  level: number;
  round: number;
}

class Store {
  private state: StoreState;
  private listeners: Listener[] = [];

  constructor() {
    this.state = this.loadState();
  }

  private loadState(): StoreState {
    const saved = localStorage.getItem('rss-puzzle-state');
    return saved
      ? JSON.parse(saved)
      : {
        userName: null,
        currentPage: 'login',
        level: 1,
        round: 1,
      };
  }

  private saveState(): void {
    localStorage.setItem('rss-puzzle-state', JSON.stringify(this.state));
  }

  getState(): StoreState {
    return { ...this.state };
  }

  setState(partial: Partial<StoreState>): void {
    this.state = { ...this.state, ...partial };
    this.saveState();
    this.notify();
  }

  subscribe(listener: Listener): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notify(): void {
    this.listeners.forEach((listener) => listener());
  }
}

export const store = new Store();
