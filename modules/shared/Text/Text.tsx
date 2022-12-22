import React, { ComponentPropsWithoutRef } from 'react';
import { baseRem } from 'styles/globalStyles';
import { StyledText } from './styled';

interface ITextProps extends ComponentPropsWithoutRef<'p'> {
  children?: React.ReactNode;
  size?: number;
}

const Text = React.forwardRef<HTMLParagraphElement, ITextProps>(({
  size = 10,
  children,
  style,
  ...props
}, ref) => {
  return (
    <StyledText
      style={{
        ['--text-f-size' as string]: `${size/baseRem}rem`,
        ...style
      }}
      {...props}
      ref={ref}
    >
      {children}
    </StyledText>
  );
})

export default Text;
