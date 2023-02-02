import { ICommentThread } from '@ts-types/Comment';
import React from 'react';
import Comment from '../Comment';

import Button from '../../ui/Button';
import Row from '../../ui/Row';
import Spacer from '../../ui/Spacer';
import { useToggle } from '@lib/hooks/useToggle';
import { useCommentsStore } from '@lib/store';
import { sortCommentsByDate } from '@lib/utils/sortCommentsByDate';
import IconWrapper from '../../ui/IconWrapper';
import CommentReplies from '../CommentReplies';

interface ICommentsThreadProps {
  children?: React.ReactNode;
  thread: ICommentThread;
}

export const CommentMargin = 40;

const CommentsThread:React.FC<ICommentsThreadProps> = ({
  thread
}) => {
  const {
    snippet: {
      totalReplyCount,
      canReply,
      isPublic,
      topLevelComment
    },
    id,
    replies
  } = thread;
  const comments = useCommentsStore(store => store.comments);

  if (!isPublic) return null;

  const localReplies = comments.filter(comm => comm.snippet.parentId === id);
  const repliesList = sortCommentsByDate([
    ...(!!replies ? replies.comments : []),
    ...localReplies
  ]);


  return (
    <Comment isParent comment={topLevelComment} canReply={canReply} margin={CommentMargin}>
      {
        repliesList.length > 0 && (
          <CommentReplies
            totalReplies={totalReplyCount}
            replies={repliesList}
          />
        )
      }
    </Comment>
  );
}

export default CommentsThread;
