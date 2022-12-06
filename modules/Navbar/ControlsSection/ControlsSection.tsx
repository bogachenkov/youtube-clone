import { GridViewOutlined, NotificationsOutlined, VideoCallOutlined } from '@mui/icons-material';
import React from 'react';
import Avatar from '../../shared/Avatar';
import { StyledControlsSection } from './styled';

interface IControlsSectionProps {
  children?: React.ReactNode;
}

const ControlsSection:React.FC<IControlsSectionProps> = (props) => {
  return (
    <StyledControlsSection>
      <VideoCallOutlined fontSize='inherit' />
      <GridViewOutlined fontSize='inherit' />
      <NotificationsOutlined fontSize='inherit' />
      <Avatar />
    </StyledControlsSection>
  );
}

export default ControlsSection;
