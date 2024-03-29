import React from 'react';

import Spacer from "@ui/Spacer";
import VideoInfo from "@modules/Watch/VideoInfoSection";
import VideoPlayer from "@modules/VideoPlayer";
import { StyledVideoSection } from './styled';
import { LaptopOnly } from '@ui/MediaQuery';

interface IWatchVideoSectionProps {
  children?: React.ReactNode;
}

const WatchVideoSection:React.FC<IWatchVideoSectionProps> = (props) => {
  return (
    <StyledVideoSection>
      <VideoPlayer
        controls
        autoPlay
        src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
      <Spacer vertical={32} />
      <VideoInfo />
      <Spacer vertical={20} />
      <hr style={{
        height: 3,
        border: 'none',
        background: 'var(--color-grayDark)'
      }} />
      <LaptopOnly>
        <Spacer vertical={24} />
      </LaptopOnly>
    </StyledVideoSection>
  );
}

export default WatchVideoSection;
