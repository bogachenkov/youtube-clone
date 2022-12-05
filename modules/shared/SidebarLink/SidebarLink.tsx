import { useRouter } from 'next/router';
import React from 'react';
import { SectionLinkType } from '../../../const/navigation';
import { StyledLink, StyledLinkIconWrapper, StyledLinkLabel } from './styled';


const SidebarLink:React.FC<SectionLinkType> = ({ href, label, Icon }) => {
  const { pathname } = useRouter();

  return (
    <StyledLink
      style={{
        ['--sidebarlink-color' as string]: `${href === pathname ? 'var(--color-red)' : 'inherit'}`
      }}
      href={href} 
      aria-label={label}
    >
      <StyledLinkIconWrapper>
        <Icon fontSize='inherit' />
      </StyledLinkIconWrapper>
      <StyledLinkLabel>
        {label}
      </StyledLinkLabel>
    </StyledLink>
  );
}

export default SidebarLink;
