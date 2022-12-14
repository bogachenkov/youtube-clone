import React from 'react';
import { StyledContainer } from './styled';

interface IContainerProps {
  children?: React.ReactNode;
}

const Container:React.FC<IContainerProps> = ({
  children
}) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
}

export default Container;
