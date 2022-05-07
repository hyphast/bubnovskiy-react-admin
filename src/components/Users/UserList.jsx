import React from 'react';
import {Datagrid, downloadCSV, EditButton, EmailField, FunctionField, List, ShowButton, TextInput} from 'react-admin';
import jsonExport from 'jsonexport/dist';
import UserListStyles from './UserList.module.scss'
import CustomImageField from '../fields/CustomImageField';

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
            <CustomImageField className={UserListStyles.photo} source="photoUrl" label="Фото"/>
            <FunctionField label="ФИО" render={record => `${record.lastName} ${record.firstName} ${record.patronymic}`}/>
            <FunctionField label="Пол" render={record => record.gender === 'male' ? 'Мужчина' : 'Женщина'}/>
            <EmailField source='email'  label='Email' />
            <FunctionField label="Телефон" render={record => '+7' + record.phoneNumber}/>
            <EditButton label='Изменить'/>
            <ShowButton label='Подробнее'/>
        </Datagrid>
    </List>
);
