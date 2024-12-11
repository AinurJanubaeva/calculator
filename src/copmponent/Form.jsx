import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Form = () => {
 const test = useSelector((state)=>state.auth)
 const dispatch = useDispatch()
 const inputVlue=(e)=>{
  dispatch({type:"INP",value:e.target.value})
 }
  return (
    <div>
        <input onChange={inputVlue} type="text" />
        <button disabled={test.disabled}>ADD</button>
    </div>
  )
}

export default Form