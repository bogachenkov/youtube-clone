import React from 'react';
import { StyledTitle } from './styled';

interface ITitleProps {
  children?: React.ReactNode;
  size?: number;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title:React.FC<ITitleProps> = ({
  size = 24,
  level = 2,
  children,
  ...props
}) => {
  const tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <StyledTitle 
      as={tag}
      style={{
        ['--title-f-size' as string]: `${size/10}rem`
      }}
      {...props}
    >
      {children}
    </StyledTitle>
  );
}

export default Title;
