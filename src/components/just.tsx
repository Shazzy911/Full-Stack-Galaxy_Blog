
import React from 'react'
import {  useSelector } from 'react-redux/es/hooks/useSelector';
interface myType {
    counter: number;
}

const Just = () => {
    const count = useSelector((state: myType)=> state.counter)



  return (
    <>
    <h1>{count}</h1>

    </>
  )
}

export default Just