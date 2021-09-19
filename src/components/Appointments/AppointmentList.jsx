import React from 'react';
import {Datagrid, downloadCSV, EditButton, ExportButton,
        List, NumberField, ShowButton, TopToolbar, BulkUpdateButton } from 'react-admin';
import {CustomDateField} from '../fields/CustomDateField/CustomDateField';
import {AppointmentPatients} from './AppoitnemntPatients/AppointmentPatients';
import jsonExport from 'jsonexport/dist';
import { Box } from '@material-ui/core';
import { VisibilityOff } from '@material-ui/icons';
// import Expand from '../../lists/Test';

const exporter = appointments => {
  const BOM = '\uFEFF'
  const appointmentsForExport = appointments.map(app => {
    const { _id, id, __v, ...appForExport } = app; // omit fields
    // userForExport['Имя'] = user.author.name; // add a field
    return appForExport;
  });
  jsonExport(appointmentsForExport, {
    headers: ['date', 'numberAllPatients', 'patients'] // order fields in the export
  }, (err, csv) => {
    downloadCSV(`${BOM} ${csv}`, 'Записи'); // download file
    if (err) {
      console.log('Error trying to export list')
    }
  });
};

const ListActions = () => (
  <Box width="100%">
    <TopToolbar>
      <ExportButton />
    </TopToolbar>
  </Box>
);

const views = { views: 0 };

const ResetViewsButton = (props) => (
  <BulkUpdateButton
    {...props}
    label="Reset Views"
    data={views}
    icon={<VisibilityOff/>}
  />
);

const AppointmentsBulkActionButtons = props => (
  <>
    <ResetViewsButton label="Reset Views" {...props} />
  </>
);

export const AppointmentList = props => (
  <List
    title="Записи"
    sort={{ field: 'date', order: 'ASC' }}
    exporter={exporter}
    actions={<ListActions/>}
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
      <NumberField source="numberAllPatients" label="Количество пациентов"/>
      <EditButton label='Изменить'/>
      <ShowButton label="Подробнее"/>
    </Datagrid>
  </List>
);