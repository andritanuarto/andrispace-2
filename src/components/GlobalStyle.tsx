import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import { EThemeMode } from '../types/themes';
import { useAppContext } from './AppContext';

const GlobalComponent = createGlobalStyle<{ theme: EThemeMode }>`
  @import url(${Fonts.Domine.url});
  body {
    font-size: 14px;
    margin: 0;
    height: 100vh;
    background: ${(props) =>
      props.theme === EThemeMode.DARK
        ? Colors.blackNinja
        : Colors.whiteFoggyPith};
    color: ${(props) =>
      props.theme === EThemeMode.DARK
        ? Colors.whiteFoggyPith
        : Colors.blackNinja};
  }
`;

const GlobalStyle = () => {
  const { theme } = useAppContext();
  return <GlobalComponent theme={theme} />;
};

export default GlobalStyle;
