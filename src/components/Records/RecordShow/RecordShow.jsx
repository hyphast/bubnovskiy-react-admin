import React from 'react';
import {ArrayField, EditButton, ListButton, Show, SimpleShowLayout, TopToolbar,} from 'react-admin';
import {BackButton} from '../../common/BackButtonAction/BackButtonAction';

const UserShowActions = ({basePath, data, resource}) => (
  <TopToolbar>
    <BackButton
      style={{ color: '#3f51b5', position: 'relative', top: '-4px' }}
    >
      НАЗАД
    </BackButton>
    <ListButton basePath={basePath} label="К списку" />
    <EditButton basePath={basePath} record={data}/>
  </TopToolbar>
);

export const RecordShow = props => (
  <Show
    actions={<UserShowActions/>}
    {...props}
  >
    {/*<SimpleShowLayout>*/}
    {/*  <ArrayField source="upcomingRecords" label='Текущие'/>*/}
    {/*  <ArrayField source="finishedRecords" label='Прошедшие'/>*/}
    {/*</SimpleShowLayout>*/}
  </Show>
);