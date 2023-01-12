import React from 'react';
import BoringAvatar from "boring-avatars";

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
    <BoringAvatar
      size={size}
      name={name}
      variant="beam"
    />
  );
}

export default Avatar;
