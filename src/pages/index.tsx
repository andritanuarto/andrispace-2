import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Header from '../components/Header';
import GlobalStyle from '../components/GlobalStyle';
import AppContainer from '../components/AppContext';

const IndexPage: React.FC<PageProps> = (props) => {
  return (
    <AppContainer>
      <>
        <GlobalStyle />
        <Header />
      </>
    </AppContainer>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
