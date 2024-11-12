import React, { useEffect, useRef, useState } from 'react';
import AppContainer from '../components/AppContext';
import RefExpriment from './refExperiment';

const IndexPage = () => {
  const childRef = useRef<null | HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (childRef && childRef.current) {
      childRef.current?.addEventListener('mouseover', () =>
        console.log('childRef')
      );
    }
  }, []);

  return (
    <AppContainer>
      <>
        {isOpen && <RefExpriment childRef={childRef} />}
        <button onClick={() => setIsOpen(!isOpen)}>click</button>
      </>
    </AppContainer>
  );
};

export default IndexPage;
