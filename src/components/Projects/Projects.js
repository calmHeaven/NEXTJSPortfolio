import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList,Img} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Image from 'next/image';
// import image from '../Projects/image.png';
// import Mono from '../Projects/spring-new.png';

const Projects = () => (
  <Section  nopadding
   id='projects'>
    <SectionDivider />
    <SectionTitle main>
      Projects</SectionTitle>
    <GridContainer>
      {projects.map((p,i)=>(
        <BlogCard key={i}>
          <Img src={p.image}
                width={100+"%"}
                height={300+"px"}

                alt={p.title}/>
          <TitleContent>
            <HeaderThree title>
              {p.title}
            </HeaderThree>
            <Hr/>
            <CardInfo>
              {p.description}
            </CardInfo>
          </TitleContent>
          <div>
              <br/>
            <TitleContent >
                Stack
            </TitleContent>
              <br/>
            <TagList>
              {p.tags.map((tag, i) => (
                <Tag key = {i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={p.source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    <br/>
    </GridContainer>
  </Section>
);

export default Projects;