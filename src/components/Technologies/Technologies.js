import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked in a range of technologies in the web development world. From backend to frontend.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML5 <br /> CSS3 <br /> JavaScript <br /> React <br /> Api Design
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js <br /> Express.js <br /> MySQL <br /> MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
