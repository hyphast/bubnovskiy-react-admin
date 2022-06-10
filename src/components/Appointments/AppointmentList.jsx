import React from 'react';
import {Datagrid, downloadCSV, EditButton, ExportButton,
        List, NumberField, ShowButton, TopToolbar, BulkUpdateButton } from 'react-admin';
import {CustomDateField} from '../fields/CustomDateField/CustomDateField';
import {AppointmentPatients} from './AppoitnemntPatients/AppointmentPatients';
import jsonExport from 'jsonexport/dist';
import { Box } from '@mui/material';
import { VisibilityOff } from '@mui/icons-material';
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

const views = { numberAllPatients: 12 };

const AppointmentsBulkActionButtons = props => (
  <>
    <BulkUpdateButton
      {...props}
      label="Закрыть запись"
      data={views}
      icon={<VisibilityOff/>}
    />
  </>
);

const appRowStyle = (record, index) => ({
  backgroundColor: record.numberAllPatients === 12 ? 'red' : 'white',
})

export const AppointmentList = props => (
  <List
    title="Записи"
    sort={{ field: 'date', order: 'ASC' }}
    exporter={exporter}
    actions={<ListActions/>}
    bulkActionButtons={<AppointmentsBulkActionButtons />}
    rowStyle={appRowStyle}
    {...props}
  >
    <Datagrid rowClick="show"
              // expand={<AppointmentPatients source='appointments'/>}
              // isRowExpandable={row => row.numberAllPatients > 0}
    >
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
      <NumberField source="numberAllPatients" label="Общее количество пациентов"/>
      <EditButton label='Изменить'/>
      <ShowButton label="Подробнее"/>
    </Datagrid>
  </List>
);
