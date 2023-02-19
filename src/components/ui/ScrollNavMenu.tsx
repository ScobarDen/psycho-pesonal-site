import React from 'react';
import { Box, Button } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll/modules';
import { aboutMeContent } from '../../info';

export const ScrollNavMenu: React.FC = () => {
  return (
    <Box sx={{ marginTop: 3, marginX: 3 }}>
      {aboutMeContent.map((content) => (
        <ScrollLink key={content.id} to={content.id} smooth={true} duration={500}>
          <Button color="inherit">{content.content}</Button> /
        </ScrollLink>
      ))}
    </Box>
  );
};
