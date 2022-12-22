import React, { ComponentPropsWithoutRef } from 'react';
import { baseRem } from 'styles/globalStyles';
import { StyledButton } from './styled';

interface IButtonProps extends ComponentPropsWithoutRef<'button'>  {
  children?: React.ReactNode;
  fontSize?: number;
  theme?: 'primary' | 'secondary';
}

const getButtonColor = (theme: IButtonProps['theme']) => {
  switch (theme) {
    case 'primary':
      return ({
        bg: 'red',
        color: 'var(--color-white)'
      });
    case 'secondary':
      return ({
        bg: 'var(--color-grayDark)',
        color: 'var(--color-light)'
      });
    default:
      return ({
        bg: 'red',
        color: 'var(--color-white)'
      });
  }
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(({
  children,
  fontSize = 13,
  theme = 'primary',
  style,
  ...props
}, ref) => {
  return (
    <StyledButton
      style={{
        ['--button-f-size' as string]: `${fontSize/baseRem}rem`,
        ['--button-bg-color' as string]: getButtonColor(theme).bg,
        ['--button-text-color' as string]: getButtonColor(theme).color,
        ...style
      }}
      ref={ref}
      {...props}
    >
      {children}
    </StyledButton>
  );
})

export default Button;
