import React from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

import { StyledVideoTimeRanges } from './styled';
import { usePlayerTimings } from '@lib/providers/player-api';

interface IVideoTimeRangesProps {
  children?: React.ReactNode;
}

const wrapEachLetter = (str: string) => {
  return str.split('').map((letter, i) => (
    letter === ':' ? <i key={i}>{letter}</i> : <span key={i}>{letter}</span>
  ))
}

const VideoTimeRanges:React.FC<IVideoTimeRangesProps> = () => {
  const { played, duration } = usePlayerTimings();
  return (
    <StyledVideoTimeRanges>
      {wrapEachLetter(dayjs.duration(played, 'seconds').format('mm:ss'))}
      {' / '}
      {wrapEachLetter(dayjs.duration(duration, 'seconds').format('mm:ss'))}
    </StyledVideoTimeRanges>
  );
}

export default VideoTimeRanges;
