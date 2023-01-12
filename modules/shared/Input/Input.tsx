import React, { forwardRef, InputHTMLAttributes } from 'react';
import { baseRem } from 'styles/globalStyles';
import IconWrapper from '../IconWrapper';
import { IconName } from '../IconWrapper/IconWrapper';
import { StyledIconWrap, StyledInput, StyledInputWrap } from './styled';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  iconLeft?: IconName;
  padH?: number;
  theme?: 'primary' | 'underline'
}

type Ref = HTMLInputElement;

// trunk-ignore(eslint/react/display-name)
const Input = forwardRef<Ref, IInputProps>(({
  iconLeft,
  padH = 25,
  theme = 'primary',
  ...props
}, ref) => {
  return (
    <StyledInputWrap
      style={{
        ['--padding-left-default' as string]: `${padH/baseRem}rem`,
        ['--border-radius' as string]: theme === 'primary' ? '1em' : 0,
        ['--border-bottom' as string]: theme === 'primary' ? 'none' : '1px solid var(--color-gray)',
        ['--padding-left-resulted' as string]: `${
          !!iconLeft ?
            'calc(var(--padding-left-default) + var(--icon-left-size) + var(--icon-left-padding))' 
            : 
            'var(--padding-left-default)'}`
      }}
    >
      {
        iconLeft && (
          <StyledIconWrap>
            <IconWrapper icon={iconLeft} />
          </StyledIconWrap>
        )
      }
      <StyledInput {...props} ref={ref} />
    </StyledInputWrap>
  );
});

export default Input;
