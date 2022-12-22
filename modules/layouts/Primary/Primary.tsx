import React from 'react';
import Navbar from '@modules/Navbar';
import Sidebar from '@modules/Sidebar';
import { StyledLayout, StyledMain } from './styled';

interface IPrimaryProps {
  children?: React.ReactNode;
}

const Primary:React.FC<IPrimaryProps> = (props) => {
  return (
    <StyledLayout>
      <Sidebar />
      <Navbar />
      <StyledMain>
        {props.children}
      </StyledMain>
    </StyledLayout>
  );
}

export default Primary;
