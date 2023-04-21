import React from 'react';
import styled from 'styled-components';
import Colors from '../constants/Colors';
import Logo from './Logo';

const HeaderContainer = styled.div`
  background: ${Colors.blackNinja};
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  );
};

export default Header;
