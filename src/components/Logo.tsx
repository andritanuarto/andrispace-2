import React from 'react';
import styled from 'styled-components';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import { EThemeMode } from '../types/themes';

interface ILogoProps {
  theme?: EThemeMode;
}

const LogoContainer = styled.div<{ theme: EThemeMode }>`
  background: ${Colors.blackNinja};
  color: ${EThemeMode.DARK ? Colors.whiteFoggyPith : Colors.blackNinja};
  font-size: 2rem;
  font-family: ${Fonts.Domine.css};
`;

const Logo = ({ theme = EThemeMode.LIGHT }: ILogoProps) => {
  return <LogoContainer theme={theme}>andri'space </LogoContainer>;
};

export default Logo;
