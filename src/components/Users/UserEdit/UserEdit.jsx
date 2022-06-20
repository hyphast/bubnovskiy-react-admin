import React from 'react';
import {Edit, SaveButton, SimpleForm, TextInput} from 'react-admin';
import {Toolbar} from '@mui/material';

const UserEditToolbar = props => (
  <Toolbar {...props} >
      <SaveButton />
  </Toolbar>
);

export const UserEdit = props => (
    <Edit 
        title="Детальная информация"
        {...props}
    >
        <SimpleForm toolbar={<UserEditToolbar/>}>
            <TextInput source="firstName" label='Имя'/>
            <TextInput source="lastName" label='Фамилия'/>
            <TextInput source="email" label='Email'/>
            <TextInput source="gender" label='Пол'/>
            <TextInput source="phoneNumber" label='Номер телефона'/>
        </SimpleForm>
    </Edit>
);
