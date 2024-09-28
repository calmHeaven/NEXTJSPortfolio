import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="+1(431)-877-6710">+1 (431)-877-6710</LinkItem>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:abenezer4989@gmail.com">
            abenezer4989@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Continuous Learning & Continuous Improvement</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/calmHeaven">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/in/agt700">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        </SocialContainer>

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
