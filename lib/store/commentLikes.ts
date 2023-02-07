import { noop } from 'lodash';
import { createHydratedStore, createPersistedStore, IStateCreator } from './utils';

export interface ILike {
  id: string;
  liked: boolean;
}
export interface ILikesState {
  likes: ILike[];
  toggleLike: (id: string, liked: boolean) => void;
}

const toggleLike = (likes: ILikesState['likes'], id: string, liked: boolean) => {
  const likeObj = likes.find(l => l.id === id);
  if (!likeObj) {
    return [
      ...likes,
      {
        id, liked
      }
    ]
  };
  if (likeObj && likeObj.liked !== liked) {
    return likes.map(l => {
      if (l.id === id) {
        return {
          ...l,
          liked
        }
      } else {
        return l;
      }
    })
  };
  return likes.filter(l => l.id !== id);
}

const defaultCommentLikesState:ILikesState = {
  likes: [],
  toggleLike: noop,
}

const storeCreator:IStateCreator<ILikesState> = (set, get) => ({
  likes: [],
  toggleLike: (id, liked) => set({
    likes: toggleLike(get().likes, id, liked)
  }),
})

export const defaultCommentLikesStore = createPersistedStore<ILikesState>(
  storeCreator,
  'comment-likes-store'
);

export const useCommentLikesStore = createHydratedStore(
  defaultCommentLikesState, 
  defaultCommentLikesStore
) as typeof defaultCommentLikesStore;
