import React from 'react';
import styled from 'styled-components';
import Colors from '../constants/Colors';
import { EThemeMode } from '../types/themes';
import { useAppContext } from './AppContext';
import Logo from './Logo';

const HeaderContainer = styled.div`
  padding: 32px 40px;
  background: ${({ theme }) =>
    theme === EThemeMode.DARK ? Colors.blackNinja : Colors.whiteFoggyPith}
  color: ${({ theme }) =>
    theme === EThemeMode.DARK ? Colors.whiteFoggyPith : Colors.blackNinja}
`;

const Header = () => {
  const { theme } = useAppContext();
  return (
    <HeaderContainer theme={theme}>
      <Logo theme={theme} />
    </HeaderContainer>
  );
};

export default Header;
