import React from 'react';
import { Box, Button } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll/modules';
import { IScrollProps } from './types';

export const ScrollNavMenu: React.FC<IScrollProps> = ({ aboutContent }) => {
  return (
    <Box sx={{ marginTop: 3, marginX: 3 }}>
      {aboutContent.map((content) => (
        <ScrollLink key={content.id} to={content.id} smooth={true} duration={500}>
          <Button color="inherit">{content.content}</Button> /
        </ScrollLink>
      ))}
    </Box>
  );
};
