import React from 'react';
import { StyledImage } from './styled';

import LogoSvg from './yt_logo_rgb_dark.png';

interface ILogoProps {
  children?: React.ReactNode;
}

const Logo:React.FC<ILogoProps> = (props) => {
  return (
    <StyledImage loading='eager' src={LogoSvg} alt='YouTube' />
  );
}

export default Logo;
