import { concat, noop } from 'lodash';
import { createHydratedStore, createPersistedStore } from './utils';

interface IHistoryState {
  history: {
    id: string;
    date: string;
  }[];
  lastUpdate: string;
  isWatching: boolean;
  addToHistory: (videoId: string) => void;
  clearHistory: VoidFunction;
  toggleWatching: VoidFunction;
}

const defaultHistoryState:IHistoryState = {
  history: [],
  lastUpdate: new Date().toISOString(),
  isWatching: true,
  addToHistory: noop,
  clearHistory: noop,
  toggleWatching: noop
}

const defaultHistoryStore = createPersistedStore<IHistoryState>(
  (set, get) => ({
    history: defaultHistoryState.history,
    lastUpdate: defaultHistoryState.lastUpdate,
    isWatching: defaultHistoryState.isWatching,

    addToHistory: (id) => {
      const history = get().history;
      const date = new Date().toISOString();

      const filteredHistory = concat(
        {
          id,
          date
        },
        history,
      ).filter((element, index, arr) => {
        return arr.findIndex(el => el.id === element.id) === index;
      });

      set({
        history: filteredHistory,
        lastUpdate: date
      })
    },

    clearHistory: () => {
      set({
        history: defaultHistoryState.history,
        lastUpdate: defaultHistoryState.lastUpdate
      })
    },

    toggleWatching: () => {
      set({
        isWatching: !get().isWatching
      })
    }
  }),
  'history-store'
)

export const useHistoryStore = createHydratedStore(
  defaultHistoryState, 
  defaultHistoryStore
) as typeof defaultHistoryStore;