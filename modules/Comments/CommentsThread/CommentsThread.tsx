import { ICommentThread } from '@ts-types/Comment';
import React from 'react';
import Comment from '../Comment';
import { animated as a } from 'react-spring';

import Button from '../../ui/Button';
import Row from '../../ui/Row';
import Spacer from '../../ui/Spacer';
import { useToggle } from '@lib/hooks/useToggle';
import useAccordion from '@lib/hooks/useAccordion';
import { useCommentsStore } from '@lib/store';
import { sortCommentsByDate } from '@lib/utils/sortCommentsByDate';
import IconWrapper from '../../ui/IconWrapper';

interface ICommentsThreadProps {
  children?: React.ReactNode;
  thread: ICommentThread;
}

const CommentMargin = 40;

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
  const [showReplies, toggleReplies] = useToggle();
  const { ref, style } = useAccordion({
    isOpen: showReplies,
    duration: 150
  });

  if (!isPublic) return null;

  const localReplies = comments.filter(comm => comm.snippet.parentId === id);
  const withLocalReplies = sortCommentsByDate([
    ...(!!replies ? replies.comments : []),
    ...localReplies
  ]);


  return (
    <Comment isParent comment={topLevelComment} canReply={canReply} margin={CommentMargin}>
      {
        withLocalReplies.length > 0 && (
          <>
            <Spacer vertical={8} />
            <Button theme='text' onClick={toggleReplies}>
              <Row gap={7}>
                {showReplies ? 'Hide' : 'View'} {totalReplyCount || withLocalReplies.length} repl{withLocalReplies.length === 1 ? 'y' : 'ies'} 
                {
                  showReplies ?
                  <IconWrapper icon='ExpandLessOutlined' size={19} /> :
                  <IconWrapper icon='ExpandMoreOutlined' size={19} />
                }
              </Row>
            </Button>
            <a.div style={style}>
              <div ref={ref}>
                <Spacer vertical={12} />
                {
                  withLocalReplies.map(comm => <Comment key={comm.id}  margin={CommentMargin / 2} comment={comm} />)
                }
              </div>
            </a.div>
          </>
        )
      }
    </Comment>
  );
}

export default CommentsThread;
