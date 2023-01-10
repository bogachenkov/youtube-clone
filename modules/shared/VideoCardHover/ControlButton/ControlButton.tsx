import IconWrapper from '@modules/shared/IconWrapper';
import { IconName } from '@modules/shared/IconWrapper/IconWrapper';
import Row from '@modules/shared/Row';
import React from 'react';
import { StyledButtonText, StyledControlButton } from './styled';

interface IControlButtonProps {
  children?: React.ReactNode;
  text: string;
  icon: IconName;
}

const ControlButton:React.FC<IControlButtonProps> = ({
  text,
  icon
}) => {
  return (
    <StyledControlButton 
      theme='secondary' 
      fontColor='#FFF'
      fontSize={12}
    >
      <Row gap={11} align='center'>
        <StyledButtonText>
          {text}
        </StyledButtonText>
        <IconWrapper size={20} icon={icon} />
      </Row>
    </StyledControlButton>
  );
}

export default ControlButton;
