import React from 'react';
import { StyledControlsSection } from './styled';
import { useAuthStore } from '@lib/store';
import UserSection from '../UserSection';
import IconWrapper from '@modules/shared/IconWrapper';

interface IControlsSectionProps {
  children?: React.ReactNode;
}

const ControlsSection:React.FC<IControlsSectionProps> = (props) => {
  const user = useAuthStore(store => store.user);

  return (
    <StyledControlsSection>
      {
        user ? <IconWrapper icon='VideoCallOutlined' /> : null
      }
      <IconWrapper icon='GridViewOutlined' />
      <UserSection />
    </StyledControlsSection>
  );
}

export default ControlsSection;
