import { getCalendarDate } from '@lib/utils/getCalendarDate';
import IconWrapper from '@modules/shared/IconWrapper';
import Row from '@modules/shared/Row';
import Spacer from '@modules/shared/Spacer';
import Text from '@modules/shared/Text';
import Title from '@modules/shared/Title';
import React from 'react';
import {} from './styled';

interface IPlaylistMetaProps {
  children?: React.ReactNode;
  name: string;
  totalVideos: number;
  totalViews: number;
  lastUpdate: string;
  isPrivate: boolean;
}

const PlaylistMeta:React.FC<IPlaylistMetaProps> = ({
  name,
  totalVideos,
  totalViews,
  lastUpdate,
  isPrivate
}) => {
  return (
    <>
      <Title size={30}>
        {name}
      </Title>
      <Spacer vertical={24} />
      <Text size={14}>
        {totalVideos} {totalVideos > 1 ? 'videos' : 'video'}
        {' | '}
        {totalViews === 0 ? 'No views' : `${totalViews} views`}
        {' | '}
        Updated {getCalendarDate(lastUpdate)}
      </Text>
      <Spacer vertical={27} />
      <Row gap={6}>
        <IconWrapper color='var(--color-grayLight)' size={23} icon='LockOutlined' />
        <Text size={14}>
          {isPrivate ? 'Private' : 'Public'}
        </Text>
      </Row>
      <Spacer vertical={22} />
      <Row gap={6}>
        <IconWrapper color='var(--color-grayLight)' size={25} icon='Shuffle' />
        <Text size={14}>
          Shuffle
        </Text>
      </Row>
    </>
  );
}

export default PlaylistMeta;
