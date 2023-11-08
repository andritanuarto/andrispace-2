import * as React from 'react';
import AppContainer from '../components/AppContext';

const AboutPage = () => {
  return (
    <AppContainer>
      <main>
        <h1>About Me</h1>
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </main>
    </AppContainer>
  );
};

export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="Your description" />
  </>
);

export default AboutPage;
