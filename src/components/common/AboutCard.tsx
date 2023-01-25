import React from 'react';
import { IWorkWithField } from '../../pages/types';
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import Brightness1Icon from '@mui/icons-material/Brightness1';

export const AboutCard: React.FC<IWorkWithField> = ({ label, image, listItems, index }) => {
  return (
    <Paper
      sx={{
        display: 'flex',
        p: 3,
        gap: 5,
        flexDirection: { xs: 'column', md: `row${index % 2 ? '-reverse' : ''}` },
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 3,
      }}>
      <Avatar alt="user" src={image} sx={{ width: '40%', height: '40%' }} />
      <Box>
        <Typography variant="h4">{label}</Typography>
        <List>
          {listItems.map((item, i) => (
            <ListItem key={i}>
              <ListItemIcon sx={{ minWidth: '2rem' }}>
                <Brightness1Icon sx={{ fontSize: '0.5rem' }} />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  );
};
