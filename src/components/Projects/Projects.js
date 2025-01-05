import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList,Img} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Image from 'next/image';


const Projects = () => (
  <Section  nopadding
   id='projects'>
    <SectionDivider />
    <SectionTitle main>
      Projects</SectionTitle>
    <GridContainer className="rounded-3xl">
      {projects.map((p,i)=>(
        <BlogCard key={i} >
          <Img src={p.image}
                width={100+"%"}
                height={300+"px"}
                alt={p.title}
               className="rounded-3xl"
          />
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
                {p.visit === null ? (
                    <ExternalLinks href={p.source}>Source</ExternalLinks>
                ) : (
                    <ExternalLinks href={p.visit}>Visit</ExternalLinks>
                )}
            </UtilityList>
        </BlogCard>
      ))}
    <br/>
    </GridContainer>
  </Section>
);

export default Projects;