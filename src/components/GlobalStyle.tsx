import { createGlobalStyle } from 'styled-components';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import { EThemeMode } from '../types/themes';

const GlobalStyle = createGlobalStyle<{ theme: EThemeMode }>`
  @import url(${Fonts.Domine.url});
  body {
    background: ${(props) =>
      props.theme === EThemeMode.DARK
        ? Colors.blackNinja
        : Colors.whiteFoggyPith};
    color: ${(props) =>
      props.theme === EThemeMode.DARK
        ? Colors.whiteFoggyPith
        : Colors.blackNinja};
    font-size: 14px;
  }
`;

export default GlobalStyle;
