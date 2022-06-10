import React from 'react';
import {
  ArrayInput,
  AutocompleteInput,
  BooleanInput,
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  SimpleFormIterator,
} from 'react-admin';
import { Typography } from '@mui/material'
import {CustomDateField} from '../../fields/CustomDateField/CustomDateField';
import {format} from 'date-fns';
import {ru} from 'date-fns/locale'
// import {TimeInput} from 'react-admin-date-inputs2';
import { DateTimeInput } from 'react-admin';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {AppEditActions} from './AppEditActions';
import {MaxPatientsNumberInput} from './MaxPatientsNumberInput';
import AppointmentEditStyles from './AppointmentEdit.scss';


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

const OptionRenderer = choice =>
  `${choice.record.lastName} ${choice.record.firstName} ${choice.record.patronymic} +7${choice.record.phoneNumber}`;
const inputText = choice => `${choice.lastName} ${choice.firstName} ${choice.patronymic}`;

export const AppointmentEdit = (props) => {

  return <Edit
    aside={<Aside/>}
    actions={<AppEditActions/>}
    title="Изменение записи"
    transform={data => {
      const apps = data.appointments.map(app => {
        const {treatment, physicalTraining, ...restData} = app
        return restData
      })
      data.appointments = apps
      return data
    }}
    {...props}
  >
    <SimpleForm className='appointmentEdit'>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CustomDateField source="date" label="Дата"/>
        <ArrayInput source="appointments" label="Расписание на этот день">
          <SimpleFormIterator>
            {/*<FunctionField label="Время" render={record => format(new Date(record['time']), 'HH:mm', {locale: ru})} />*/}

            {/*<TimeInput source="time" label="Время"*/}
            {/*           options=*/}
            {/*             {{*/}
            {/*               ampm: false,*/}
            {/*               okLabel: 'Ок',*/}
            {/*               cancelLabel: 'Отмена',*/}
            {/*             }}*/}
            {/*           providerOptions={{utils: AdapterDateFns}}*/}
            {/*/>*/}
            <DateTimeInput source="time" label="Время" />

            <MaxPatientsNumberInput source="maxNumberPatients"/>
            {/*<NumberInput min={0} max={12} initialValue={12} source="maxNumberPatients" label='Максимальное кол-во пациентов'/>*/}
            <ArrayInput source="patients" label="Пациенты">
              <SimpleFormIterator>
                {/*<TextInput source="appointmentType" label='Тип' />*/}
                <ReferenceInput
                  source="record.userId"
                  reference="users"
                  label="[Фамилия] [Имя] [Отчество] [Номер телефона без +7]"
                  fullWidth
                >
                  <AutocompleteInput
                    matchSuggestion={(filterValue, suggestion) => true}
                    optionText={<OptionRenderer/>}
                    inputText={inputText}
                    options={{fullWidth: true}}
                    emptyText="Не выбран"
                    suggestionLimit={16}
                    resettable
                  />
                </ReferenceInput>
                {/*<div style={{display: 'flex'}}>*/}
                  <SelectInput source="record.appointmentType"
                               optionValue="id"
                               label="Тип услуги"
                               initialValue="Лечебные занятия"
                               choices={[
                                 {id: 'Лечебные занятия', name: 'Лечебные занятия'},
                                 {
                                   id: 'Физкультурно-оздоровительные занятия',
                                   name: 'Физкультурно-оздоровительные занятия'
                                 },
                               ]}
                  />
                  {/*<SelectInput source="record.instructor"*/}
                  {/*             optionValue="id"*/}
                  {/*             label="Инструктор"*/}
                  {/*             initialValue="Петров Петр"*/}
                  {/*             choices={[*/}
                  {/*               {id: 'Петров Петр', name: 'Петров Петр'},*/}
                  {/*               {*/}
                  {/*                 id: 'Петров Петр',*/}
                  {/*                 name: 'Петров Петр'*/}
                  {/*               },*/}
                  {/*             ]}*/}
                  {/*/>*/}
                  {/*<BooleanInput label="Успешно" source="success"/>*/}
                {/*</div>*/}
              </SimpleFormIterator>
            </ArrayInput>
          </SimpleFormIterator>
        </ArrayInput>
      </LocalizationProvider>
    </SimpleForm>
  </Edit>
};
