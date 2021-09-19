import React from 'react';
import {
  EditButton,
  EmailField,
  ListButton,
  Show,
  ShowButton,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from 'react-admin';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import {BackButton} from '../common/BackButtonAction/BackButtonAction';

const UserShowActions = ({basePath, data, resource}) => (
  <TopToolbar>
    <BackButton
      // variant='outlined'
      // color='secondary'
      style={{ color: 'blue' }}
    >
      НАЗАД
    </BackButton>
    <ListButton basePath={basePath} label="К списку" icon={<ChevronLeft/>}/>
    <EditButton basePath={basePath} record={data}/>
  </TopToolbar>
);

export const UserShow = props => (
  <Show
    actions={<UserShowActions/>}
    {...props}
  >
    <SimpleShowLayout>
      <TextField source="id" label='id'/>
      <TextField source="isActivated" label='Аккаунт акктивирован'/>
      <TextField source="firstName" label='Имя'/>
      <TextField source="lastName" label='Фамилия'/>
      <EmailField source="email" label='Email'/>
      <TextField source="gender" label='Пол'/>
      <TextField source="phoneNumber" label='Номер телефона'/>
    </SimpleShowLayout>
  </Show>
);