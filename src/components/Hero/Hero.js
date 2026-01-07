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
        👋 Hi, I&apos;m Abenezer — a backend engineer with startup experience, passionate about building scalable systems and crafting solutions that make a real-world impact. I love turning ideas into reliable software that brings lasting value.
      </SectionText>
      <Button
        onClick={() => (window.location = "https://pdfhost.io/v/MBBZRyy6AW_Abenezer_Resume_2025-26_AT_NEW")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
