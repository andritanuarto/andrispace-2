import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.span<{ theme: EThemeMode }>`
  height: 24px;
  margin-right: 16px;
`;

interface IToggleSearchBar {
  name: string;
  style?: React.CSSProperties;
}

const Icon = ({ name, style }: IToggleSearchBar) => {
  return (
    <IconContainer className="material-symbols-outlined" style={style}>
      {name}
    </IconContainer>
  );
};

export default Icon;
