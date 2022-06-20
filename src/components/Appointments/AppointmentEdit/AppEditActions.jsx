import React from 'react';
import {EditButton, ListButton, ShowButton, TopToolbar} from 'react-admin';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import {BackButton} from '../../common/BackButtonAction/BackButtonAction';

export const AppEditActions = ({basepath, data, resource}) => (
  <TopToolbar>
    <BackButton>НАЗАД</BackButton>
    <ListButton basepath={basepath} label="К списку" />
    <ShowButton basepath={basepath} record={data}/>
  </TopToolbar>
);
