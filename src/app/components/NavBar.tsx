import React from 'react'
import { NavBar as Navbar } from 'antd-mobile'
import BackArrowIcon from '../icons/BackArrowIcon'

const NavBar = () => {
  return (
    <Navbar
      back={<BackArrowIcon/>}
      style={{backgroundColor: 'blue', color: '#fff', width: '100%'}}
    >Gardenia</Navbar>
  )
}

export default NavBar