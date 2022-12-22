import React from 'react';
import { animated as a } from 'react-spring';

import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';

import useAccordion from '@hooks/useAccordion';
import { useToggle } from '@hooks/useToggle';

import { StyledMoreButton, StyledVideoDescription } from './styled';
import Spacer from '@shared/Spacer';

interface IVideoDescriptionProps {
  children?: React.ReactNode;
  desc: string;
};

const VideoDescription:React.FC<IVideoDescriptionProps> = ({
  desc
}) => {
  const [isOpen, setIsOpen] = useToggle();
  const { ref, style } = useAccordion(isOpen, 0);

  const lines = desc.split(/\r?\n/).filter(element => element).slice(0, 3).join('\n');
  console.log(lines);
  return (
    <div>
      <StyledVideoDescription size={13}>
        {lines}
      </StyledVideoDescription>
      <a.div style={style}>
        <StyledVideoDescription size={13} ref={ref}>
          {desc}
        </StyledVideoDescription>
      </a.div>
      <Spacer vertical={13} />
      <StyledMoreButton onClick={setIsOpen}>
        Show {isOpen ? 'Less' : 'More'} 
        {
          isOpen ? <ExpandLessOutlinedIcon fontSize='large' /> : <ExpandMoreOutlinedIcon fontSize='large' />}
      </StyledMoreButton>
    </div>
  );
}

export default VideoDescription;
