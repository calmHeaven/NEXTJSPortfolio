import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props: any) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I'm Abenezer <br />
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm a backend engineer with experience working at startup companies and developing software in which I've been engaged
        in the analysis of customer requirements and deployment of well crafted solutions. I'm also passionate about learning  and engineering  that can solve real-world problems and bring value.
      </SectionText>
      <Button
        onClick={() => (window.location = "https:www.linkedin.com/in/agt700")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
