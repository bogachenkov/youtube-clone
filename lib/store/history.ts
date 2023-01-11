import { noop } from 'lodash';
import { createHydratedStore, createPersistedStore } from './utils';

interface IHistoryState {
  history: string[];
  addToHistory: () => void;
  removeFromHistory: () => void;
}

const defaultHistoryState:IHistoryState = {
  history: [],
  addToHistory: noop,
  removeFromHistory: noop
}

const defaultHistoryStore = createPersistedStore<IHistoryState>(
  (set, get) => ({
    history: defaultHistoryState.history,
    addToHistory: () => set({
      history: get().history
    }),
    removeFromHistory: () => set({
      history: get().history
    }),
  }),
  'history-store'
)

export const useHistoryStore = createHydratedStore(
  defaultHistoryState, 
  defaultHistoryStore
) as typeof defaultHistoryStore;