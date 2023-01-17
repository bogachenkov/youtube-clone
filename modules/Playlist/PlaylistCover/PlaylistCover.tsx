import React from 'react';
import { IThumbnail } from '@ts-types/Video';
import { StyledCoverLink, StyledCoverWrap, StyledPlaylistCover } from './styled';
import IconWrapper from '@modules/shared/IconWrapper';
import Link from 'next/link';

interface IPlaylistCoverProps {
  children?: React.ReactNode;
  cover: IThumbnail;
  alt: string;
  href: string;
}

const PlaylistCover:React.FC<IPlaylistCoverProps> = ({
  cover,
  alt,
  href
}) => {
  return (
    <Link href={href}>
      <StyledCoverWrap>
        <StyledPlaylistCover
          src={cover.url}
          fill
          // height={cover.height}
          // width={cover.width}
          alt={alt}
        />
        <StyledCoverLink>
          <IconWrapper size={38} icon='PlayArrow' />
          Play All
        </StyledCoverLink>
      </StyledCoverWrap>
    </Link>
  );
}

export default PlaylistCover;
