import React from 'react';
import { StyledAvatar } from './styled';

interface IAvatarProps {
  children?: React.ReactNode;
  src?: string;
  size?: number;
}

const Avatar:React.FC<IAvatarProps> = ({
  src = 'https://storage.jewheart.com/content/users/avatars/1864/avatar_1864_500.jpg?1558624002',
  size = 26,
}) => {
  return (
    <StyledAvatar 
      alt='Avatar' 
      src={src} 
      height={size} 
      width={size} 
    />
  );
}

export default Avatar;
