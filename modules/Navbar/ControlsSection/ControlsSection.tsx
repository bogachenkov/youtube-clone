import { GridViewOutlined, VideoCallOutlined } from '@mui/icons-material';
import React from 'react';
import { StyledControlsSection } from './styled';
import { useAuthStore } from '@lib/store';
import UserSection from '../UserSection';

interface IControlsSectionProps {
  children?: React.ReactNode;
}

const ControlsSection:React.FC<IControlsSectionProps> = (props) => {
  const user = useAuthStore(store => store.user);

  return (
    <StyledControlsSection>
      {
        user ? <VideoCallOutlined fontSize='inherit' /> : null
      }
      <GridViewOutlined fontSize='inherit' />
      <UserSection />
    </StyledControlsSection>
  );
}

export default ControlsSection;
