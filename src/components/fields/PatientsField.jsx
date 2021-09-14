import React from 'react';
import { useRecordContext } from 'react-admin';
import {Avatar} from '@material-ui/core';

const PatientsField = ({ source }) => {
  const record = useRecordContext();

  return record ? (
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  ) : null;
}

export default PatientsField;