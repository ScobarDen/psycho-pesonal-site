import React from 'react';
import { Box, Typography } from '@mui/material';
import { IScrollProps } from './types';

export const ScrollContentBox: React.FC<IScrollProps> = ({ aboutContent }) => {
  return (
    <>
      {aboutContent.map((content) => {
        const Component = content.component;
        return (
          <Box key={content.id} id={content.id} sx={{ p: 3 }}>
            <Typography variant="h3" sx={{ marginBottom: 3 }}>
              {content.content}
            </Typography>
            <Component />
          </Box>
        );
      })}
    </>
  );
};
