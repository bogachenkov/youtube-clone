import { PlayerDataProvider } from '@lib/providers/player-api';
import dynamic from 'next/dynamic';
import { IVideoPlayerProps } from './VideoPlayer';

const Player = dynamic(() => import('./VideoPlayer'), { ssr: false });

const VideoPlayer:React.FC<IVideoPlayerProps> = (props) => {
  return (
    <PlayerDataProvider>
      <Player {...props} />
    </PlayerDataProvider>
  )
};

export default VideoPlayer;