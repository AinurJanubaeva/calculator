

const initialState={
    disablead:true
}

 export const authReduser=(state=initialState,action)=>{
    console.log(action);
    if (action.type==="INP") {
        return{
            ...state,
            disablead:action.value.length < 5
        }
    }
    return state
}