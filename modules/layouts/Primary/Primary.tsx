import React from 'react';
import Navbar from '@modules/Navbar';
import Sidebar from '@modules/Sidebar';
import { StyledLayout, StyledMain } from './styled';
import Scrollbar from '@modules/shared/Scrollbar';
import MobileNav from '@modules/MobileNav';

interface IPrimaryProps {
  children?: React.ReactNode;
}

const Primary:React.FC<IPrimaryProps> = (props) => {
  return (
    <Scrollbar style={{ height: '100vh' }} thumbColor='var(--color-gray)'>
      <StyledLayout>
        <Sidebar />
        <Navbar />
        <StyledMain>
          {props.children}
        </StyledMain>
        <MobileNav />
      </StyledLayout>
    </Scrollbar>
  );
}

export default Primary;
