import React from 'react';
import {
  ArrayInput,
  Edit,
  FunctionField,
  ListButton,
  NumberInput,
  ShowButton,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  TopToolbar,
} from 'react-admin';
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import {Typography} from '@material-ui/core';
import {CustomDateField} from '../fields/CustomDateField/CustomDateField';
import {format} from 'date-fns';
import {ru} from 'date-fns/locale'
import { TimeInput } from 'react-admin-date-inputs2';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

const PostEditActions = ({basePath, data, resource}) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Назад" icon={<ChevronLeft/>}/>
    <ShowButton basePath={basePath} record={data}/>
    {/* Add your custom actions */}
  </TopToolbar>
);

const Aside = ({record}) => (
  <div style={{width: 200, margin: '1em'}}>
    <Typography variant="h6">Изменение записи</Typography>
    {record && (
      <Typography variant="body2">
        {format(new Date(record['date']), 'd MMMM yyyy', {locale: ru})}
      </Typography>
    )}
  </div>
);

export const AppointmentEdit = (props) => (
  <Edit
    aside={<Aside/>}
    actions={<PostEditActions/>}
    title="Изменение записи"
    {...props}
  >
    <SimpleForm>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <CustomDateField source="date" label="Дата"/>
      <ArrayInput source="appointments" label='Расписание на этот день'>
        <SimpleFormIterator>
          {/*<FunctionField label="Время" render={record => format(new Date(record['time']), 'HH:mm', {locale: ru})} />*/}

            <TimeInput source="time" label="Время"
                       options=
                       {{
                         ampm: false,
                         okLabel: 'Ок',
                         cancelLabel: 'Отмена',
                       }}
                       providerOptions={{ utils: DateFnsUtils}}
            />

          <NumberInput source="numberPatients" label='Количество пациентов'/>
          <ArrayInput source="patients" label='Записи'>
            <SimpleFormIterator>
              {/*<ReferenceField label="User" source="patientId" reference="users">*/}
              {/*  <TextField source="firstName" />*/}
              {/*</ReferenceField>*/}
              {/*<TextInput source="patientId" label='id' disabled/>*/}
              <TextInput source="patientName" label='Имя'/>
            </SimpleFormIterator>
          </ArrayInput>

        </SimpleFormIterator>
      </ArrayInput>
    </MuiPickersUtilsProvider>
    </SimpleForm>
  </Edit>
);