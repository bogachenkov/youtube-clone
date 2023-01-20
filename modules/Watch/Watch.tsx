import React from 'react';
import Container from "@shared/Container";
import VideoPlaylist from "@modules/Watch/VideoPlaylist";
import CommentsSection from "@modules/Watch/CommentsSection";

import { StyledWatchPageGrid } from './styled';
import WatchVideoSection from './WatchVideoSection';


interface IWatchProps {
  children?: React.ReactNode;
}

const Watch:React.FC<IWatchProps> = (props) => {

  return (
    <StyledWatchPageGrid>
      <Container style={{ display: 'contents' }}>
        <WatchVideoSection />
        <CommentsSection />
      </Container>
      <VideoPlaylist />
    </StyledWatchPageGrid>
  );
}

export default Watch;
