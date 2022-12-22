import { MutableRefObject, useEffect } from "react";

const useLazyLoad = (
  ref: MutableRefObject<any> | null, 
  callback: VoidFunction,
  options?: IntersectionObserverInit
) => {

  const onIntersect:IntersectionObserverCallback = (entries) => {
    const element = entries[0];
    if (element.isIntersecting) callback();
  };

  useEffect(() => {
    if (ref?.current) {
      const observer = new IntersectionObserver(onIntersect, options);
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      }
    }
  }, [ref, onIntersect, options]);
}

export default useLazyLoad;