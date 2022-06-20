import React from 'react';
import {
  ArrayInput,
  AutocompleteInput,
  AutocompleteArrayInput,
  BooleanInput,
  Edit,
  ReferenceInput,
  ReferenceArrayInput,
  SelectInput,
  SimpleForm,
  Form,
  SimpleFormIterator,
  useRecordContext,
  TabbedForm, useCreate, useCreateSuggestionContext,
} from 'react-admin';
import {Button, Dialog, DialogActions, DialogContent, TextField, Typography} from '@mui/material'
import {CustomDateField} from '../../fields/CustomDateField/CustomDateField';
import {format} from 'date-fns';
import {ru} from 'date-fns/locale'
import {AppEditActions} from './AppEditActions';
import {MaxPatientsNumberInput} from './MaxPatientsNumberInput';
import {TimeInput} from '../../common/TimeInput/TimeInput';
import CustomImageField from '../../fields/CustomImageField';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Aside = () => {
  const record = useRecordContext()
  return <div style={{width: 200, margin: '1em'}}>
    <Typography variant="h6">Измение записи</Typography>
    {record && (
      <>
        <Typography variant="body2">
          {format(new Date(record.date), 'd MMMM yyyy', {locale: ru})}
        </Typography>
        <Typography variant="body2">
          Количество пациентов: {record.numberAllPatients}
        </Typography>
      </>
    )}
  </div>
}

const OptionRenderer = choice => (
    <span style={{position: 'relative'}}>
      <img src={`${process.env.REACT_APP_API_URL}/${choice.photoUrl}`}
           alt='photo url'
           style={{ width: '20px', height: '20px', borderRadius: '50%', marginRight: '3px', position: 'relative', top: '-28'}}
      />
      {choice.lastName} {choice.firstName} {choice.patronymic} +7{choice.phoneNumber}
    </span>
)

const inputText = choice => `${choice.lastName} ${choice.firstName} ${choice.patronymic}`;

// const CreateCategory = () => {
//   const { filter, onCancel, onCreate } = useCreateSuggestionContext();
//   const [value, setValue] = React.useState(filter || '');
//   const [create] = useCreate();
//
//   const handleSubmit = event => {
//     event.preventDefault();
//     create(
//       'categories',
//       {
//         data: {
//           title: value,
//         },
//       },
//       {
//         onSuccess: ({ data }) => {
//           setValue('');
//           onCreate(data);
//         },
//       }
//     );
//   };
//
//   return (
//     <Dialog open onClose={onCancel}>
//       <form onSubmit={handleSubmit}>
//         <DialogContent>
//           <TextField
//             label="New category name"
//             value={value}
//             onChange={event => setValue(event.target.value)}
//             autoFocus
//           />
//           <TextField
//             label="New category name"
//             value={value}
//             onChange={event => setValue(event.target.value)}
//             autoFocus
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button type="submit">Save</Button>
//           <Button onClick={onCancel}>Cancel</Button>
//         </DialogActions>
//       </form>
//     </Dialog>
//   );
// };

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
    <SimpleForm className="appointmentEdit">
      <CustomDateField source="date" label="Дата"/>
      <ArrayInput source="appointments" label="Расписание на этот день">
        <SimpleFormIterator getItemLabel={(index) => <b>{ index + 1 }</b>}>
          <TimeInput source="time"
                     label="Время"
                     options={{
                       ampm: false,
                       okLabel: 'Ок',
                       cancelLabel: 'Отмена',
                     }}
          />

          <MaxPatientsNumberInput source="maxNumberPatients"/>
          {/*<NumberInput min={0} max={12} initialValue={12} source="maxNumberPatients" label='Максимальное кол-во пациентов'/>*/}
          <ArrayInput source="patients" label="">
            <SimpleFormIterator disableReordering>
              {/*<ReferenceInput*/}
              {/*  source="record.userId"*/}
              {/*  reference="users"*/}
              {/*  label="[Фамилия] [Имя] [Отчество] [Номер телефона без +7]"*/}
              {/*  fullWidth*/}
              {/*>*/}
              {/*  <AutocompleteInput*/}
              {/*    matchSuggestion={(filterValue, suggestion) => true}*/}
              {/*    optionText={<OptionRenderer/>}*/}
              {/*    inputText={inputText}*/}
              {/*    options={{fullWidth: true}}*/}
              {/*    emptyText="Не выбран"*/}
              {/*    suggestionLimit={16}*/}
              {/*/>*/}
              {/*</ReferenceInput>*/}
              <ReferenceInput
                label="[Фамилия] [Имя] [Отчество] [Номер телефона без +7]"
                source="record.userId"
                reference="users"
              >
                <AutocompleteInput
                  label="Пациент"
                  matchSuggestion={(filterValue, suggestion) => true}
                  optionText={OptionRenderer}
                  inputText={inputText}
                  suggestionLimit={3}
                  emptyText="Не выбран"
                  // create={<CreateCategory />}
                  fullWidth
                />
              </ReferenceInput>
              {/*<div style={{display: 'flex'}}>*/}
              <SelectInput source="record.appointmentType"
                           optionValue="id"
                           label="Тип услуги"
                           defaultValue="Лечебные занятия"
                           choices={[
                             {id: 'Лечебные занятия', name: 'Лечебные занятия'},
                             {id: 'Физкультурно-оздоровительные занятия', name: 'Физкультурно-оздоровительные занятия'},
                           ]}
                           fullWidth
              />
              {/*<SelectInput source="record.instructor"*/}
              {/*             optionValue="id"*/}
              {/*             label="Инструктор"*/}
              {/*             choices={[*/}
              {/*               {id: 'Петров Петр', name: 'Петров Петр'},*/}
              {/*               {id: 'Петров Петр', name: 'Петров Петр'},*/}
              {/*             ]}*/}
              {/*             fullWidth*/}
              {/*/>*/}
              {/*<BooleanInput label="Занятие пройдено" source="success" options={{ checkedIcon: <CheckCircleIcon /> }}/>*/}
              {/*</div>*/}
            </SimpleFormIterator>
          </ArrayInput>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
};
