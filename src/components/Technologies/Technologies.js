import React from 'react';
import { DiFirebase, DiPostgresql, DiReact} from 'react-icons/di';
import { SiNextdotjs, SiSpring, SiSpringboot } from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import {backend, frontend, database} from '../../constants/constants';
const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with various cutting age technologies in the web development
      industries. I especially love working with Spring in the Backend. Although
      I have grown to love the Frontend of the Stack.
    </SectionText>
    <List>
      <ListItem>
        <SiSpring size="2.5rem"/>
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experience with <br />
            {backend.map((p,i)=>(
                <>{p} <br/></>
            ))}

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Experience with <br />
            {frontend.map((p,i)=>(
                <>{p} <br/></>
            ))}
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPostgresql size="3rem" />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experience with <br />
            {database.map((p,i)=>(
                <>{p} <br/></>
            ))}
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
