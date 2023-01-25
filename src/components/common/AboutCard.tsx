import React from 'react';
import { IWorkWithField } from '../../pages/types';
import { Avatar, Box, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material";
import Brightness1Icon from '@mui/icons-material/Brightness1';

export const AboutCard: React.FC<IWorkWithField> = ({ label, image, listItems }) => {
  return (
    <Paper
      sx={{ display: 'flex', p: 3, gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
      <Avatar alt="user" src={image} sx={{ width: '50%', height: '50%' }} />
      <Box>
        <Typography variant="h4">{label}</Typography>
        <List>
          {listItems.map((item, index) => (
            <ListItem>
              <ListItemIcon>
                <Brightness1Icon />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  );
};
