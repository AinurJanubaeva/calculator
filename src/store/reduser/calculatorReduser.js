const initialState={
    result: 20,
    status:'SUCSESS',
    todo: [{}]
 }

  export const calculatorReduser = (state=initialState,action)=>{
     console.log(action);
     if (action.type==="Plus5") {
         return {
           ...state,
           result:state.result+action.num
         }
        
     }
     if (action.type==="Minus") {
         return {
           ...state,
           result:state.result-action.num
         }
        
     }
     if (action.type==="Boluu") {
         return {
           ...state,
           result:state.result/action.num,
           status:'ERROR'
         }
        
     }
     if (action.type==="Koboituu") {
         return {
           ...state,
           result:state.result*action.num,
        
         }
        
     }
     return state
 }


 

 