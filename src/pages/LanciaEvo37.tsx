import React from 'react';
import AppContainer from '../components/AppContext';
import { Link, useStaticQuery, graphql } from 'gatsby';

import MainHelmet from '../components/MainHelmet/MainHelmet';
import { StaticImage } from 'gatsby-plugin-image';

const LanciaEvo37 = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  console.log(data, 'data');

  return (
    <AppContainer>
      <div>
        {/* <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />> */}
        <h1>Lancia Evo 37</h1>

        <p>
          Hello everyone, Today's project is going to be the Lancia 037 Rally by
          Hasegawa. I've been doing several car projects in the past, and this
          is my first time recording my process.
          {/* Image of Kit Box */}
          For this project I won't do the Martini Racing. Instead I want to do
          the green color like this
          https://www.youtube.com/watch?v=dka23CLiiuA&t=26s. By the way
          ISSIMIOfficial is one of my favourite car youtube channel. I'm not
          sure what's the name of that green color. Let's call it racing green.
          It sounds sexier to me.
        </p>
      </div>
    </AppContainer>
  );
};

export default LanciaEvo37;
