import React from 'react'
import {ImageField, useRecordContext} from 'react-admin'


const CustomImageField = ({ source }) => {
  const record = useRecordContext()

  const API_URL = 'http:localhost:5000'
  const url = `${API_URL}/${record.photoUrl}`
  console.log('url', url)

  return <img src={url} label='Фото'/>

}

export default CustomImageField