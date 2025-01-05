import React from 'react';
import { DiFirebase, DiPostgresql, DiReact} from 'react-icons/di';
import { SiNextdotjs, SiSpring, SiSpringboot } from "react-icons/si";
import { CiCloud } from "react-icons/ci";
import { VscSourceControl } from "react-icons/vsc";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import {backend, frontend, database, tools} from '../../constants/constants';
const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <br/>
    <SectionText>
      I have worked with various cutting age technologies in the web development
      industries. I especially love working with Spring in the Backend. Although
      I have grown to love the Frontend of the Stack.
    </SectionText>
    <List>
      <ListItem>
        <SiSpring size="4rem"/>
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
        <SiNextdotjs size="4rem" />
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
        <DiPostgresql size="4rem" />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Experience with <br />
            {database.map((p,i)=>(
                <>{p} <br/></>
            ))}
          </ListParagraph>
        </ListContainer>
      </ListItem> <ListItem>
        <VscSourceControl size="4rem" />
        <ListContainer>
          <ListTitle>Developer Tools</ListTitle>
          <ListParagraph>
            Experience with <br />
            {tools.map((p,i)=>(
                <>{p} <br/></>
            ))}
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
