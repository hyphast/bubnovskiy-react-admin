import React from 'react'
import Button, { ButtonProps } from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import styles from './BackButtonActionStyles.module.scss'

const CustomBackButton = styled(Button)({
  padding: '4px 5px',
  lineHeight: '1.5',
  fontSize: '0.87rem',
  letterSpacing: '0.02857em',
  borderRadius: '4px'
})

export const BackButton = ({children, ...props }) => {
  const navigate = useNavigate();
  return (
    <CustomBackButton variant='text'
                      startIcon={<ArrowBackIosNewIcon />}
                      onClick={() => navigate(-1)}
  >
    {children}
  </CustomBackButton>
  )
}
