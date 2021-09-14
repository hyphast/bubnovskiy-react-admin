import React from 'react';
import {Edit, SimpleForm, TextInput} from 'react-admin';

export const UserEdit = props => (
    <Edit 
        title="Детальная информация"
        {...props}
    >
        <SimpleForm>
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