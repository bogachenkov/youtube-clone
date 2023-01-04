import React from 'react';
const ControlsSection = dynamic(() => import('@modules/Navbar/ControlsSection'), { ssr: false });
import SearchSection from '@modules/Navbar/SearchSection';
import { StyledNavbar } from './styled';
import dynamic from 'next/dynamic';

interface INavbarProps {
  children?: React.ReactNode;
}

const Navbar:React.FC<INavbarProps> = (props) => {
  return (
    <StyledNavbar>
      <div style={{ width: '1px' }}></div>
      <SearchSection />
      <ControlsSection />
    </StyledNavbar>
  );
}

export default Navbar;
