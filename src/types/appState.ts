export type Page = 'login' | 'start' | 'game' | 'stats';
export interface AppState {
  userName: string | null;
  currentPage: Page;
  level: number;
  round: number;
}