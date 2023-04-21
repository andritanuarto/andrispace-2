import React from 'react';
import styled from 'styled-components';
import Colors from '../constants/Colors';
import { EThemeMode } from '../types/themes';

interface ILogoProps {
  theme?: EThemeMode;
}

const LogoContainer = styled.div<{ theme: EThemeMode }>`
  background: ${Colors.blackNinja};
  color: ${EThemeMode.DARK ? Colors.whiteFoggyPith : Colors.blackNinja};
`;

const Logo = ({ theme = EThemeMode.LIGHT }: ILogoProps) => {
  return <LogoContainer theme={theme}>andri'space </LogoContainer>;
};

export default Logo;
