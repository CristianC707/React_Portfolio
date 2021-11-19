import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, NavLink1, NavLink2, NavLink3, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20px'}}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink1>Projects</NavLink1>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink2>Technologies</NavLink2>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink3>About</NavLink3>
        </Link>
      </li>
      <li>      
          <NavLink href='https://1drv.ms/w/s!AmRrLJX2JnEHsS1sP-qyqm-5oGjs?e=zlHlT3'>Resume</NavLink>       
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/CristianC707">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/cristian-cuevas-1147a1189/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/cristiancuevas707/">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
