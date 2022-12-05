import Link from 'next/link';
import React, { useState } from 'react';
import SIDEBAR_SECTIONS from '../../../const/navigation';
import HamburgerMenu from '../HamburgerMenu';
import Logo from '../Logo';
import SidebarSection from '../SidebarSection';
import { StyledLogoLink, StyledSidebar, StyledSidebarHeader } from './styled';

interface ISidebarProps {
  children?: React.ReactNode;
}

const Sidebar:React.FC<ISidebarProps> = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <StyledSidebar
      style={{
        ['--sidebar-width' as string]: `${isOpen ? 'auto' : 'calc(var(--sidebar-padding-h) * 2 + var(--sidebar-icon-size))'}`,
        ['--sidebar-items-display' as string]: `${isOpen ? 'initial' : 'none'}`,
      }}
    >
      <StyledSidebarHeader>
        <HamburgerMenu toggleMenu={() => setIsOpen(state => !state)} />
        <StyledLogoLink href={'/'}>
          <Logo />
        </StyledLogoLink>
      </StyledSidebarHeader>
      {
        SIDEBAR_SECTIONS.map((section, i) => (
          <SidebarSection key={i} {...section} />
        ))
      }
    </StyledSidebar>
  );
}

export default Sidebar;
