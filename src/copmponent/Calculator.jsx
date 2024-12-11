import styled from 'styled-components'
import { store } from '../store';
import { useDispatch, useSelector } from 'react-redux';

export const Calculator = () => {

  const {result,status} = useSelector((state)=>state.calc)
  const dispatch = useDispatch()
  

  const plus5=()=>{
    dispatch({type:"Plus5", num:5})
  }
  const Minus=()=>{
    dispatch({type:"Minus", num:4})
  }
  const Boluu=()=>{
    dispatch({type:"Boluu",num:3})
  }
  const Koboituu=()=>{
    dispatch({type:"Koboituu",num:2})
  }

  return (
    <StyleCalculator>
      <h1>Calculator Redux</h1>
      <button onClick={plus5}>+5</button>
      <button onClick={Minus}>-4</button>
      <button onClick={Boluu}>/2</button>
      <button onClick={Koboituu}>*3</button>
      <h1>result: {result}</h1>
      <h1>{status}</h1>
    </StyleCalculator>
  )
}

// const calculatorReduser = ()=>{

// }

// const store = createStore()

const StyleCalculator = styled.div`
  padding: 20px;
  width: 300px;
  border: 1px solid;
  margin-left: 400px;
  background-color: #00ffaa;
  display: flex;
  flex-direction: column;
button{
  margin-top: 20px;
  padding: 5,6;
  width: 40px;
}
`
