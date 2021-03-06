import React from 'react';
import {
  EditButton,
  EmailField,
  FunctionField,
  ListButton,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from 'react-admin';
import {BackButton} from '../../common/BackButtonAction/BackButtonAction';
import CustomImageField from '../../fields/CustomImageField';
import UserShowStyles from './UserShow.module.scss'

const UserShowActions = ({basepath, data, resource}) => (
  <TopToolbar>
    <BackButton>НАЗАД</BackButton>
    <ListButton basepath={basepath} label="К списку"/>
    {/*<EditButton basepath={basepath} record={data}/>*/}
  </TopToolbar>
);

export const UserShow = props => (
  <Show
    actions={<UserShowActions/>}
    {...props}
  >
    <SimpleShowLayout>
      <CustomImageField className={UserShowStyles.userPhoto} source="photoUrl" label="Фото"/>
      <TextField source="lastName" label="Фамилия"/>
      <TextField source="firstName" label="Имя"/>
      <TextField source="patronymic" label="Отчество"/>
      <FunctionField label="Пол" render={record => record.male ? 'Мужчина' : 'Женщина'}/>
      <FunctionField label="Номер телефона" render={record => '+7' + record.phoneNumber}/>
      <EmailField source="email" label="Email"/>
      <FunctionField label="Аккаунт акктивирован" render={record => record.isActivated ? 'Да' : 'Нет'}/>
    </SimpleShowLayout>
  </Show>
);
