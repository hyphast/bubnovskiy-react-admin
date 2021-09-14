import React from 'react';
import {useRecordContext} from 'react-admin';
import {makeStyles} from '@material-ui/core/styles';
import {format} from 'date-fns';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Accordion, AccordionDetails, AccordionSummary, Avatar, Chip, Typography} from '@material-ui/core';

const useStyles = makeStyles({
  date: {
    fontWeight: '700',
    fontSize: '1rem',
  },
  day: {
    fontSize: '0.95rem',
    fontStyle: 'italic',
  },
  times: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  avatar: {
    backgroundColor: '#b5f5c6'
  }
});

export const AppointmentPatients = ({source}) => {
  const record = useRecordContext();

  console.log(record[source]);
  const classes = useStyles();
  return record ? (
    <>
      {record[source].map(item =>
        <div key={item.time}>
          {item.numberPatients !== 0 ?
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{format(new Date(item.time), 'H:mm')}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={classes.times}>
                    {item.patients.map(p =>
                      <Chip
                        key={p._id}
                        avatar={<Avatar className={classes.avatar} alt="Patient"/>}
                        label={p.patientName}
                        variant="outlined"
                      />)}
                  </div>
                </AccordionDetails>
              </Accordion>
            : null
          }
        </div>
      )}
    </>
  ) : null
}