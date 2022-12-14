import React from 'react';
import { StyledText } from './styled';

interface ITextProps {
  children?: React.ReactNode;
  size?: number;
}

const Text:React.FC<ITextProps> = ({
  size = 10,
  children,
  ...props
}) => {
  return (
    <StyledText
      style={{
        ['--text-f-size' as string]: `${size/10}rem`
      }}
      {...props}
    >
      {children}
    </StyledText>
  );
}

export default Text;
