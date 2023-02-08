import React, { useEffect, useState } from 'react'
import Listitem from './Listitem';
import { List } from 'antd-mobile';
import axios, * as others from 'axios';
import { Link } from 'react-router-dom';

const Index = () => {
  const [data, setData] = useState<any[]>([])
  useEffect(()=>{
    axios.get(`http://localhost:4000/data`)
    .then((res:any) => {
        setData(res.data)
      })
    .catch((error:any) =>{
      alert(error.message)
    })
  },[])

  if (data.length===0){
    return (
      <>Loading...</>
    )
  }

  return (
    <List>
      {data?.map(item => {
          return (
            <Link to={`/issues/${item.id}`} style={{'color': 'black', 'textDecoration': 'none'}}>
          <Listitem name={item.name} date={item.dateRegistered}/>
          </Link>
          )
        })}
    </List>
  )
}

export default Index