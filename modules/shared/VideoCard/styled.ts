import Image from 'next/image';
import styled from 'styled-components';
import Text from '../Text';
import { StyledTitle } from '../Title/styled';
import { StyledVideoDuration } from '../VideoDuration/styled';

export const StyledVideoCard = styled.div`
  & > header {
    position: relative;
    aspect-ratio: 302 / 175;
    border-radius: 10px;
    overflow: hidden;
  }

  & ${StyledVideoDuration} {
    position: absolute;
    bottom: 0;
    right: 0;
  }


  & ${StyledTitle} {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
            line-clamp: 2; 
    -webkit-box-orient: vertical;
  }
`;

export const StyledChannelName = styled(Text)`
  max-width: 100px;
  overflow:hidden; 
  white-space:nowrap; 
  text-overflow: ellipsis;
`;

export const StyledThumb = styled(Image)`
  width: 100%;
`;

export const StyledDetailsRow = styled.footer`
  display: flex;
  gap: 1.5em;
`;
