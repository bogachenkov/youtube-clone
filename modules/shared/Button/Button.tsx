import React, { ComponentPropsWithoutRef } from 'react';
import { baseRem } from 'styles/globalStyles';
import { StyledButton } from './styled';

export interface IButtonProps extends ComponentPropsWithoutRef<'button'>  {
  children?: React.ReactNode;
  fontSize?: number;
  fontColor?: string;
  theme?: 'primary' | 'secondary' | 'text';
  hoverable?: boolean;
  hoverColor?: string;
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
        color: 'var(--color-grayLight)'
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

// trunk-ignore(eslint/react/display-name)
const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(({
  children,
  fontSize = 13,
  theme = 'primary',
  fontColor,
  style,
  hoverable = false,
  hoverColor = 'var(--color-light)',
  ...props
}, ref) => {
  const buttonThemeData = getButtonThemeData(theme);
  const buttonFontColor = fontColor ?? buttonThemeData.color ?? DEFAULT_TEXT_COLOR;
  return (
    <StyledButton
      style={{
        ['--button-f-size' as string]: `${fontSize/baseRem}rem`,
        ['--button-bg-color' as string]: buttonThemeData.bg,
        ['--button-text-color' as string]: buttonFontColor,
        ['--button-padding' as string]: buttonThemeData.padding ?? DEFAULT_PADDING,
        ['--button-hover-color' as string]: hoverable ? hoverColor : buttonFontColor,
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
