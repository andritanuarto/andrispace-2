import React from 'react';
import GlobalStyle from '../components/GlobalStyle';
import AppContainer from '../components/AppContext';
import Header from '../components/Header/Header';
import MainHelmet from '../components/MainHelmet/MainHelmet';

const IndexPage = () => {
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
