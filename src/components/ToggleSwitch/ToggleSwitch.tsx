import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import Colors from '../../constants/Colors';
import { EThemeMode } from '../../types/themes';
import Icon from '../Icon/Icon';

const SwithContainer = styled.div<{ theme: EThemeMode }>`
  cursor: pointer;
  position: relative;
  width: 64px;
  height: 32px;
  border-radius: 28px;
  border: solid 1px ${Colors.cerebralGrey};
  background-color: ${(props) =>
    props.theme === EThemeMode.DARK ? Colors.carbon : Colors.whiteFoggyPith};
`;

const Switch = styled.div<{ theme: EThemeMode }>`
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  top: 4px;
  transition-property: left;
  transition-duration: 0.5s;
  left: ${(props) => (props.theme === EThemeMode.DARK ? '4px' : '36px')};
  background-color: ${(props) =>
    props.theme === EThemeMode.DARK
      ? Colors.whiteFoggyPith
      : Colors.cerebralGrey};
`;

interface IToggleSwitch {
  theme?: EThemeMode;
  setTheme: React.Dispatch<React.SetStateAction<EThemeMode>>;
}

const ToggleSwitch = ({ theme, setTheme }: IToggleSwitch) => {
  const iconStyle: CSSProperties = {
    width: 24,
    height: 24,
    top: 4,
    position: 'relative',
    left: theme === EThemeMode.DARK ? '36px' : '8px',
    color: theme === EThemeMode.DARK ? Colors.pacMan : Colors.cheddar,
    transitionProperty: 'left, color',
    transitionDuration: '0.5s',
  };

  return (
    <SwithContainer
      theme={theme}
      onClick={() => {
        setTheme(
          theme === EThemeMode.DARK ? EThemeMode.LIGHT : EThemeMode.DARK
        );
      }}
    >
      <Icon
        name={theme === EThemeMode.DARK ? 'dark_mode' : 'light_mode'}
        style={iconStyle}
      />
      <Switch theme={theme} />
    </SwithContainer>
  );
};

export default ToggleSwitch;
