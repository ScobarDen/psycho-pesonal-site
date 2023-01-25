import React from 'react';
import { workWithArray } from '../info';
import { AboutCard } from '../components/common/AboutCard';
import { Box, Typography } from "@mui/material";

export const AboutMe: React.FC = () => {
  return (
    <>
      <Box sx={{p: 3}}>
        <Typography variant="h3" sx={{marginBottom: 3}}>С чем я работаю</Typography>
        {workWithArray.map((workWithArrayItem, index) => (
          <AboutCard key={workWithArrayItem.label} {...workWithArrayItem} />
        ))}
      </Box>
    </>
  );
};
