import create from 'zustand';
import { persist } from 'zustand/middleware';

interface IHistoryState {
  history: string[];
  addToHistory: () => void;
  removeFromHistory: () => void;
}

export const useHistoryStore = create<IHistoryState>()(
  persist(
    (set, get) => ({
      history: [],
      addToHistory: () => set({
        history: get().history
      }),
      removeFromHistory: () => set({
        history: get().history
      }),
    }),
    {
      name: 'history-storage',
      getStorage: () => sessionStorage,
    }
  )
);