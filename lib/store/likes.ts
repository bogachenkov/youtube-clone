import { noop } from 'lodash';
import { createHydratedStore, createPersistedStore } from './utils';

interface ILikesState {
  likedIds: string[];
  toggleLike: (id: string) => void;
}

const toggleLike = (ids: ILikesState['likedIds'], id: string) => {
  return ids.includes(id) ? ids.filter(i => i !== id) : [...ids, id]
}

const defaultLikesState:ILikesState = {
  likedIds: [],
  toggleLike: noop
}

export const defaultLikesStore = createPersistedStore<ILikesState>(
  (set, get) => ({
    likedIds: [],
    toggleLike: (id) => set({
      likedIds: toggleLike(get().likedIds, id)
    })
  }),
  'likes-store'
);

export const useLikesStore = createHydratedStore(
  defaultLikesState, 
  defaultLikesStore
) as typeof defaultLikesStore;