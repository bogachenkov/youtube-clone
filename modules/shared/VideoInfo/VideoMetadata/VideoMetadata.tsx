import React from 'react';
import dayjs from 'dayjs';

import Row from '@shared/Row';
import Text from '@shared/Text';
import { StyledMetadataControls } from './styled';
import { thousandsSeparator } from '@utils/thousandsSeparator';
import dynamic from 'next/dynamic';
import IconWrapper from '@modules/shared/IconWrapper';
import Button from '@modules/shared/Button';
import VideoPlaylistButton from '../VideoPlaylistButton';
const VideoLike = dynamic(() => import('@shared/VideoInfo/VideoLike'), { ssr: false });

interface IVideoMetadataProps {
  children?: React.ReactNode;
  views: number;
  likes: number;
  published: string;
}

const VideoMetadata:React.FC<IVideoMetadataProps> = ({
  views,
  likes,
  published
}) => {
  return (
    <Row justify='space-between'>
      <Row gap={10}>
        <Text size={15}>
          {thousandsSeparator(views)} views
        </Text>
        <Text size={18}>{'|'}</Text>
        <Text size={15}>
          {dayjs(published).format('MMM DD, YYYY')}
        </Text>
      </Row>
      <StyledMetadataControls gap={'3.6em'}>
        <VideoLike
          likesCount={likes}
        />
        <VideoPlaylistButton />
        <Button theme='text'>
          <IconWrapper icon='ShareOutlined' />
        </Button>
        <Button theme='text'>
          <IconWrapper icon='MoreHorizOutlined' />
        </Button>
      </StyledMetadataControls>
    </Row>
  );
}

export default VideoMetadata;
