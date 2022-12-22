import create from 'zustand';
import { persist } from 'zustand/middleware';

interface ICommentsState {
  comments: string[];
  addComment: () => void;
  removeComment: () => void;
}

export const useCommentsStore = create<ICommentsState>()(
  persist(
    (set, get) => ({
      comments: [],
      addComment: () => set({
        comments: get().comments
      }),
      removeComment: () => set({
        comments: get().comments
      }),
    }),
    {
      name: 'comments-storage',
      getStorage: () => sessionStorage,
    }
  )
);