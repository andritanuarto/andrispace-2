import React from 'react';
import styled from 'styled-components';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import { EThemeMode } from '../types/themes';

interface ILogoProps {
  theme?: EThemeMode;
}

const LogoContainer = styled.div<{ theme: EThemeMode }>`
  font-family: ${Fonts.Domine.css};
  color: ${(props) =>
    props.theme === EThemeMode.DARK
      ? Colors.whiteFoggyPith
      : Colors.blackNinja};
  font-size: 2rem;
`;

const Logo = ({ theme }: ILogoProps) => {
  return <LogoContainer theme={theme}>andri'space </LogoContainer>;
};

export default Logo;
