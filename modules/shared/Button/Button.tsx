import React, { ComponentPropsWithoutRef } from 'react';
import { baseRem } from 'styles/globalStyles';
import { StyledButton } from './styled';

interface IButtonProps extends ComponentPropsWithoutRef<'button'>  {
  children?: React.ReactNode;
  fontSize?: number;
  theme?: 'primary' | 'secondary' | 'text';
}

const DEFAULT_PADDING = '.9em 1.5em';
const DEFAULT_TEXT_COLOR = 'var(--color-light)';

type ButtonTheme = {
  bg: string;
  color?: string;
  padding?: number;
}

const getButtonThemeData = (theme: IButtonProps['theme']):ButtonTheme => {
  switch (theme) {
    case 'primary':
      return ({
        bg: 'red',
      });
    case 'secondary':
      return ({
        bg: 'var(--color-grayDark)',
      });
    case 'text':
      return ({
        bg: 'transparent',
        padding: 0
      });
    default:
      return ({
        bg: 'red',
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
  const buttonThemeData = getButtonThemeData(theme);
  return (
    <StyledButton
      style={{
        ['--button-f-size' as string]: `${fontSize/baseRem}rem`,
        ['--button-bg-color' as string]: buttonThemeData.bg,
        ['--button-text-color' as string]: buttonThemeData.color ?? DEFAULT_TEXT_COLOR,
        ['--button-padding' as string]: buttonThemeData.padding ?? DEFAULT_PADDING,
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
