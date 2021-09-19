import React from 'react';
import {List, Datagrid, TextField, EmailField, TextInput, downloadCSV, EditButton, ShowButton} from 'react-admin';
import jsonExport from 'jsonexport/dist';

const postFilters = [
    <TextInput label="Поиск" source="q" alwaysOn />,
    <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];

const exporter = users => {
    const BOM = '\uFEFF'
    const usersForExport = users.map(user => {
        const { _id, id, activationLink, password, __v, ...userForExport } = user; // omit id, activationLink, password, __v
        // userForExport['Имя'] = user.author.name; // add a field
        return userForExport;
    });
    jsonExport(usersForExport, {
        headers: ['firstName', 'lastName', 'gender', 'phoneNumber', 'isActivated', 'email'] // order fields in the export
    }, (err, csv) => {
        downloadCSV(`${BOM} ${csv}`, 'Клиенты ООО \'Здоровье\''); // download file
        if (err) {
            console.log('Error trying to export list')
        }
    });
};

export const UserList = props => (
    <List 
        title="Клиенты"
        filters={postFilters}
        exporter={exporter}
        // bulkActionButtons={false}
        {...props}
    >
        <Datagrid rowClick="show">
            <TextField source="firstName" label='Имя' />
            <TextField source="lastName" label='Фамилия' />
            <TextField source="gender" label='Пол' />
            <EmailField source="email"  label='Email' />
            <TextField source="phoneNumber" label='Телефон' />
            {/* <TextField source="isActivated" /> */}
            <EditButton label='Изменить'/>
            <ShowButton label="Подробнее"/>
        </Datagrid>
    </List>
);