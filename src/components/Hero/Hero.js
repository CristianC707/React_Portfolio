import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        An aspiring junior web developer with a passion for creating web applications while continuing to learn and grow in the field of technology.
      </SectionText>
     <ExternalLinks to="/public/images/code.pdf"> <Button onClick={() => window.location = ''}>Learn More</Button> </ExternalLinks>
    </LeftSection>
  </Section>
);

export default Hero;