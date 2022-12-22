import { useSpring } from 'react-spring';
import useMeasure from 'react-use-measure';
import { ResizeObserver } from '@juggle/resize-observer';

const useAccordion = (isOpen: boolean, offset = 0) => {
  const [ref, { height }] = useMeasure({ polyfill: ResizeObserver });
  const style = useSpring({ height: isOpen ? height + offset : 0, overflow: 'hidden', config: { duration: 300 } });

  return { ref, style };
}

export default useAccordion;