import { IComment, ICommentThread } from '@ts-types/Comment';
import create from 'zustand';
import { persist } from 'zustand/middleware';
import CommentThread, { CommentThreadArgs } from '@lib/api/commentThread';
import Comment, { CommentArgs } from '@lib/api/comment';

interface ICommentsState {
  threads: ICommentThread[];
  comments: IComment[],
  addCommentThread: (...args: CommentThreadArgs) => void;
  addComment: (...args: CommentArgs) => void;
}

export const useCommentsStore = create<ICommentsState>()(
  persist(
    (set, get) => ({
      threads: [],
      comments: [],

      addCommentThread: (...args) => {
        const { ...newCommentThread } = new CommentThread(...args);
        set({
          threads: [...get().threads, newCommentThread]
        })
      },

      addComment: (...args) => {
        const { ...newComment } = new Comment(...args);
        set({
          comments: [...get().comments, newComment]
        })
      },

    }),
    {
      name: 'comments-storage',
      getStorage: () => sessionStorage,
    }
  )
);