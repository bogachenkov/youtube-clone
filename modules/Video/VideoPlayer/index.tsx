import { PlayerDataProvider } from '@lib/providers/player-api';
import { IVideoPlayerProps } from './VideoPlayer';
import Player from './VideoPlayer';

// const Player = dynamic(() => import('./VideoPlayer'), { ssr: false });

const VideoPlayer:React.FC<IVideoPlayerProps> = (props) => {
  return (
    <PlayerDataProvider>
      <Player {...props} />
    </PlayerDataProvider>
  )
};

export default VideoPlayer;