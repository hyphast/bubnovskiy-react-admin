import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    TextInput,
    downloadCSV,
    EditButton,
    ShowButton,
    ImageField, FunctionField
} from 'react-admin';
import jsonExport from 'jsonexport/dist';
import UserListStyles from './UserList.module.scss'
import AppointmentShowStyles from '../Appointments/AppointmentShow/AppointmentShow.module.scss';

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
        <Datagrid rowClick='show'>
            <ImageField className={UserListStyles.userPhoto} source='photoUrl' label='Фото' />
            <TextField source='firstName' label='Имя' />
            <TextField source='lastName' label='Фамилия' />
            <FunctionField label="Пол" render={record => record.gender === 'male' ? 'Мужчина' : 'Женщина'}/>
            <EmailField source='email'  label='Email' />
            <FunctionField label="Телефон" render={record => '+7' + record.phoneNumber}/>
            <EditButton label='Изменить'/>
            <ShowButton label='Подробнее'/>
        </Datagrid>
    </List>
);