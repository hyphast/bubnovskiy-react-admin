import React from 'react'
import {useRecordContext} from 'react-admin'

const CustomImageField = ({ source, ...rest }) => {
  const record = useRecordContext()

  const API_URL = process.env.REACT_APP_API_URL
  const url = `${API_URL}/${record.photoUrl}`

  return record.photoUrl ? (
    <div className={rest?.className}>
      <img src={url} />
    </div>
  ) : null
}

export default CustomImageField