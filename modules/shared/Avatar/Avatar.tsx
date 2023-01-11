import React, { useState } from 'react';
import { StyledAvatar } from './styled';

interface IAvatarProps {
  children?: React.ReactNode;
  src: string;
  size?: number;
}

const placeholderUrl = 'https://www.misemacau.org/wp-content/uploads/2015/11/avatar-placeholder-01-300x250.png';

const Avatar:React.FC<IAvatarProps> = ({
  src,
  size = 26,
}) => {
  const [imgSrc, setSrc] = useState(src);

  return (
    <StyledAvatar
      alt='Avatar' 
      src={imgSrc} 
      height={size} 
      width={size}
      onError={() => setSrc(placeholderUrl)}
      placeholder='blur'
      blurDataURL={placeholderUrl}
    />
  );
}

export default Avatar;
