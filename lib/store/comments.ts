import { IComment, ICommentThread } from '@ts-types/Comment';
import create from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuid } from 'uuid';
import CommentThread from '@lib/api/commentThread';

type CommentArgs = {
  commentText: string;
  videoId: string;
};

interface ICommentsState {
  comments: ICommentThread[];
  addCommentThread: (args: CommentArgs) => void;
  removeComment: (id: string) => void;
}

export const useCommentsStore = create<ICommentsState>()(
  persist(
    (set, get) => ({
      comments: [],
      addCommentThread: ({
        commentText,
        videoId
      }) => {
        const newComment = new CommentThread(commentText, videoId);
        set({
          comments: [...get().comments, newComment]
        })
      },
      removeComment: (id: string) => set({
        comments: get().comments.filter(comm => comm.id !== id) as ICommentThread[]
      }),
    }),
    {
      name: 'comments-storage',
      getStorage: () => sessionStorage,
    }
  )
);