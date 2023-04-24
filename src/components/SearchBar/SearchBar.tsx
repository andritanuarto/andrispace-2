import React from 'react';
import styled from 'styled-components';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import { EThemeMode } from '../../types/themes';
import Icon from '../Icon/Icon';

const SearchBarContainer = styled.div<{ theme: EThemeMode }>`
  display: flex;
  flex: 1;
  border-radius: 10px;
  height: 40px;
  margin: 0 24px;
  padding: 0 16px;
  align-items: center;
  background-color: ${(props) =>
    props.theme === EThemeMode.DARK
      ? Colors.whiteFoggyPith
      : Colors.blackNinja};
  input {
    font-family: ${Fonts.SourceCodePro};
    flex: 1;
    height: 32px;
    border: none;
    background: none;
    outline: 0;
    font-size: 1.125rem;
    background-color: ${(props) =>
      props.theme === EThemeMode.DARK
        ? Colors.whiteFoggyPith
        : Colors.blackNinja};
  }
  span {
    color: ${(props) =>
      props.theme === EThemeMode.DARK
        ? Colors.blackNinja
        : Colors.whiteFoggyPith};
  }
`;

interface IToggleSearchBar {
  theme?: EThemeMode;
}

const SearchBar = ({ theme }: IToggleSearchBar) => {
  return (
    <SearchBarContainer theme={theme}>
      <Icon name="search" />
      <input type="text" placeholder="Search Article ..." />
    </SearchBarContainer>
  );
};

export default SearchBar;
