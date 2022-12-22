import React from 'react';
import { StyledVideoPageGrid } from './styled';

interface IVideoPageGridProps {
  children?: React.ReactNode;
}

const VideoPageGrid:React.FC<IVideoPageGridProps> = (props) => {
  return (
    <StyledVideoPageGrid>
      {props.children}
    </StyledVideoPageGrid>
  );
}

export default VideoPageGrid;
