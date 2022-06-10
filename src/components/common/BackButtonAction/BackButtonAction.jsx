import React from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export const BackButton = ({children, ...props }) => {
  const navigate = useNavigate();
  return <Button {...props} onClick={() => navigate(-1)}>
    {children}
  </Button>
}
