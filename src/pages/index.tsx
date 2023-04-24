import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import GlobalStyle from '../components/GlobalStyle';
import AppContainer from '../components/AppContext';
import Header from '../components/Header/Header';
import MainHelmet from '../components/MainHelmet/MainHelmet';

const IndexPage: React.FC<PageProps> = (props) => {
  return (
    <AppContainer>
      <>
        <MainHelmet />
        <GlobalStyle />
        <Header />
      </>
    </AppContainer>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
