import React from 'react';
import {List, Datagrid, NumberField, DateField, ArrayField, SingleFieldList, ChipField, Edit} from 'react-admin';
import {CustomDateField} from '../fields/CustomDateField/CustomDateField';
// import Expand from '../../lists/Test';
import {AppointmentPatients} from './AppoitnemntPatients/AppointmentPatients';
import { EditButton, ShowButton  } from 'react-admin';

export const AppointmentList = props => (
  <List
    title="Записи"
    {...props}
  >
    <Datagrid rowClick="expand" expand={<AppointmentPatients source='appointments'/>}>
      <CustomDateField source="date" label="Дата"/>
      {/*<ArrayField source="appointments">*/}
      {/*  <SingleFieldList>*/}
      {/*    <ChipField source="time"/>*/}
      {/*  </SingleFieldList>*/}
      {/*</ArrayField>*/}
      {/*<ArrayField source="appointments" >*/}
      {/*  <SingleFieldList>*/}
      {/*    <NumberField source="numberPatients"/>*/}
      {/*  </SingleFieldList>*/}
      {/*</ArrayField>*/}
      {/*<PatientsField source="date" label='last'/>*/}
      <NumberField source="numberPatients" label="Количество пациентов"/>
      <EditButton label='Изменить'/>
      <ShowButton label="Подробнее"/>
    </Datagrid>
  </List>
);