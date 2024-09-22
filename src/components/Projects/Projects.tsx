import React from 'react';
import Image from "next/image"
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
// import {SchoolSys} from '../assets/SchoolManagementSystem.png'

const projectDemos = [{
        title: "project 1",
        image: <Image src=""  width={402} height={288}/>,
        tech: "Spring Boot, HTML, CSS, PostgreSQL, Spring Security"
      },
    {
        title: "project 2",
        description: "This is a really really long description about this project"
      },
    {
        title: "project 3",
        description: "This is a really really long description about this project"
      },
    {
        title: "project 4",
        description: "This is a really really long description about this project"
      }]

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projectDemos.map((project)=>(
        <div>
          {project.title}
          <br/> 
          {project.image}
          <br/>
          {project.tech}
        </div>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;