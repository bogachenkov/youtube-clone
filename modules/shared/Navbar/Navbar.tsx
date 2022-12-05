import React from 'react';
import { StyledNavbar } from './styled';

interface INavbarProps {
  children?: React.ReactNode;
}

const Navbar:React.FC<INavbarProps> = (props) => {
  return (
    <StyledNavbar>
      <input type="text" />
    </StyledNavbar>
  );
}

export default Navbar;
