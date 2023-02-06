import { Button } from 'antd-mobile';
import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function MyApp() {
  const navigate =  useNavigate()

  return (
    <div>
      <Button fill='outline' color='primary' onClick={() => navigate('/issues')}>Hello World</Button>
    </div>
  );
}
