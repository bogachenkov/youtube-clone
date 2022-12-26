import React from 'react';
import Row from '../Row';
import Text from '../Text';
import { StyledCommentBlock } from './styled';

import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { useVideoData } from '@lib/hooks/useVideoData';
import { thousandsSeparator } from '@utils/thousandsSeparator';
import Title from '../Title';
import CommentsThread from '../CommentsThread';
import Spacer from '../Spacer';
import Container from '../Container';

interface ICommentsSectionProps {
  children?: React.ReactNode;
}

const CommentsSection:React.FC<ICommentsSectionProps> = (props) => {
  const data = useVideoData();

  if (!data) return (
    <div>Loading...</div>
  )

  if (data.comments.length === 0) return (
    <Title>
      Comments are disabled.
    </Title>
  )

  return (
    <section>
      <Row gap={85}>
        <Text weight='bold' size={13} color='var(--color-light)'>
          {thousandsSeparator(data.video.statistics.commentCount)} Comments
        </Text>
        <Row gap={8}>
          <SortOutlinedIcon fontSize='large' />
          <Text size={13} weight='bold' color='var(--color-light)'>
            SORT BY
          </Text>
          <ExpandMoreOutlinedIcon fontSize='large' />
        </Row>
      </Row>
      <Spacer vertical={26} />
      {/* INPUT */}
      <Spacer vertical={64} />
      <Spacer vertical={43} />
      <StyledCommentBlock>
        {
          data.comments.map(t => <CommentsThread key={t.id} thread={t} />)
        }
      </StyledCommentBlock>
    </section>
  );
}

export default CommentsSection;
