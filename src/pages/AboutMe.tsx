import React from 'react';
import { workWithArray } from '../info';
import { AboutCard } from '../components/common/AboutCard';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

export const AboutMe: React.FC = () => {
  return (
    <>
      <Box sx={{ p: 3 }}>
        <ScrollLink to="section1" smooth={true} duration={500}>
          <Button color="inherit">C чем я работаю</Button>
        </ScrollLink>
      </Box>

      <Box id="section1" sx={{ p: 3 }}>
        <Typography variant="h3" sx={{ marginBottom: 3 }}>
          С чем я работаю
        </Typography>
        {workWithArray.map((workWithArrayItem, index) => (
          <AboutCard key={workWithArrayItem.label} {...workWithArrayItem} />
        ))}
      </Box>
    </>
  );
};
