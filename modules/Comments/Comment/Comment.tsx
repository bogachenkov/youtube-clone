import { IComment } from '@ts-types/Comment';
import React from 'react';
import { animated as a } from 'react-spring';
import Avatar from '../../ui/Avatar';
import { CommentAvatarArea, CommentContentArea, StyledComment, StyledCommentText } from './styled';

import Spacer from '../../ui/Spacer';
import { isNumber } from 'lodash';
import { useToggle } from '@lib/hooks/useToggle';
import AddCommentForm from './CommentAddForm';
import useAccordion from '@lib/hooks/useAccordion';
import CommentActions from './CommentActions';
import CommentAuthor from './CommentAuthor';

interface ICommentProps {
  children?: React.ReactNode;
  comment: IComment;
  canReply?: boolean;
  isParent?: boolean;
  margin?: number | string;
}

const Comment:React.FC<ICommentProps> = ({
  comment,
  canReply = true,
  margin = 0,
  children
}) => {
  const {
    id,
    snippet: {
      authorDisplayName,
      publishedAt,
      likeCount,
      canRate,
      textDisplay,
      parentId
    }
  } = comment;
  const [showForm, toggleShowForm] = useToggle();
  const { style, ref } = useAccordion({
    isOpen: showForm,
    duration: 100
  });


  return (
    <StyledComment 
      style={{
        ['--comment-margin' as string]: isNumber(margin) ? `${margin}px` : margin
      }}
    >
      <CommentAvatarArea>
        <Avatar size={33} name={authorDisplayName} />
      </CommentAvatarArea>

      <CommentAuthor
        authorName={authorDisplayName}
        publishedAt={publishedAt}
      />

      <CommentContentArea>
        <Spacer vertical={11} />

        <StyledCommentText size={13} color={'var(--color-light)'} weight='thin' dangerouslySetInnerHTML={{
          __html: textDisplay
        }} />

        <Spacer vertical={16} />

        <CommentActions
          id={id}
          likeCount={likeCount}
          canRate={canRate}
          canReply={canReply}
          showForm={showForm}
          toggleShowForm={toggleShowForm}
        />

        <a.div style={style}>
          <div ref={ref}>
            <Spacer vertical={16} />
            <AddCommentForm
              parentId={parentId || id}
              onSubmit={toggleShowForm}
            />
          </div>
        </a.div>
        {children}
      </CommentContentArea>
    </StyledComment>
  );
}

export default Comment;
