import React from 'react';
import { StyledAvatar } from './styled';

interface IAvatarProps {
  children?: React.ReactNode;
}

const Avatar:React.FC<IAvatarProps> = (props) => {
  return (
    <StyledAvatar 
      alt='Avatar' 
      src={'https://storage.jewheart.com/content/users/avatars/1864/avatar_1864_500.jpg?1558624002'} 
      height={26} 
      width={26} 
    />
  );
}

export default Avatar;
