import React from 'react';
import {
  ArrayInput,
  AutocompleteInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  SimpleFormIterator,
  SelectInput,
} from 'react-admin';
import {Typography} from '@material-ui/core';
import {CustomDateField} from '../../fields/CustomDateField/CustomDateField';
import {format} from 'date-fns';
import {ru} from 'date-fns/locale'
import {TimeInput} from 'react-admin-date-inputs2';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import {AppEditActions} from './AppEditActions';
import {MaxPatientsNumberInput} from './MaxPatientsNumberInput';

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
  `${choice.record.firstName} ${choice.record.lastName} ${choice.record.patronymic} +7${choice.record.phoneNumber}`;
const inputText = choice => `${choice.firstName} ${choice.lastName} ${choice.patronymic}`;

export const AppointmentEdit = (props) => {

  return <Edit
    aside={<Aside/>}
    actions={<AppEditActions/>}
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
                       providerOptions={{utils: DateFnsUtils}}
            />

            <MaxPatientsNumberInput source="maxNumberPatients"/>
            {/*<NumberInput min={0} max={12} initialValue={12} source="maxNumberPatients" label='Максимальное кол-во пациентов'/>*/}
            <ArrayInput source="patients" label='Пациенты'>
              <SimpleFormIterator>
                {/*<TextInput source="appointmentType" label='Тип' />*/}
                <ReferenceInput
                  source="userId"
                  reference="users"
                  label='[Имя] [Фамилия] [Отчество] [Номер телефона без +7]'
                  fullWidth
                >
                  <AutocompleteInput
                    matchSuggestion={(filterValue, suggestion) => true}
                    optionText={<OptionRenderer />}
                    inputText={inputText}
                    options={{ fullWidth: true }}
                    emptyText='Не выбран'
                    suggestionLimit={16}
                    resettable
                  />
                </ReferenceInput>
                <SelectInput source='appointmentType'
                             //optionText='name'
                             optionValue='id'
                             label='Тип услуги'
                             initialValue='Лечебные занятия'
                             choices={[
                  { id: 'Лечебные занятия', name: 'Лечебные занятия' },
                  { id: 'Физкультурно-оздоровительные занятия', name: 'Физкультурно-оздоровительные занятия' },
                ]} />
              </SimpleFormIterator>
            </ArrayInput>
          </SimpleFormIterator>
        </ArrayInput>
      </MuiPickersUtilsProvider>
    </SimpleForm>
  </Edit>
};