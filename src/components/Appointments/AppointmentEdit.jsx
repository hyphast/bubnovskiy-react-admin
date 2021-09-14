import React from 'react';
import {Edit, SimpleForm, TextInput, DateInput, ArrayInput, SimpleFormIterator} from 'react-admin';

export const AppointmentEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <DateInput source="date" />
      <ArrayInput source="appointments"><SimpleFormIterator><DateInput source="time" />
        <TextInput source="patients" />
        <DateInput source="numberPatients" /></SimpleFormIterator></ArrayInput>
      <DateInput source="numberAllPatients" />
    </SimpleForm>
  </Edit>
);