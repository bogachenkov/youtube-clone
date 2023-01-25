import { IButtonProps } from '@ui/Button';
import IconWrapper from '@ui/IconWrapper';
import { IconName } from '@ui/IconWrapper/IconWrapper';
import Row from '@ui/Row';
import React from 'react';
import { StyledButtonText, StyledControlButton } from './styled';

interface IControlButtonProps extends IButtonProps {
  children?: React.ReactNode;
  text: string;
  icon: IconName;
}

const ControlButton:React.FC<IControlButtonProps> = ({
  text,
  icon,
  ...buttonProps
}) => {
  return (
    <StyledControlButton 
      theme='secondary' 
      fontColor='#FFF'
      fontSize={12}
      {...buttonProps}
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
