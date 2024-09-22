import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I'm Abenezer <br />
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm CS student with a concentration in backend engineering. I have experience working with startup companies, and I've been engaged with analysis and customer requirements. I'm also passionate about learning new technologies and engineering software that can solve real-world problems.
      </SectionText>
      <Button onClick={()=>window.location = 'https:www.linkedin.com/in/agt700'}>Learn More</Button>
      </LeftSection>
  </Section>
);

export default Hero;