import {RefObject, useEffect} from 'react';

const useDetectOutsideClick = (refs: RefObject<HTMLElement>[], handler: (event: Event) => void) => {
  useEffect(() => {
    const listener = (event: Event) => {
      // Do nothing if clicking inside any of the refs' elements or their descendant elements
      if (refs.some(ref => ref.current && ref.current.contains((event?.target as Node) || null))) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [refs, handler]);
};

export default useDetectOutsideClick;
