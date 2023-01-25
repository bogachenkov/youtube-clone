import React from 'react';
import { StyledControlsSection } from './styled';
import { useAuthStore } from '@lib/store';
import UserSection from '../UserSection';
import IconButton from '@ui/IconButton';

interface IControlsSectionProps {
  children?: React.ReactNode;
}

const ControlsSection:React.FC<IControlsSectionProps> = (props) => {
  const user = useAuthStore(store => store.user);

  return (
    <StyledControlsSection>
      {
        user ?
        (
          <IconButton
            size={24}
            icon='VideoCallOutlined'
            title='Not Implemented'
          />
        )
        :
        null
      }
      <IconButton
        icon='GridViewOutlined'
        size={24}
        title='Not Implemented'
      />
      <UserSection />
    </StyledControlsSection>
  );
}

export default ControlsSection;
