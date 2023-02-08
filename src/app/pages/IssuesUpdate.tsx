import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom';

const IssuesUpdate = () => {
  const [data, setData] = useState<any[]>([])
  const { id } = useParams()
  console.log('--------id', id)
  useEffect(()=>{
    axios.get(`http://localhost:4000/data/${id}`)
    .then((res:any) => {
        setData(res.data)
        console.log(data)
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
    <>{JSON.stringify(data)}</>
  )
}

export default IssuesUpdate





