import React from 'react';
import {Edit, SaveButton, SimpleForm, TextInput} from 'react-admin';
import {Toolbar} from '@material-ui/core';

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
            <TextInput source="id" disabled/>
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="email" />
            <TextInput source="gender" />
            <TextInput source="phoneNumber" />
            <TextInput source="isActivated" disabled/>
        </SimpleForm>
    </Edit>
);