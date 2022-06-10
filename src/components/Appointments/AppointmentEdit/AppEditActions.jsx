import React from 'react';
import {EditButton, ListButton, ShowButton, TopToolbar} from 'react-admin';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import {BackButton} from '../../common/BackButtonAction/BackButtonAction';

export const AppEditActions = ({basePath, data, resource}) => (
  <TopToolbar>
    <BackButton
      style={{ color: '#3f51b5', position: 'relative', top: '-4px' }}
      // icon={<ChevronLeft/>}
    >
      НАЗАД
    </BackButton>
    <ListButton basePath={basePath} label="К списку" />
    <ShowButton basePath={basePath} record={data}/>
  </TopToolbar>
);
