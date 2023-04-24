import React from 'react';
import { Helmet } from 'react-helmet';
import { GOOGLE_FONT_URL } from '../../constants/Fonts';

const MainHelmet = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>andrispace</title>
      <link rel="preconnect" href={GOOGLE_FONT_URL} />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href={`${GOOGLE_FONT_URL}/css2?family=Domine:wght@400;500;600;700&display=swap`}
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href={`${GOOGLE_FONT_URL}/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0`}
      />
    </Helmet>
  );
};

export default MainHelmet;
