import { SvgIconComponent } from '@mui/icons-material';
import React, { InputHTMLAttributes } from 'react';
import { StyledIconWrap, StyledInput, StyledInputWrap } from './styled';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  IconLeft?: SvgIconComponent;
}

const Input:React.FC<IInputProps> = ({
  IconLeft,
  ...props
}) => {
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
      <StyledInput {...props} />
    </StyledInputWrap>
  );
}

export default Input;
