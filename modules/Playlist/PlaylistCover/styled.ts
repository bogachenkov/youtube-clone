import { device } from '@const/cssMedia';
import DefaultIconButton from '@modules/shared/DefaultIconButton';
import Image from 'next/image';
import styled from 'styled-components';

export const StyledCoverWrap = styled.div`
  aspect-ratio: 16 / 9;
  position: relative;
  border-radius: 12px;

  @media ${device.laptop} {
    border-radius: 36px;
    overflow: hidden;
  }
`;

export const StyledPlaylistCover = styled(Image)`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const StyledMobilePlayButton = styled(DefaultIconButton)`
  display: inline-block;
  position: absolute;
  bottom: -.5em;
  right: 0;

  &::before {
    content: "";
    position: absolute;
    top: .25em;
    left: .25em;
    background-color: #fff;
    height: .5em;
    width: .5em;
    z-index: 0;
  }

  @media ${device.laptop} {
    display: none;
  }
`;

export const StyledCoverLink = styled.span`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 70px;
  background: rgba(0, 0, 0, .5);
  font-size: 20px;
  font-weight: 500;

  @media ${device.laptop} {
    display: flex;
  }
`;