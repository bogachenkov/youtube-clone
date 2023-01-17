import { noop } from 'lodash';
import { createHydratedStore, createPersistedStore, IStateCreator } from './utils';

interface ILikesState {
  likedIds: string[];
  lastUpdate: string;
  toggleLike: (id: string) => void;
}

const toggleLike = (ids: ILikesState['likedIds'], id: string) => {
  return ids.includes(id) ? ids.filter(i => i !== id) : [...ids, id]
}

const defaultLikesState:ILikesState = {
  likedIds: [],
  lastUpdate: new Date().toISOString(),
  toggleLike: noop
}

const storeCreator:IStateCreator<ILikesState> = (set, get) => ({
  likedIds: defaultLikesState.likedIds,
  lastUpdate: defaultLikesState.lastUpdate,
  toggleLike: (id) => set({
    likedIds: toggleLike(get().likedIds, id),
    lastUpdate: new Date().toISOString()
  })
})

export const defaultLikesStore = createPersistedStore<ILikesState>(
  storeCreator,
  'likes-store'
);

export const useLikesStore = createHydratedStore(
  defaultLikesState, 
  defaultLikesStore
) as typeof defaultLikesStore;
