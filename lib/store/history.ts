import { noop } from 'lodash';
import { createHydratedStore, createPersistedStore } from './utils';

interface IHistoryState {
  history: {
    id: string;
    date: string;
  }[];
  isWatching: boolean;
  addToHistory: (videoId: string) => void;
  clearHistory: VoidFunction;
  toggleWatching: VoidFunction;
}

const defaultHistoryState:IHistoryState = {
  history: [],
  isWatching: true,
  addToHistory: noop,
  clearHistory: noop,
  toggleWatching: noop
}

const defaultHistoryStore = createPersistedStore<IHistoryState>(
  (set, get) => ({
    history: defaultHistoryState.history,
    isWatching: defaultHistoryState.isWatching,

    addToHistory: (id) => {
      const history = get().history;
      set({
        history: [
          ...history.filter((element, index) => {
            return history.findIndex(el => el.id === element.id) === index;
          }),
          {
            id,
            date: new Date().toISOString()
          }
        ],
      })
    },

    clearHistory: () => {
      set({
        history: []
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