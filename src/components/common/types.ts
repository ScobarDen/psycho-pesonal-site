import React from 'react';

export interface IWorkWithField {
  label: string;
  image: string;
  listItems: string[];
  index: number;
}

export interface IScrollContent {
  id: string;
  content: string;
  component: React.FC<{}>;
}

export interface IScrollProps {
  aboutContent: IScrollContent[];
}
