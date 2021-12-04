import React from 'react';
import {
  EditButton,
  EmailField,
  FunctionField,
  ImageField,
  ListButton,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from 'react-admin';
import {BackButton} from '../common/BackButtonAction/BackButtonAction';

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

export const UserShow = props => (
  <Show
    actions={<UserShowActions/>}
    {...props}
  >
    <SimpleShowLayout>
      <ImageField source="photoUrl" label="Фото" />
      <TextField source="firstName" label='Имя'/>
      <TextField source="lastName" label='Фамилия'/>
      <TextField source="patronymic" label='Отчество'/>
      <FunctionField label='Пол' render={record => record.male ? 'Мужчина' : 'Женщина'} />
      <FunctionField label='Номер телефона' render={record => '+7' + record.phoneNumber } />
      <EmailField source="email" label='Email'/>
      <FunctionField label='Аккаунт акктивирован' render={record => record.isActivated ? 'Да' : 'Нет'} />
    </SimpleShowLayout>
  </Show>
);