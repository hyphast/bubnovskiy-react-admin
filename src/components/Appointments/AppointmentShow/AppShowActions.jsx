import React from 'react';
import {ListButton, TopToolbar, EditButton} from 'react-admin';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import {BackButton} from '../../common/BackButtonAction/BackButtonAction';

export const AppShowActions = ({basePath, data, resource}) => (
  <TopToolbar>
    <BackButton
      style={{ color: '#3f51b5', position: 'relative', top: '-4px' }}
      // icon={<ChevronLeft/>}
    >
      НАЗАД
    </BackButton>
    <ListButton basePath={basePath} label="К списку" />
    <EditButton basePath={basePath} record={data}/>
  </TopToolbar>
);
