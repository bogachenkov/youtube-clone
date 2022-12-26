import React from 'react';
import { StyledAvatar } from './styled';

interface IAvatarProps {
  children?: React.ReactNode;
  src?: string;
  size?: number;
}

const Avatar:React.FC<IAvatarProps> = ({
  src = '/assets/avatar_default.jpg',
  size = 26,
}) => {
  return (
    <StyledAvatar
      alt='Avatar' 
      src={src} 
      height={size} 
      width={size}
      loading={'lazy'}
      priority={false}
    />
  );
}

export default Avatar;
