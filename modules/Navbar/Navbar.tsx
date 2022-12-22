import React from 'react';
import ControlsSection from '@modules/Navbar/ControlsSection';
import SearchSection from '@modules/Navbar/SearchSection';
import { StyledNavbar } from './styled';

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
