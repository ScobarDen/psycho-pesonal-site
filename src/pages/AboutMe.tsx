import React from 'react';
import { aboutMeContent, workWithArray } from '../info';
import { AboutCard } from '../components/common/AboutCard';
import { Box, Typography } from '@mui/material';
import { ScrollNavMenu } from '../components/common/ScrollNavMenu';
import { ScrollContentBox } from '../components/common/ScrollContentBox';

export const AboutMe: React.FC = () => {
  return (
    <>
      <ScrollNavMenu aboutContent={aboutMeContent} />
      <ScrollContentBox aboutContent={aboutMeContent} />
    </>
  );
};
