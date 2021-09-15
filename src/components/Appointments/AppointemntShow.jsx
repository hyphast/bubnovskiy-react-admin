import React from 'react';
import {
  NumberField,
  TextField,
  Show,
  SimpleShowLayout,
  DateField,
  ArrayField,
  Datagrid,
  ReferenceField, FunctionField, TopToolbar, ListButton, ShowButton,
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
    title='Запись'
    actions={<PostEditActions/>}
    {...props}
  >
    <SimpleShowLayout>
      <CustomDateField source="date" label="Дата"/>
      <ArrayField source="appointments" label='Расписание на этот день'>
        <Datagrid>
          <FunctionField label="Время" render={record => format(new Date(record['time']), 'HH:mm', {locale: ru})} />
          <NumberField source="numberPatients" label='Количество пациентов'/>
          <ArrayField source="patients" label='Пациенты'>
            <Datagrid>
              <NumberField source="patientId" label='id'/>
              <TextField source="patientName" label='Имя'/>
            </Datagrid>
          </ArrayField>
        </Datagrid>
      </ArrayField>
      <NumberField source="numberAllPatients" label='Общее количество пациентов'/>
    </SimpleShowLayout>
  </Show>
);