import { ICommentThread } from '@ts-types/Comment';
import React from 'react';
import Comment from '../Comment';
import { animated as a } from 'react-spring';

import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import Button from '../Button';
import Row from '../Row';
import Spacer from '../Spacer';
import { useToggle } from '@lib/hooks/useToggle';
import useAccordion from '@lib/hooks/useAccordion';

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
    replies
  } = thread;
  const [showReplies, toggleReplies] = useToggle();
  const { ref, style } = useAccordion({
    isOpen: showReplies
  });

  if (!isPublic) return null;

  return (
    <Comment comment={topLevelComment} canReply={canReply} margin={CommentMargin}>
      {
        totalReplyCount > 0 && (
          <>
            <Spacer vertical={8} />
            <Button theme='text' onClick={toggleReplies}>
              <Row gap={7}>
                {showReplies ? 'Hide' : 'View'} {totalReplyCount} repl{totalReplyCount === 1 ? 'y' : 'ies'} 
                {
                  showReplies ?
                  <ExpandLessOutlinedIcon fontSize='large' /> :
                  <ExpandMoreOutlinedIcon fontSize='large' />
                }
              </Row>
            </Button>
            <a.div style={style}>
              <div ref={ref}>
                <Spacer vertical={12} />
                {
                  !!replies && replies.comments.map(comm => <Comment key={comm.id}  margin={CommentMargin / 2} comment={comm} />)
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
