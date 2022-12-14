import { SvgIconComponent } from '@mui/icons-material';
import React, { forwardRef, InputHTMLAttributes } from 'react';
import { StyledIconWrap, StyledInput, StyledInputWrap } from './styled';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  IconLeft?: SvgIconComponent;
}

type Ref = HTMLInputElement;

const Input = forwardRef<Ref, IInputProps>(({
  IconLeft,
  ...props
}, ref) => {
  return (
    <StyledInputWrap
      style={{
        ['--padding-left-resulted' as string]: `${
          !!IconLeft ?
            'calc(var(--padding-left-default) + var(--icon-left-size) + var(--icon-left-padding))' 
            : 
            'var(--padding-left-default)'}`
      }}
    >
      {
        IconLeft && (
          <StyledIconWrap>
            <IconLeft fontSize='inherit' />
          </StyledIconWrap>
        )
      }
      <StyledInput {...props} ref={ref} />
    </StyledInputWrap>
  );
});

export default Input;
