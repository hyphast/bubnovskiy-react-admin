import React from 'react';
import { List, Datagrid, TextField, EmailField, TextInput } from 'react-admin';

const postFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];

export const UserList = props => (
    <List 
        title="Клиенты"
        filters={postFilters}
        sort={{ field: "firstName", order: "ASC" }}
        {...props}
    >
        <Datagrid rowClick="edit">
            <TextField source="firstName" label='Имя' />
            <TextField source="lastName" label='Фамилия' />
            <TextField source="gender" label='Пол' />
            <EmailField source="email"  label='Email' />
            <TextField source="phoneNumber" label='Телефон' />
            {/* <TextField source="isActivated" /> */}
        </Datagrid>
    </List>
);