import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiSololearn } from "react-icons/si";


import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
    <Container>
      <Div1>
        <Link legacyBehavior href="/">
        <a style={{display: "flex", alignItems:"center", color:"white", marginBottom:"20px"}}>
          <SiSololearn size="2.5rem" style={{display:'flex',
            marginRight:'14px'
          }}/>
          <br/>
           <Span
               style={{fontSize:"2.7rem",}}
               className='font-bold'>
               Abenezer.</Span>
        </a>
        </Link>
      </Div1>
      <Div2 className="flex ml:auto">
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
                <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
                <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/calmHeaven">
        <AiFillGithub size="3rem" />  
        </SocialIcons>
              <SocialIcons href="www.linkedin.com/in/agt700">
        <AiFillLinkedin size="3rem" />  
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
