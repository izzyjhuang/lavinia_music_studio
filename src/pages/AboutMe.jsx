import Footer from '../components/Footer';
import React from 'react';
import AboutMeSection from '../components/AboutMeSection';
import CompetitionSection from '../components/CompetitionSection';
import LocationSection from '../components/LocationSection';

const AboutMe = () => (
  <>
    <AboutMeSection />
    <CompetitionSection />
    <LocationSection />
  </>
);

export default function AboutMeWithFooter(props) {
  return <>
    <AboutMe {...props} />
    <Footer />
  </>;
}

// Original default export
// export default AboutMe;
 