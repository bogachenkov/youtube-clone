import React from 'react';
import Row from '../Row';
import Text from '../Text';
import { StyledCommentBlock } from './styled';

import { useVideoData } from '@lib/hooks/useVideoData';
import { thousandsSeparator } from '@utils/thousandsSeparator';
import Title from '../Title';
import CommentsThread from '../CommentsThread';
import Spacer from '../Spacer';
import AddCommentForm from '../AddCommentForm';
import { useCommentsStore } from '@lib/store';
import { useVideoId } from '@lib/hooks/useVideoId';
import { sortCommentsByDate } from '@lib/utils/sortCommentsByDate';
import IconWrapper from '../IconWrapper';
import SortButton from '../SortButton';

interface ICommentsSectionProps {
  children?: React.ReactNode;
}

const CommentsSection:React.FC<ICommentsSectionProps> = (props) => {
  const data = useVideoData();
  const threads = useCommentsStore(store => store.threads);
  const videoId = useVideoId();

  if (!data) return (
    <div>Loading...</div>
  )

  if (data.comments.length === 0) return (
    <Title>
      Comments are disabled.
    </Title>
  )

  const localComments = threads.filter(thread => thread.snippet.topLevelComment.snippet.videoId === videoId);

  const withLocalComments = sortCommentsByDate([
    ...data.comments,
    ...localComments
  ]);

  return (
    <section>
      <Row gap={85}>
        <Text weight='bold' size={13} color='var(--color-light)'>
          {thousandsSeparator(data.video.statistics.commentCount + localComments.length)} Comments
        </Text>
        <SortButton
          text='SORT BY'
          fontSize={13}
        />
      </Row>
      <Spacer vertical={26} />
      {/* INPUT */}
      <AddCommentForm  />
      <Spacer vertical={43} />
      <StyledCommentBlock>
        {
          withLocalComments.map(t => <CommentsThread key={t.id} thread={t} />)
        }
      </StyledCommentBlock>
    </section>
  );
}

export default CommentsSection;
