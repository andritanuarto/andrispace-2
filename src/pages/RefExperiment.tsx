import React, { forwardRef, useEffect, useRef } from 'react';

interface IRefExperiment {
  childRef: React.MutableRefObject<HTMLDivElement | null>;
}

const style = {
  fontSize: '30px',
  marginBottom: '50px',
  display: 'inline-block',
  marginRight: '20px',
};

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
          log('mouseOverrrr')
        );
        elementRef.current.removeEventListener('mouseout', () =>
          log('mouseOutttt')
        );
      }
      console.log('unmount1');
    };
  }, [elementRef]);

  useEffect(() => {
    return () => {
      console.log('umount2');
    };
  }, []);

  return (
    <>
      <div style={style} ref={elementRef}>
        Ref In the component
      </div>
      <div style={style} ref={childRef}>
        Ref in Parent
      </div>
    </>
  );
});

export default RefExpriment;
