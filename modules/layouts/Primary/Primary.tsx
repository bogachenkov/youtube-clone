import React from 'react';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';
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
