import create from 'zustand';
import { persist } from 'zustand/middleware';

interface ILikesState {
  likedIds: string[];
  toggleLike: (id: string) => void;
}

const toggleLike = (ids: ILikesState['likedIds'], id: string) => {
  return ids.includes(id) ? ids.filter(i => i !== id) : [...ids, id]
}

export const useLikesStore = create<ILikesState>()(
  persist(
    (set, get) => ({
      likedIds: [],
      toggleLike: (id) => set({
        likedIds: toggleLike(get().likedIds, id)
      })
    }),
    {
      name: 'likes-storage',
      getStorage: () => sessionStorage,
    }
  )
);