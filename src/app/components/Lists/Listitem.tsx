import { List } from 'antd-mobile'
import React from 'react'

type datalistsProps = {
  name: string
  date: string
}

const Listitem = ({name,date}: datalistsProps) => {
  return (
    <List.Item extra={date}>{name}</List.Item>
  )
}

export default Listitem