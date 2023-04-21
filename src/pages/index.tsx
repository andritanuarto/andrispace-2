import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Header from '../components/Header';
import GlobalStyle from '../components/GlobalStyle';
import { EThemeMode } from '../types/themes';

const IndexPage: React.FC<PageProps> = (props) => {
  return (
    <>
      <GlobalStyle theme={EThemeMode.DARK} />
      <Header />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
