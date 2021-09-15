import React from 'react';
import {useRecordContext} from 'react-admin';
import {makeStyles} from '@material-ui/core/styles';
import {format} from 'date-fns'
import {ru} from 'date-fns/locale'

const useStyles = makeStyles({
  date: {
    fontWeight: '700',
    fontSize: '0.95rem',
  },
  day: {
    fontSize: '0.95rem',
    fontStyle: 'italic',
  }
});

export const CustomDateField = ({source}) => {
  const record = useRecordContext();

  const classes = useStyles();
  return record ? (
    <>
      <span className={classes.date}>{format(new Date(record[source]), 'd MMMM yyyy ', {locale: ru})}</span>
      <span className={classes.day}>{format(new Date(record[source]), 'eeee', {locale: ru})}</span>
    </>
  ) : null;
}