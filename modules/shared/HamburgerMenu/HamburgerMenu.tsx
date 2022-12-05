import React from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { StyledHamburgerButton } from './styled';

interface IHamburgerMenuProps {
  children?: React.ReactNode;
  toggleMenu: VoidFunction;
}

const HamburgerMenu:React.FC<IHamburgerMenuProps> = ({
  toggleMenu
}) => {
  return (
    <StyledHamburgerButton onClick={toggleMenu}>
      <MenuOutlinedIcon fontSize='inherit' color='inherit' />
    </StyledHamburgerButton>
  );
}

export default HamburgerMenu;
