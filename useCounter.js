import {useState} from 'react'

export const useCounter = (initialState=10) => {
    const [state, setstate] = useState(initialState)//10

    const increment = (factor = 1)=>{
        setstate(state+factor)
    }

    const reset = ()=>{
        setstate(0)
    }


    const decrement = (factor = 1)=>{
        setstate(state-factor)
    }

    return {
        state,
        increment,
        decrement,
        reset
    }

 
}
