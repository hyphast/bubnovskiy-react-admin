import React from 'react';
import {NumberInput, useRecordContext} from 'react-admin';

export const MaxPatientsNumberInput = ({source}) => {
  const record = useRecordContext();
  const num = source.split('.')[1]
  const min = record['appointments'][num] ? record['appointments'][num]['patients'].length : 0;

  return record ? (
      <NumberInput min={min} max={12} defaultValue={12} source={source} label='Максимальное кол-во пациентов' fullWidth/>
  ) : null;
}
