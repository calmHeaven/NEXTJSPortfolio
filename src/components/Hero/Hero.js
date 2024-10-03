import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I&apos;m Abenezer <br />
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I&apos;m a backend engineer with experience working at startup companies and developing software in which I&apos;ve been engaged
        in the analysis of customer requirements and deployment of well crafted solutions. I&apos;m also passionate about learning  and engineering  that can solve real-world problems and bring value.
      </SectionText>
      <Button
        onClick={() => (window.location = "https://smallpdf.com/file#s=96493e73-5fc7-49b3-b08f-9833d895657e")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
