import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

export const BackButton = ({children, ...props }) => {
  const {goBack} = useHistory();
  return <Button {...props} onClick={goBack}>
    {children}
  </Button>
}