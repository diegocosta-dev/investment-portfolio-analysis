import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
};

export const Portal = ({ children }: Props) => {
  const el = useRef(document.getElementById('root-portal') || document.createElement('div'));

  useEffect(() => {
    const element = el.current;
    element.id = 'root-portal';
    document.body.appendChild(element);

    return () => {
      if (!element) {
        document.body.removeChild(element);
      }
    };
  }, []);

  return createPortal(children, el.current);
};
