import React from 'react';
import Navbar from '../../shared/Navbar';
import Sidebar from '../../shared/Sidebar';
import { StyledLayout } from './styled';

interface IPrimaryProps {
  children?: React.ReactNode;
}

const Primary:React.FC<IPrimaryProps> = (props) => {
  return (
    <StyledLayout>
      <Sidebar />
      <Navbar />
      <main>
        {props.children}
      </main>
    </StyledLayout>
  );
}

export default Primary;
