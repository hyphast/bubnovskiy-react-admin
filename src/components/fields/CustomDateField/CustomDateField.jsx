import React from 'react'
import {useRecordContext} from 'react-admin'
import { styled } from '@mui/material/styles'
import {format} from 'date-fns'
import {ru} from 'date-fns/locale'

const DateField = styled('span')(({ theme }) => ({
  fontWeight: '700',
  fontSize: '0.95rem',
}))

const TimeField = styled('span')(({ theme }) => ({
  fontSize: '0.95rem',
  fontStyle: 'italic',
}))

export const CustomDateField = ({source}) => {
  const record = useRecordContext();

  return record ? (
    <>
      <DateField>{format(new Date(record[source]), 'd MMMM yyyy ', {locale: ru})}</DateField>
      <TimeField>{format(new Date(record[source]), 'eeee', {locale: ru})}</TimeField>
    </>
  ) : null;
}
