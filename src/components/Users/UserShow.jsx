import React from 'react';
import {EmailField, Show, SimpleShowLayout, TextField} from 'react-admin';

export const UserShow = props => (
  <Show {...props}>
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