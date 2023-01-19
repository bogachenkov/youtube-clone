import React from 'react';
import { animated as a } from 'react-spring';

import useAccordion from '@hooks/useAccordion';
import { useToggle } from '@hooks/useToggle';

import { StyledMoreButton, StyledVideoDescription } from './styled';
import Spacer from '@shared/Spacer';
import IconWrapper from '@modules/shared/IconWrapper';

interface IVideoDescriptionProps {
  children?: React.ReactNode;
  desc: string;
};

const VideoDescription:React.FC<IVideoDescriptionProps> = ({
  desc
}) => {
  const [isOpen, setIsOpen] = useToggle();
  const { ref, style } = useAccordion({ isOpen });

  const [previewFirstLine, previewSecondLine, ...restDesc] = desc.split(/\r?\n/).filter(element => element);

  return (
    <div>
      <StyledVideoDescription size={13}>
        {[previewFirstLine, previewSecondLine].join('\n')}
      </StyledVideoDescription>
      <a.div style={style}>
        <StyledVideoDescription size={13} ref={ref}>
          {restDesc.join('\n')}
        </StyledVideoDescription>
      </a.div>
      <Spacer vertical={13} />
      <StyledMoreButton onClick={setIsOpen}>
        Show {isOpen ? 'Less' : 'More'} 
        {
          isOpen ?
          <IconWrapper icon='ExpandLessOutlined' size={19} />
          :
          <IconWrapper icon='ExpandMoreOutlined' size={19} />
        }
      </StyledMoreButton>
    </div>
  );
}

export default VideoDescription;
