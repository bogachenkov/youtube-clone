import { useSignIn } from '@lib/hooks/useSignInPush';
import { useAuthStore, useCommentLikesStore } from '@lib/store';
import { intToString } from '@lib/utils/intToString';
import Button from '@ui/Button';
import IconWrapper from '@ui/IconWrapper';
import Row from '@ui/Row';
import React, { useMemo } from 'react';

interface ICommentActionsProps {
  children?: React.ReactNode;
  id: string;
  likeCount: number;
  canRate: boolean;
  canReply: boolean;
  showForm: boolean;
  toggleShowForm: VoidFunction;
}

const CommentActions:React.FC<ICommentActionsProps> = ({
  id,
  likeCount,
  canRate,
  canReply,
  showForm,
  toggleShowForm
}) => {
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
  );
}

export default CommentActions;
