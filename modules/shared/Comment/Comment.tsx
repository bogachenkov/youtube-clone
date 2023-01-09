import { IComment } from '@ts-types/Comment';
import React from 'react';
import { animated as a } from 'react-spring';
import Avatar from '../Avatar';
import Row from '../Row';
import Text from '../Text';
import { StyledComment } from './styled';

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import Spacer from '../Spacer';
import { getRelativeDate } from '@lib/utils/getRelativeDate';
import Button from '../Button';
import { intToString } from '@utils/intToString';
import { isNumber } from 'lodash';
import { useToggle } from '@lib/hooks/useToggle';
import AddCommentForm from '../AddCommentForm';
import useAccordion from '@lib/hooks/useAccordion';
import Expand from '../Expand';
import { useSignIn } from '@lib/hooks/useSignInPush';
import { useAuthStore } from '@lib/store';

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
      authorProfileImageUrl,
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
  const user = useAuthStore(store => store.user);
  const signIn = useSignIn();

  return (
    <StyledComment 
      style={{
        ['--comment-margin' as string]: isNumber(margin) ? `${margin}px` : margin
      }}
      gap={16} 
      align='flex-start'
    >
      <Avatar size={33} src={authorProfileImageUrl} />
      <Expand>
        <Spacer vertical={5} />
        <Row gap={16}>
          <Text size={13} color={'var(--color-light)'} weight='bold'>
            {authorDisplayName}
          </Text>
          <Text size={11} weight='regular'>
            {getRelativeDate(publishedAt)}
          </Text>
        </Row>
        <Spacer vertical={11} />
        <Text size={13} color={'var(--color-light)'} weight='thin' dangerouslySetInnerHTML={{
          __html: textDisplay
        }} />
        <Spacer vertical={16} />
        <Row gap={22}>
          <Button theme='text' disabled={!canRate}>
            <Row gap={8}>
              <ThumbUpOutlinedIcon fontSize='medium' />
              {intToString(likeCount)}
            </Row>
          </Button>
          <Row gap={10}>
            <Button theme='text' disabled={!canRate}>
              <ThumbDownOutlinedIcon fontSize='medium' />
            </Button>
            {
              canReply && (
                <Button theme='text' onClick={!!user ? toggleShowForm : signIn.push}>
                  {showForm ? 'Cancel' : 'Reply'}
                </Button>
              )
            }
          </Row>
        </Row>
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
      </Expand>
    </StyledComment>
  );
}

export default Comment;
