import React from 'react';
import { Scrollbars, ScrollbarProps } from 'react-custom-scrollbars-2';
import {} from './styled';

interface IScrollbarProps extends ScrollbarProps {
  children?: React.ReactNode;
  thumbColor?: string;
}

const Scrollbar:React.FC<IScrollbarProps> = ({
  thumbColor = 'var(--color-grayDark)',
  ...props
}) => {

  const renderThumb = ({ style, ...props }: any) => {
    const thumbStyle = {
        backgroundColor: thumbColor,
        borderRadius: 6
    };
    return (
      <div
        style={{ ...style, ...thumbStyle }}
        {...props}/>
    );
  }
  
  return (
    <Scrollbars
      renderThumbHorizontal={renderThumb}
      renderThumbVertical={renderThumb}
      universal
      {...props} />
  );
}

export default Scrollbar;
