import React from 'react';
import Ink from 'react-ink';
import { IButtonProps } from '../Button';
import IconWrapper, { IconName } from '../IconWrapper/IconWrapper';
import { InkWrapper, StyledButton } from './styled';

interface IProps extends Omit<IButtonProps, 'fontSize'> {
  icon: IconName;
  size: number;
}

export const DefaultIconButton:React.FC<IProps> = ({
  icon,
  size,
  fontColor,
  ...props
}) => {
  return (
    <StyledButton
      hoverable
      fontColor={fontColor ?? 'var(--color-gray)'}
      theme='text'
      fontSize={size}
      style={{
        height: size,
        width: size
      }}
      {...props}
    >
      <InkWrapper>
        <Ink />
      </InkWrapper>
      <IconWrapper icon={icon} />
    </StyledButton>
  )
}

export default DefaultIconButton;