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
  });

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

// import React, { Component, ReactNode, createRef } from 'react';
// import AppContainer from '../components/AppContext';
// import RefExpriment from './refExperiment';

// interface IndexPageState {
//   isOpen: boolean;
// }

// class IndexPage extends Component<{}, IndexPageState> {
//   private childRef: React.RefObject<HTMLElement>;

//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       isOpen: false,
//     };
//     this.childRef = createRef<HTMLElement>();
//   }

//   componentDidMount() {
//     const currentRef = this.childRef.current;
//     console.log(currentRef, 'currentRef');
//     if (currentRef) {
//       currentRef.addEventListener('mouseover', this.handleMouseOver);
//     }
//   }

//   componentWillUnmount() {
//     const currentRef = this.childRef.current;
//     if (currentRef) {
//       currentRef.removeEventListener('mouseover', this.handleMouseOver);
//     }
//   }

//   handleMouseOver = () => {
//     console.log('childRef');
//   };

//   toggleOpen = () => {
//     this.setState((prevState) => ({
//       isOpen: !prevState.isOpen,
//     }));
//   };

//   render(): ReactNode {
//     const { isOpen } = this.state;

//     console.log(this.childRef, 'childref');
//     return (
//       <AppContainer>
//         <>
//           {isOpen && <RefExpriment childRef={this.childRef} />}
//           <button onClick={this.toggleOpen}>click</button>
//         </>
//       </AppContainer>
//     );
//   }
// }

// export default IndexPage;
