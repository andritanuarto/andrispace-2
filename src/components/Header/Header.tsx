import React from 'react';
import styled from 'styled-components';
import Colors from '../../constants/Colors';
import { EThemeMode } from '../../types/themes';
import { useAppContext } from '../AppContext';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 40px;
  background: ${({ theme }) =>
    theme === EThemeMode.DARK ? Colors.blackNinja : Colors.whiteFoggyPith}
  color: ${({ theme }) =>
    theme === EThemeMode.DARK ? Colors.whiteFoggyPith : Colors.blackNinja}
`;

const Header = () => {
  const { theme, setTheme } = useAppContext();
  return (
    <HeaderContainer theme={theme}>
      <Logo theme={theme} />
      <SearchBar theme={theme} />
      <ToggleSwitch theme={theme} setTheme={setTheme} />
    </HeaderContainer>
  );
};

export default Header;
