import React from 'react';
import {
  ArrayField,
  Datagrid,
  FunctionField,
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  SingleFieldList,
} from 'react-admin';
import {format} from 'date-fns';
import {ru} from 'date-fns/locale';
import {CustomDateField} from '../../fields/CustomDateField/CustomDateField';
import {AppShowActions} from './AppShowActions';
import userImage from '../../../assets/images/user.png';
import AppointmentShowStyles from './AppointmentShow.module.scss'
import CustomImageField from '../../fields/CustomImageField';

const PatientInfo = ({source, label}) => {
  return (
  <ArrayField source={source} label={label}>
    <SingleFieldList style={{display: 'flex', flexDirection: 'column'}}>
      <ReferenceField reference="users" source="record.userId" link='show'>
        <div className={AppointmentShowStyles.userInfo}>
          {/*<ImageField source="photoUrl" label="Фото" />*/}
          <FunctionField label="Фото" render={
            record => !record.photoUrl.length
              ?
              <img src={userImage} alt="img"/>
              :
              <CustomImageField source="photoUrl" label="Фото"/>
          } />
          <FunctionField className={AppointmentShowStyles.userName}
                         label="Имя"
                         render={record => `${record.lastName} ${record.firstName} ${record.patronymic}`}
                         // render={record => console.log(record)}
          />
        </div>
      </ReferenceField>
    </SingleFieldList>
  </ArrayField>
  )
}

export const AppointmentShow = props => (
  <Show
    title="Запись"
    actions={<AppShowActions/>}
    {...props}
  >
    <SimpleShowLayout>
      <CustomDateField source="date" label="Дата"/>
      <ArrayField source="appointments" label="Расписание на этот день">
        <Datagrid>
          <FunctionField label="Время" render={record => format(new Date(record['time']), 'HH:mm', {locale: ru})}/>
          <FunctionField label="Количество пациентов" render={record => record.patients.length} />
          <PatientInfo source={'treatment'} label={'Лечебные занятия'}/>
          <PatientInfo source={'physicalTraining'} label={'Физкультурно-оздоровительные занятия'}/>
        </Datagrid>
      </ArrayField>
      <NumberField source="numberAllPatients" label="Общее количество пациентов"/>
    </SimpleShowLayout>
  </Show>
);
