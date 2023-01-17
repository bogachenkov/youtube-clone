import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const StyledCoverWrap = styled.div`
  overflow: hidden;
  aspect-ratio: 16 / 9;
  position: relative;
  border-radius: 36px;
`;

export const StyledPlaylistCover = styled(Image)`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const StyledCoverLink = styled(Link)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 70px;
  background: rgba(0, 0, 0, .5);
  font-size: 20px;
  font-weight: 500;
`;