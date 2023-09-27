import React from 'react';
import AppContainer from '../components/AppContext';
import MainHelmet from '../components/MainHelmet/MainHelmet';
import { StaticImage } from 'gatsby-plugin-image';

const LanciaEvo37 = () => {
  return (
    <AppContainer>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </AppContainer>
  );
};

export default LanciaEvo37;
