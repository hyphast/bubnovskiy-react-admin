import React from 'react';
import {ArrayField, ResourceContextProvider, SingleFieldList, ChipField} from 'react-admin';
import {AppointmentPatients} from '../components/Appointments/AppoitnemntPatients/AppointmentPatients';

const Expand = () => {
  return (
    <AppointmentPatients source='appointments'/>
  );
};

export default Expand;