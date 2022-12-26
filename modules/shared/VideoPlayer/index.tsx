import { PlayerDataProvider } from '@lib/providers/player-api';
import dynamic from 'next/dynamic';
import { StyledVideoWrapper } from './styled';
import { IVideoPlayerProps } from './VideoPlayer';

const Player = dynamic(() => import('./VideoPlayer'), { ssr: false });

const VideoPlayer:React.FC<IVideoPlayerProps> = (props) => {
  return (
    <StyledVideoWrapper>
      <PlayerDataProvider>
        <Player {...props} />
      </PlayerDataProvider>
    </StyledVideoWrapper>
  )
};

export default VideoPlayer;