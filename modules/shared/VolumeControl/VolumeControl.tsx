import React, { useState } from 'react';

import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';

import { StyledVolumeProgress, StyleProgressWrapper } from './styled';
import { usePlayerAPI, usePlayerMuted, usePlayerVolume } from '@lib/providers/player-api';
import Row from '../Row';
import useAccordion from '@lib/hooks/useAccordion';
import { useToggle } from '@lib/hooks/useToggle';
import { animated } from 'react-spring';

interface IVolumeControlProps {
  children?: React.ReactNode;
}

const AnimatedRow = animated(Row);

const VolumeControl:React.FC<IVolumeControlProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleMute, updateVolume } = usePlayerAPI();
  const isMuted = usePlayerMuted();
  const volume = usePlayerVolume();

  const { ref, style } = useAccordion({
    isOpen,
    dimensionType: 'width'
  });

  const diplayingValue = isMuted ? 0 : volume;

  return (
    <Row align='stretch' gap={5} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button onClick={toggleMute}>
        {isMuted ? <VolumeOffOutlinedIcon fontSize='inherit' /> : <VolumeUpOutlinedIcon fontSize='inherit' />}
      </button>
      <AnimatedRow style={style}>
        <StyleProgressWrapper ref={ref}>
          <StyledVolumeProgress 
            value={diplayingValue} 
            onChange={e => updateVolume(Number(e.target.value))}
            type={'range'}
            min={0}
            max={100}
            style={{
              ['--progress-gradient' as string]: `
                linear-gradient(to right, var(--color-light) 0%, var(--color-light) ${diplayingValue}%, var(--color-gray) ${diplayingValue}%, var(--color-gray) 100%)
              `,
            }}
          />
        </StyleProgressWrapper>
      </AnimatedRow>
    </Row>
  );
}

export default VolumeControl;
