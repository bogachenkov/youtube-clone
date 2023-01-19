import React from 'react';
import { StyledControlsSection } from './styled';
import { useAuthStore } from '@lib/store';
import UserSection from '../UserSection';
import DefaultIconButton from '@modules/shared/DefaultIconButton';

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
          <DefaultIconButton
            size={24}
            icon='VideoCallOutlined'
            title='Not Implemented'
          />
        )
        :
        null
      }
      <DefaultIconButton
        icon='GridViewOutlined'
        size={24}
        title='Not Implemented'
      />
      <UserSection />
    </StyledControlsSection>
  );
}

export default ControlsSection;
