import { IComment, ICommentThread } from '@ts-types/Comment';
import CommentThread, { CommentThreadArgs } from '@lib/api/commentThread';
import Comment, { CommentArgs } from '@lib/api/comment';
import { createHydratedStore, createPersistedStore } from './utils';
import { noop } from 'lodash';

interface ICommentsState {
  threads: ICommentThread[];
  comments: IComment[],
  addCommentThread: (...args: CommentThreadArgs) => void;
  addComment: (...args: CommentArgs) => void;
}

const defaultCommentsState:ICommentsState = {
  threads: [],
  comments: [],
  addCommentThread: noop,
  addComment: noop
}

const defaultCommentsStore = createPersistedStore<ICommentsState>(
  (set, get) => ({
    threads: [],
    comments: [],
  
    addCommentThread: (...args) => {
      const { ...newCommentThread } = new CommentThread(...args);
      set({
        threads: [
          ...get().threads, 
          newCommentThread
        ]
      })
    },
  
    addComment: (...args) => {
      const { ...newComment } = new Comment(...args);
      set({
        comments: [...get().comments, newComment]
      })
    },
  }),
  'comments-store'
);

export const useCommentsStore = createHydratedStore(
  defaultCommentsState, 
  defaultCommentsStore
) as typeof defaultCommentsStore;