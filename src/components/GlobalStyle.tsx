import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Colors from '../constants/Colors';
import { EThemeMode } from '../types/themes';
import { useAppContext } from './AppContext';

const GlobalComponent = createGlobalStyle<{ theme: EThemeMode }>`
  body {
    font-size: 14px;
    margin: 0;
    height: 100vh;
    transition-property: background, color;
    transition-duration: 0.5s;
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
