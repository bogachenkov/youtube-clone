import React, { ComponentPropsWithoutRef } from 'react';
import { StyledIconWrapper } from './styled';
import * as MaterialIcons from '@mui/icons-material';
import { baseRem } from 'styles/globalStyles';

export type IconName = keyof typeof MaterialIcons;

interface IIconWrapperProps extends ComponentPropsWithoutRef<'span'> {
  children?: React.ReactNode;
  icon: IconName
  size: number;
}

const IconWrapper:React.FC<IIconWrapperProps> = ({
  icon,
  size,
  style,
  ...props
}) => {
  const Icon = MaterialIcons[icon];
  return (
    <StyledIconWrapper
      style={{
        ...style,
        ['--icon-f-size' as string]: `${size/baseRem}rem`,
      }}
      {...props}
    >
      <Icon fontSize='inherit' />
    </StyledIconWrapper>
  );
}

export default IconWrapper;
