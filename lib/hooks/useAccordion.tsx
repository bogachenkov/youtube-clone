import { useSpring } from 'react-spring';
import useMeasure from 'react-use-measure';
import { ResizeObserver } from '@juggle/resize-observer';
import React from 'react';

interface IAccordionProps {
  isOpen: boolean;
  offset?: number;
  dimensionType?: 'width' | 'height';
}

const useAccordion = ({
  isOpen,
  offset = 0,
  dimensionType = 'height'
}:IAccordionProps) => {
  const [ref, rect] = useMeasure({ polyfill: ResizeObserver });
  const style = useSpring({ 
    [dimensionType]: isOpen ? rect[dimensionType] + offset : 0, 
    overflow: 'hidden', 
    config: { 
      duration: 300 
    } 
  } as React.CSSProperties);

  return { ref, style };
}

export default useAccordion;