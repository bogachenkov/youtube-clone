import { IComment, ICommentThread } from '@ts-types/Comment';
import create from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuid } from 'uuid';

type CommentArgs = {
  commentText: string;
  videoId: string;
};

interface ICommentsState {
  comments: ICommentThread[];
  addComment: (args: CommentArgs) => void;
  removeComment: (id: string) => void;
}

export const useCommentsStore = create<ICommentsState>()(
  persist(
    (set, get) => ({
      comments: [],
      addComment: ({
        commentText,
        videoId
      }) => {
        const newComment:ICommentThread = {
          id: uuid(),
          replies: {
            comments: []
          },
          snippet: {
            canReply: true,
            isPublic: true,
            totalReplyCount: 0,
            topLevelComment: {
              id: uuid(),
              snippet: {
                authorDisplayName: 'John Doe',
                authorChannelId: {
                  value: 'johndoeexample'
                },
                authorProfileImageUrl: 'someurl',
                authorChannelUrl: 'johndoeexample',
                canRate: true,
                likeCount: 0,
                parentId: 'parentId',
                textDisplay: commentText,
                textOriginal: commentText,
                videoId,
                publishedAt: (new Date()).toISOString(),
                updatedAt: (new Date()).toISOString()
              }
            }
          }
        };

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