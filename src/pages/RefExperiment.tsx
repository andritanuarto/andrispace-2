import React, { forwardRef, useEffect, useRef } from 'react';

interface IRefExperiment {
  childRef: React.MutableRefObject<HTMLDivElement | null>;
}

const RefExpriment = forwardRef(({ childRef }: IRefExperiment) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const log = (a: string) => console.log(a);
    if (elementRef && elementRef.current) {
      elementRef.current.addEventListener('mouseover', () => log('mouseOver'));
      elementRef.current.addEventListener('mouseout', () => log('mouseOut'));
    }

    return () => {
      if (elementRef && elementRef.current) {
        elementRef.current.removeEventListener('mouseover', () =>
          log('mouseOver')
        );
        elementRef.current.removeEventListener('mouseout', () =>
          log('mouseOut')
        );
      }
    };
  }, []);

  return (
    <>
      <div style={{ fontSize: '30px', marginBottom: '50px' }} ref={elementRef}>
        Ref Experiment
      </div>
      <div ref={childRef}>childRef</div>
    </>
  );
});

export default RefExpriment;
