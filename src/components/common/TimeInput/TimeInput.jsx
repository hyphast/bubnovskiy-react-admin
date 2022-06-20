import React, { useCallback, useEffect } from 'react'
import {useInput, required} from 'react-admin'
import TextField from '@mui/material/TextField'
import {LocalizationProvider, TimePicker} from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'

export const TimeInput = (props) => {
  const { options, ...rest } = props
  const {
    field,
    fieldState: {isTouched, invalid, error},
    formState: {isSubmitted},
    isRequired
  } = useInput(props)

  const handleChange = useCallback((value, keyboardInputValue) => {
    console.log('val', value)
    Date.parse(value) ? field.onChange(value.toISOString()) : field.onChange(null)
  }, [])


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        { ...field }
        {...options}
        label={ props.label }
        error={ (isTouched || isSubmitted) && invalid }
        helperText={ (isTouched || isSubmitted) && invalid ? error : '' }
        className={ props.className }
        disableMaskedInput={true}
        value={ field.value ? new Date(field.value) : null }
        onChange={ date => handleChange(date) }
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};
