import { IComment } from '@ts-types/Comment';
import React from 'react';
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

interface ICommentProps {
  children?: React.ReactNode;
  comment: IComment;
  canReply?: boolean;
  margin?: number | string;
}

const Comment:React.FC<ICommentProps> = ({
  comment,
  canReply = true,
  margin = 0,
  children
}) => {
  const {
    snippet: {
      authorProfileImageUrl,
      authorDisplayName,
      authorChannelId,
      publishedAt,
      likeCount,
      canRate,
      textDisplay
    }
  } = comment;
  return (
    <StyledComment 
      style={{
        ['--comment-margin' as string]: isNumber(margin) ? `${margin}px` : margin
      }}
      gap={16} 
      align='flex-start'
    >
      {/* <Avatar src={authorProfileImageUrl} /> */}
      <Avatar size={33} />
      <div>
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
        <Text size={13} color={'var(--color-light)'} weight='thin'>
          {textDisplay}
        </Text>
        <Spacer vertical={16} />
        <Row gap={22}>
          <Button theme='text'>
            <Row gap={8}>
              <ThumbUpOutlinedIcon fontSize='medium' />
              {intToString(likeCount)}
            </Row>
          </Button>
          <Row gap={10}>
            <Button theme='text'>
              <ThumbDownOutlinedIcon fontSize='medium' />
            </Button>
            {
              canReply && (
                <Button theme='text'>
                  Reply
                </Button>
              )
            }
          </Row>
        </Row>
        {children}
      </div>
    </StyledComment>
  );
}

export default Comment;
