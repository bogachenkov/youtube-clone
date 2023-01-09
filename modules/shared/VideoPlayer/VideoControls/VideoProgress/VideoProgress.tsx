import { usePlayerAPI, usePlayerTimings } from '@lib/providers/player-api';
import React from 'react';
import { StyledVideoProgress } from './styled';

interface IVideoProgressProps {
  children?: React.ReactNode;
}

export const PercentMultiplier = 3;

const VideoProgress:React.FC<IVideoProgressProps> = () => {
  const { updateTimings } = usePlayerAPI();
  const { played, duration, buffered } = usePlayerTimings();

  const val = played === 0 ? 0 : Math.floor((played / duration) * 100 * PercentMultiplier);

  const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = (Number(e.target.value) / PercentMultiplier / 100) * duration;
    updateTimings({
      timeValue: value
    });
  }

  return (
    <StyledVideoProgress 
      type={'range'} 
      min={0} 
      max={300} 
      value={val}
      onChange={handleChange}
      style={{
        ['--progress-gradient' as string]: `
          linear-gradient(to right, #cc181e 0%, #cc181e ${val / PercentMultiplier}%, #777 ${val / PercentMultiplier}%, #777 ${buffered}%, var(--color-black) ${buffered}%, var(--color-black) 100%)
        `,
      }}
    />
  );
}

export default VideoProgress;