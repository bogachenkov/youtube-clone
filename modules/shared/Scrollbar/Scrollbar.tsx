import React, { useEffect, useRef } from 'react';
import { Scrollbars, ScrollbarProps } from 'react-custom-scrollbars-2';
import {} from './styled';

interface IScrollbarProps extends ScrollbarProps {
  children?: React.ReactNode;
  thumbColor?: string;
  initialScrollTop?: number;
}

const Scrollbar:React.FC<IScrollbarProps> = ({
  thumbColor = 'var(--color-grayDark)',
  initialScrollTop,
  ...props
}) => {
  const ref = useRef<Scrollbars>(null);

  useEffect(() => {
    if (initialScrollTop) ref.current?.scrollTop(initialScrollTop);
  }, [initialScrollTop]);

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
      ref={ref}
      renderThumbHorizontal={renderThumb}
      renderThumbVertical={renderThumb}
      universal
      {...props} />
  );
}

export default Scrollbar;
