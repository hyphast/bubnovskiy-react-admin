import React from 'react';
import {ListButton, TopToolbar, EditButton} from 'react-admin';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import {BackButton} from '../../common/BackButtonAction/BackButtonAction';

export const AppShowActions = ({basepath, data, resource}) => (
  <TopToolbar>
    <BackButton>НАЗАД</BackButton>
    <ListButton basepath={basepath} label="К списку" />
    <EditButton basepath={basepath} record={data}/>
  </TopToolbar>
);
