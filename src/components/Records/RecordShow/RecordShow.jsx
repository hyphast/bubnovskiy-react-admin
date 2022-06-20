import React from 'react';
import {ArrayField, EditButton, ListButton, Show, SimpleShowLayout, TopToolbar,} from 'react-admin';
import {BackButton} from '../../common/BackButtonAction/BackButtonAction';

const UserShowActions = ({basepath, data, resource}) => (
  <TopToolbar>
    <BackButton>НАЗАД</BackButton>
    <ListButton basepath={basepath} label="К списку" />
    <EditButton basepath={basepath} record={data}/>
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
