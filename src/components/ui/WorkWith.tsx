import React from 'react';
import { Typography } from '@mui/material';
import { workWithArray } from '../../info';
import { AboutCard } from '../common/AboutCard';

export const WorkWith: React.FC = () => {
  return (
    <>
      {workWithArray.map((workWithArrayItem, index) => (
        <AboutCard key={workWithArrayItem.label} {...workWithArrayItem} />
      ))}
    </>
  );
};
