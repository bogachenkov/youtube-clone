import { youtubeDurationFormat } from '@lib/utils/youtubeDuration';
import Button from '@modules/shared/Button';
import IconWrapper from '@modules/shared/IconWrapper';
import Row from '@modules/shared/Row';
import Spacer from '@modules/shared/Spacer';
import Text from '@modules/shared/Text';
import { IVideoPreview } from '@ts-types/Video';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { StyledChannelName, StyledIndex, StyledPlaylistItem, StyledTitle } from './styled';

interface IPlaylistItemProps {
  children?: React.ReactNode;
  item: IVideoPreview;
  index: number;
  isActive: boolean;
}

const PlaylistItem:React.FC<IPlaylistItemProps> = ({
  item: {
    id,
    snippet: {
      title,
      channelTitle,
      thumbnails
    },
    contentDetails: {
      duration
    }
  },
  index,
  isActive
}) => {
  return (
    <Link href={`/watch/${id}`}>
      <StyledPlaylistItem
        style={{
          ['--playlist-item-bg' as string]: isActive ? 'black' : 'transparent'
        }}
      >
        <Row justify='center' align='flex-start' gap={20}>
          <StyledIndex size={13} weight='regular'>
            {
              isActive ?
              <IconWrapper
                size={24} 
                icon='PlayArrow' 
                color='red'
                style={{
                  marginLeft: -10,
                  marginTop: -5
                }}
              />
              :
              (index + 1)
            }
          </StyledIndex>
          <Row>
            <Image
              alt={title} 
              src={thumbnails.medium.url}
              width={118}
              height={70}
              style={{
                borderRadius: 7
              }}
            />
            {/* {youtubeDurationFormat(duration)} */}
          </Row>
          <div>
            <StyledTitle weight='bold' color='var(--color-light)' size={13}>
              {title}
            </StyledTitle>
            <Spacer vertical={7} />
            <StyledChannelName size={11} weight='regular'>
              {channelTitle}
            </StyledChannelName>
          </div>
        </Row>
      </StyledPlaylistItem>
    </Link>
  );
}

export default PlaylistItem;
