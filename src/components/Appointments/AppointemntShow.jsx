import React from 'react';
import {
  NumberField,
  TextField,
  Show,
  SimpleShowLayout,
  DateField,
  ArrayField,
  Datagrid,
  ReferenceField, FunctionField, TopToolbar, ListButton, ShowButton, SingleFieldList, ReferenceArrayField,
} from 'react-admin';
import {format} from 'date-fns';
import {ru} from 'date-fns/locale';
import {CustomDateField} from '../fields/CustomDateField/CustomDateField';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

const PostEditActions = ({basePath, data, resource}) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Назад" icon={<ChevronLeft/>}/>
  </TopToolbar>
);

export const AppointmentShow = props => (
  <Show
    title="Запись"
    actions={<PostEditActions/>}
    {...props}
  >
    <SimpleShowLayout>
      <CustomDateField source="date" label="Дата"/>
      <ArrayField source="appointments" label="Расписание на этот день">
        <Datagrid>
          <FunctionField label="Время" render={record => format(new Date(record['time']), 'HH:mm', {locale: ru})}/>
          <NumberField source="numberPatients" label="Количество пациентов"/>
          <ArrayField source="patients" label="Пациенты">
            <SingleFieldList>
              <ReferenceField reference="users" source="patientId" link='show'>
                <TextField source="firstName"/>
              </ReferenceField>
            </SingleFieldList>
          </ArrayField>
          {/*<ArrayField source="patients" label="Номер телефона">*/}
          {/*  <SingleFieldList>*/}
          {/*    <ReferenceField label="Номер телефона" source='patientId' reference="users">*/}
          {/*      <TextField source="phoneNumber" />*/}
          {/*    </ReferenceField>*/}
          {/*  </SingleFieldList>*/}
          {/*</ArrayField>*/}
        </Datagrid>
      </ArrayField>
      <NumberField source="numberAllPatients" label="Общее количество пациентов"/>
    </SimpleShowLayout>
  </Show>
);