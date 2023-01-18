import { IComment } from '@ts-types/Comment';
import React, { useMemo } from 'react';
import { animated as a } from 'react-spring';
import Avatar from '../Avatar';
import Row from '../Row';
import Text from '../Text';
import { StyledComment } from './styled';

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
import { useAuthStore, useCommentLikesStore } from '@lib/store';
import IconWrapper from '../IconWrapper';

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
  const user = useAuthStore(store => store.user);
  const { likes, toggleLike } = useCommentLikesStore(store => store);
  const signIn = useSignIn();

  const likedInfo = useMemo(() => {
    const likeObj = likes.find(l => l.id === id);
    const isLiked = likeObj && likeObj.liked === true;
    const isDisliked = likeObj && likeObj.liked === false;

    return {
      isLiked,
      isDisliked
    }
  }, [id, likes]);
  

  return (
    <StyledComment 
      style={{
        ['--comment-margin' as string]: isNumber(margin) ? `${margin}px` : margin
      }}
      gap={16} 
      align='flex-start'
    >
      <Avatar size={33} name={authorDisplayName} />
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
          <Button 
            theme='text' 
            disabled={!canRate}
            onClick={() => toggleLike(id, true)}
            title={likedInfo.isLiked ? 'Remove Like' : 'Like'}
            fontColor={likedInfo.isLiked ? 'red' : 'inherit'}
          >
            <Row gap={8}>
              <IconWrapper
                size={15}
                icon='ThumbUpOutlined'
              />
              {intToString(likeCount + (likedInfo.isLiked ? 1 : 0))}
            </Row>
          </Button>
          <Row gap={10}>
            <Button 
              theme='text'
              disabled={!canRate}
              onClick={() => toggleLike(id, false)}
              title={likedInfo.isDisliked ? 'Remove Dislike' : 'Dislike'}
              fontColor={likedInfo.isDisliked ? 'red' : 'inherit'}
            >
              <IconWrapper
                size={15}
                icon='ThumbDownOutlined'
              />
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
