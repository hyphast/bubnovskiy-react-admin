import React from 'react'
import { useRecordContext } from 'react-admin'
import {Avatar} from '@material-ui/core'

const AvatarField = ({ source }) => {
  const record = useRecordContext()

  return record ? (
      <Avatar alt="B" src="/static/images/avatar/1.jpg" />
  ) : null
}

export default AvatarField