import React from 'react';
import BoringAvatar from "boring-avatars";
import { StyledAvatarWrap } from './styled';
import { baseRem } from 'styles/globalStyles';

interface IAvatarProps {
  children?: React.ReactNode;
  name: string;
  size?: number;
}

const Avatar:React.FC<IAvatarProps> = ({
  name,
  size = 26,
}) => {
  return (
    <StyledAvatarWrap
      style={{
        ['--avatar-size' as string]: `${size/baseRem}rem`
      }}
    >
      <BoringAvatar
        size={size}
        name={name}
        variant="beam"
        square
      />
    </StyledAvatarWrap>
  );
}

export default Avatar;
