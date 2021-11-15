import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2019, text: 'Graduated Highschool'},
  { number: 2021, text: 'Got Married', },
  { number: 2021, text: 'Graduated From Bootcamp', },
  { number: 2022, text: 'Became a Dad', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
          </Box> 
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
