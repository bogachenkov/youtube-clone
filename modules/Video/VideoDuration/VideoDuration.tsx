import React from 'react';
import { youtubeDurationFormat } from '@utils/youtubeDuration';
import { StyledVideoDuration } from './styled';

interface IVideoDurationProps {
  children?: React.ReactNode;
  duration: string;
}

const VideoDuration:React.FC<IVideoDurationProps> = ({
  duration
}) => {
  return (
    <StyledVideoDuration>
      {youtubeDurationFormat(duration)}
    </StyledVideoDuration>
  );
}

export default VideoDuration;
