import React from 'react';
import {NumberInput, useRecordContext} from 'react-admin';

export const MaxPatientsNumberInput = ({source}) => {
  const record = useRecordContext();
  const num = source.split('.')[0].slice(-2, -1);
  debugger
  const min = record['appointments'][num]['patients'].length;

  return record ? (
      <NumberInput min={min} max={12} initialValue={12} source={source} label='Максимальное кол-во пациентов' fullWidth/>
  ) : null;
}