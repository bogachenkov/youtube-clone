import React from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

import { StyledVideoTimeRanges } from './styled';
import { usePlayerTimings } from '@lib/hooks/usePlayerTimings';

interface IVideoTimeRangesProps {
  children?: React.ReactNode;
}


const VideoTimeRanges:React.FC<IVideoTimeRangesProps> = () => {
  const { played, duration } = usePlayerTimings();
  return (
    <StyledVideoTimeRanges>
      {dayjs.duration(played, 'seconds').format('mm:ss')}
      {' / '}
      {dayjs.duration(duration, 'seconds').format('mm:ss')}
    </StyledVideoTimeRanges>
  );
}

export default VideoTimeRanges;
