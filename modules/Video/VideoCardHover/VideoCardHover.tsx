import Link from 'next/link';
import React from 'react';
import Blur from '@ui/Blur';
import Spacer from '@ui/Spacer';
import Text from '@ui/Text';
import { StyledControlsRow, StyledHoverContainer, StyledVideoCardHover } from './styled';

import { intToString } from '@utils/intToString';
import Row from '@ui/Row';
import IconWrapper from '@ui/IconWrapper';
import CardHoverActions from './CardHoverActions';

interface IVideoCardHoverProps {
  children?: React.ReactNode;
  likeCount: number;
  id: string;
}

const VideoCardHover:React.FC<IVideoCardHoverProps> = ({
  likeCount,
  id
}) => {
  return (
    <StyledVideoCardHover>
      <Blur />
      <Link href={`/watch/${id}`} color='#FFF'>
        <StyledHoverContainer>
          <Spacer vertical={20} />
          <Row align='center' gap={4}>
            <IconWrapper size={40} icon='PlayArrowOutlined' style={{ marginLeft: '-.2em' }} />
            <Text size={18} weight='extraBold' color='#FFF'>
              Play
            </Text>
          </Row>
          <Row align='center' gap={8}>
            <IconWrapper size={20} icon='ThumbUpOffAltOutlined' />
            <Text size={13} weight={'regular'} color='#FFF'>
              {intToString(likeCount)}
            </Text>
          </Row>
        </StyledHoverContainer>
      </Link>
      <StyledControlsRow direction='column' align='flex-end' gap={8}>
        <CardHoverActions id={id} />
      </StyledControlsRow>
    </StyledVideoCardHover>
  );
}

export default VideoCardHover;
