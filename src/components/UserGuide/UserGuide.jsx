import React from 'react'
import { Paper, Stack, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'

export const UserGuide = () => {
  const docs = [
    {
      name: 'Cистема администратора',
      url: 'https://pomo1.notion.site/bf73cafbd2af41e887d54eef1b1c32ed'
    },
    {
      name: 'Личный кабинет',
      url: 'https://pomo1.notion.site/0e97c619c0164ebc9d71ec3a8119dd62'
    }
  ]

  return (
    <>
      <Typography sx={{ marginTop: '30px' }} variant="h6">Руководства пользователя</Typography>
      <Stack spacing={2} sx={{ marginTop: '30px' }}>
        {docs.map(item => (
          <Paper key={item.url} sx={{ padding: '25px' }} elevation={3}>
            <Typography variant="button">{item.name}</Typography>
            <Button sx={{ marginLeft: '20px' }} startIcon={<ArrowCircleRightIcon/>}>
              <a style={{ textDecoration: 'none' }} target='_blank' href={item.url}>Открыть</a>
            </Button>
          </Paper>
        ))}
      </Stack>
    </>
  )
}
